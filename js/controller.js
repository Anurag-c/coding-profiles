import * as model from './model.js';
import view from './view.js';

import 'core-js/stable';
import 'regenerator-runtime';
import { async } from 'regenerator-runtime';

const controlUsers = async function()
{   
    try
    {
        view.renderSpinner();
        await model.getAllUsersData();
        view.render(model.state.allUsersData);
    }
    catch(err)
    {
        console.error(err.message);
    }
};

controlUsers();