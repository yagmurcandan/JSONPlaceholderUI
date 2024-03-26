/// <reference path= "./main.js" />
///  <reference path= "./helpers.js" />

import { base_url,posts_url,comments_url} from "./main.js";
import { getData} from "./helpers.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
//  console.log(id);

const comment_content=document.getElementById('comments');


const CommentCard = ({name, email, body}) => `

<div class="col-12 border border-secondary-subtle">
<div class="d-flex flex-column">
<h6>${name}</h6>
<a href="mailto:${email}">${email}</a>
<p>${body}</p>
</div>
</div>
`;


export const getPost = () =>
 getData({base_url:base_url, path:posts_url + "/" + id + "/" + comments_url,}).then((comments) => {
    comments.forEach((comment)=>{
        comment_content.innerHTML += CommentCard({
            name : comment.name,
            email : comment.email,
            body : comment.body, 
        });
    });

 });
