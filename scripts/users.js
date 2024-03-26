/// <reference path= "./main.js" />
///  <reference path= "./helpers.js" />

import  {base_url,users_url,user_url} from "./main.js";
import { getData } from "./helpers.js";

const users_content=document.getElementById('users');

const cardList = ({ name, username, company_name, id }) => `
<div class="card" style="width: 18rem;">
<a href="${"/" + user_url + "/?id=" + id}">
<div class="card-body">
  <h5 ="card-title">${name}</h5>
  <h6 class="card-subtitle mb-2 text-body-secondary">${username}</h6>
  <p class="card-text">${company_name}</p>
  </div>
  </a>
  </div>
`;



export const getUsers = () => 
getData({base_url, path: users_url}).then((users)=>{
    users.forEach((user) =>{
        users_content.innerHTML += cardList({
            name : user.name,
            username : user.username , 
            company_name: user.company.name,
            id:user.id,
        });
        });
  });
 