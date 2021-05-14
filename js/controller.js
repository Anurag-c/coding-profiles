import * as userModel from './userModel.js';
import * as model from './model.js';
import view from './view.js';
import {SCRAP_KEY} from './config.js';

import 'core-js/stable';
import 'regenerator-runtime';
import { async } from 'regenerator-runtime';

const controlUsers = async function()
{   
    try
    {
        view.renderSpinner();
        await userModel.getAllUsersData();
        view.render(userModel.state.allUsersData);
    }
    catch(err)
    {
        console.error(err.message);
    }
};

const controlScrap = async function()
{
    try
    {
        const hash = window.location.hash.slice(1);
        console.log(hash);
        
        if(hash != SCRAP_KEY) controlUsers();
        else if(hash === SCRAP_KEY)
        {
            view.renderSpinner();
            await model.initalizeUsersData();
            view.render(userModel.state.allUsersData);
        }
    }
    catch(err)
    {
        view.renderError(err.message);
    } 
}

const init = function()
{
    view.addHandler(controlScrap);
};

init();

