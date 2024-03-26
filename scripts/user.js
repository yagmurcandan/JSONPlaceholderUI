// <reference path= "./main.js" />
///  <reference path= "./helpers.js" />

import {base_url,users_url,albums_url,todos_url} from "./main.js";
import { getData } from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
//  console.log(id);

const getAlbums = () =>
    getData({base_url:base_url, path: users_url + "/" + id + "/" + albums_url,
});


const getTodos = () =>
    getData({base_url:base_url, path: users_url + "/" + id + "/" + todos_url,
});


    

const albums_content=document.getElementById('albums');
const todos_content=document.getElementById('todos');

const  AlbumComponent = ({ album_title, id }) => `

<a href="album/?id=${id}" >
<div class="p-2 text-primary">
  ${album_title}
</div>
</a>
`;

const TodoComponent = ({ isCompleted, todo_title, index }) =>
`<div class="border-dark p-2">
  <h5>${todo_title}</h5>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="FlexCheck-${index}"  ${
  isCompleted ? "checked" : ""
} >
  <label class="form-check-label" for="flexCheckDefault">
      Default checkbox
  </label>
  </div>
</div>`;

export const getDataParallel = async() => {
    const albums= await getAlbums();
    const todos= await getTodos();

    albums.forEach((album) =>{
      albums_content.innerHTML += AlbumComponent({album_title:album.title, id:album.id,});
    });

    todos.forEach((todo, index) =>{
        todos_content.innerHTML += TodoComponent({todo_title:todo.title, isCompleted:todo.completed,index:todo.index,
        });
      });

};

