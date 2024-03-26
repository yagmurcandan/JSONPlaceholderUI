/// <reference path= "./main.js" />
///  <reference path= "./helpers.js" />

import { base_url,posts_url } from "./main.js";
import { getData } from "./helpers.js";

const posts_content=document.getElementById('posts');

const PostCard = ({ title, body, id}) =>`
<div class="col-4">
<div class="card">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p>${body}</p>
        <a href="/post/?id=${id}" class="btn btn-primary">Go to Post</a>
      </div>
    </div>
  </div>
` ;


export const getPosts = () =>
 getData({ base_url: base_url, path: posts_url }).then((posts) => {
  posts.forEach((post) => {
    posts_content.innerHTML += PostCard({
      title: post.title,
      body: post.body,
      id: post.id,
    });
  });
});


