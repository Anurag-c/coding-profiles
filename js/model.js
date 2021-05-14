import { MY_API_URL } from './config.js';
import { async } from 'regenerator-runtime';
import { getJSON } from './helpers.js';

export const state = {
    allUsersData : [
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
        {
            roll : '18071A12F6',
            name : 'Nampally Anurag',
            codechef : 'sdroy01',
            hackerrank : 'anurag_nampally',
            interviewbit : 'anurag.nampally',
        },
        {
            roll : '18071A05G7',
            name : 'Thakur Rahul',
            codechef : 'rahul03692',
            hackerrank : 'rahul03692',
            interviewbit : 'rahul03692',
        },
        {
            roll : '18071A12D3',
            name : 'Ullas Reddy',
            codechef : 'ullasreddy3663',
            hackerrank : 'ullasreddy3663',
            interviewbit : 'ullasreddy3663',
        },
        {
            roll : '17071A12C4',
            name : 'Prashanth Bhonagiri',
            codechef : 'prashanth_b18',
            hackerrank : 'prashanth_bhona1',
            interviewbit : 'prashanth-bhonagiri',
        },
    ]
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
            console.log(user.name, 'codechef', r, p);
            user.codechefSolved = Math.ceil((p * 10 + (r * r)/30));
        });
    }
    catch(err)
    {
        console.log(err.message);
        console.log(err.message);
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
        response.forEach(res => {responseArr.push(res.json())});
        const values = await Promise.all(responseArr);

        users.forEach((user,idx) => {
            let score = 0;
            values[idx].forEach(subject => {
                if(subject.track_id === 3 || subject.track_id === 17) 
                    score += subject.practice.score;
            })
            user.hackerrankSolved = Math.ceil(score);
        });
    }
    catch(err)
    {
        console.log(err.message);
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
            console.log(dom);
            let score = dom.window.document.querySelector('div.stat:not(.rank) div[class="txt"]').textContent;
            
            user.interviewbitSolved = Math.ceil(parseInt(score)/3);
        });
    }

    catch(err)
    {
        console.log(err.message);
        throw err;
    }
};

export const getTen = async function(start)
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
}


export const getAllUsersData = async function()
{
    try
    { 
        await getInterviewBit(state.allUsersData.slice(0, 10));
        await Promise.all([getCodechef(state.allUsersData), getHackerRank(state.allUsersData)]);
        await getInterviewBit(state.allUsersData.slice(0, 10));
        state.allUsersData.forEach(user => {
            user.overall = user.codechefSolved + user.hackerrankSolved + user.interviewbitSolved;
        });
    }
    catch(err)
    {
        console.log(err.message);
        throw err;
    }
};

