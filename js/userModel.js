import { DB_URL } from './config.js';
import { async } from 'regenerator-runtime';

export const state = {
    allUsersData : []
};

export const getAllUsersData = async function()
{
    try
    {   
        const response = await fetch(`${DB_URL}`);
        if(!response.ok) throw new Error(response.message);
        
        const res = await response.json();
        if(res.status === 'failed') throw new Error(res.message);
            
        state.allUsersData = res.result;
        state.allUsersData.sort((a, b) => b.overall - a.overall);
    }
    catch(err)
    {
        console.log(err.message);
        throw err;
    }
};