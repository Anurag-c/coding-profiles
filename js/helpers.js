import { JSDOM } from 'jsdom';
import { async } from 'regenerator-runtime';

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
        console.log(err.message);
        throw err;
    }
};