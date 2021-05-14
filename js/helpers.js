import { JSDOM } from 'jsdom';
import { async } from 'regenerator-runtime';
import { DB_URL } from './config.js';

export const getJSON = async function(promiseArray)
{ 
    try
    {
        // 1) complete all fetches
        const response = await Promise.all(promiseArray);
        
        // 2) complete all responses
        const responseArr = [];
        response.forEach(res => { responseArr.push(res.text()) });
        const dom = await Promise.all(responseArr);

        // 3) complete all doms
        const domArr = []
        dom.forEach(text => { domArr.push(new JSDOM(text)) });
        const values = await Promise.all(domArr);
        
        return values;
    }
    catch(err)
    {
        throw err;
    }
};

export const getDbData = async function()
{
    try
    {
        const response = await fetch(`${DB_URL}`);
        if(!response.ok) throw new Error(response.message);
        
        const res = await response.json();
        if(res.status === 'failed') throw new Error(res.message);
        return res.result;
    }
    catch(err)
    {
        throw err;
    }
    
}