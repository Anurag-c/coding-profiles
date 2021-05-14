import { MY_API_URL, DB_URL } from './config.js';
import { async } from 'regenerator-runtime';
import { getJSON, getDbData } from './helpers.js';
import * as userModel from './userModel.js';

const state = {
    allUsersData : []
};

const getCodechef = async function(users)
{
    try
    {
        const promiseArray = [];
        users.forEach(user => {
            promiseArray.push(fetch(`${MY_API_URL}https://www.codechef.com/users/${user.codechef}`));
        });

        const values = await getJSON(promiseArray);

        users.forEach((user, idx) => {
            const dom = values[idx];
            
            let r = parseInt(dom.window.document.querySelector('.rating-number').textContent);
            let solved = dom.window.document.querySelector('section.problems-solved h5').textContent;
            let p = parseInt(solved.slice(solved.indexOf('(') + 1, solved.length - 1));
            
            r = (r > 1300) ? r - 1330 : 0;
            user.codechefSolved = Math.ceil((p * 10 + (r * r)/30));
        });
    }
    catch(err)
    {
        throw err;
    }
};

const getHackerRank = async function(users)
{
    try
    {
        const promiseArray = [];
        users.forEach(user => {
            promiseArray.push(fetch(`${MY_API_URL}https://www.hackerrank.com/rest/hackers/${user.hackerrank}/scores_elo`));
        });

        const responseArr = [];
        const response = await Promise.all(promiseArray);
        response.forEach(res => {
            if(!res.ok) responseArr.push(new Promise(resolve => resolve('404')));
            else responseArr.push(res.json())
        });
        const values = await Promise.all(responseArr);

        users.forEach((user,idx) => {
            if(values[idx] === '404') 
                user.hackerrankSolved = 0;
            else
            {
                let score = 0;
                values[idx].forEach(subject => {
                    if(subject.track_id === 3 || subject.track_id === 17) 
                        score += subject.practice.score;
                })
                user.hackerrankSolved = Math.ceil(score);
            }
        });
    }
    catch(err)
    {
        throw err;
    }
};

const getInterviewBit = async function(users)
{
    try
    {
        const promiseArray = [];
        users.forEach(user => {
            promiseArray.push(fetch(`${MY_API_URL}https://www.interviewbit.com/profile/${user.interviewbit}`));
        });

        const values = await getJSON(promiseArray);
        users.forEach((user, idx) => {
            const dom = values[idx];
            let score = dom.window.document.querySelector('div.stat:not(.rank) div[class="txt"]')
            if(score) user.interviewbitSolved = Math.ceil(parseInt(score.textContent)/3);
            else user.interviewbitSolved = 0;
        });
    }

    catch(err)
    {
        throw err;
    }
};

const getLeetcode = async function(users)
{
    try
    {
        const promiseArray = [];
        users.forEach(user => {
            console.log(user.hackerrank);
            const data = {
                'OperationName': "getUserProfile",
                'query': "query getUserProfile($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n    __typename\n  }\n  matchedUser(username: $username) {\n    username\n    socialAccounts\n    githubUrl\n    contributions {\n      points\n      questionCount\n      testcaseCount\n      __typename\n    }\n    profile {\n      realName\n      websites\n      countryName\n      skillTags\n      company\n      school\n      starRating\n      aboutMe\n      userAvatar\n      reputation\n      ranking\n      __typename\n    }\n    submissionCalendar\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n        __typename\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n        __typename\n      }\n      __typename\n    }\n    badges {\n      id\n      displayName\n      icon\n      creationDate\n      __typename\n    }\n    upcomingBadges {\n      name\n      icon\n      __typename\n    }\n    activeBadge {\n      id\n      __typename\n    }\n    __typename\n  }\n}\n",
                'variables': {'username': user.hackerrank}
            }
            promiseArray.push(fetch("https://programmerplanet.herokuapp.com/https://leetcode.com/graphql", {
                headers : {
                 "content-type": "application/json"
               },
               body: JSON.stringify(data),
               method : "POST"
            }));
        });

        const responseArr = [];
        const response = await Promise.all(promiseArray);
        response.forEach(res => {responseArr.push(res.json())});
        const values = await Promise.all(responseArr);

        users.forEach((user, idx) => {
            if(values[idx].data.matchedUser === null)
                user.leetcodeSolved = 0;
            else
            {
                const score = values[idx].data.matchedUser.submitStats.acSubmissionNum[0].count
                if(score) user.leetcodeSolved = 20 * parseInt(score);
                else user.leetcodeSolved = 0;
            }
        });
    }

    catch(err)
    {
        throw err;
    }
};

/*export const getTen = async function(start)
{
    try
    {
        const users = state.allUsersData.slice(start, start + 10);
        await Promise.all([getCodechef(users), getHackerRank(users)]);
    }
    catch(err)
    {
        console.log(err.message);
        throw err;
    }
}*/

const getAllUsersData = async function()
{
    try
    {   
        await Promise.all([getCodechef(state.allUsersData), getHackerRank(state.allUsersData), getInterviewBit(state.allUsersData), getLeetcode(state.allUsersData)]);
        
        state.allUsersData.forEach(user => {
            
            user.internalcontestSolved = 0;
            user.overall = user.codechefSolved + user.hackerrankSolved + user.interviewbitSolved + user.leetcodeSolved;
        });

        const response = await fetch(`${DB_URL}update`, {
            headers : {
                'Content-type' : 'application/json'
            },
            method : 'POST',
            body : JSON.stringify(state.allUsersData)
        });

        if(!response.ok) throw new Error(response.message);
        
        const res = await response.json();
        if(res.status === false) throw new Error(res.message);
    }
    catch(err)
    {
        throw err;
    }
};

export const initalizeUsersData = async function()
{
    try
    {   
        const dbData = await getDbData();
        state.allUsersData = dbData;
        await getAllUsersData();
        state.allUsersData.sort((a, b) => b.overall - a.overall);
        userModel.state.allUsersData = state.allUsersData;
    }
    catch(err)
    {
        throw err;
    }
}

