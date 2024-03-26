import {getData} from "./helpers.js";
import * as main   from "./main.js";
import { getUsers } from "./users.js";
import { getDataParallel as getUser} from "./user.js";
import { getAlbum } from "./album.js";
import { getPosts } from "./posts.js";
import { getPost } from "./post.js";

const pathname = window.location.pathname;
const bare_path = pathname.replace(/\//, "");

if(bare_path === "users/"){
    getUsers();
}

if(bare_path === "user/") {
    getUser();
}
 

if(bare_path === "user/album/"){
    getAlbum();
}

if(bare_path === "posts/"){
    getPosts();
}

if(bare_path === "post/"){
    getPost();
}
