const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");

const Blog =  document.querySelector('.flex-container')
const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');


const getblog = JSON.parse(localStorage.getItem("article")).sort().reverse();

let check = localStorage.getItem("article");
var Readmessage = getblog[id];

// store comment into local storage


Blog.innerHTML = `
                <div class="flex-container">
                <div class="para">
                    <h2><span>${Readmessage.date}</span> <br>Author :  ${Readmessage.authorName}</h2>
                    <div class="image"> <img src="${Readmessage.image}" />
                    </div>  
                          <h3>Article Title : ${Readmessage.articleName}</h3> <br> <br>
                      
                    <p>
                      ${Readmessage.message}
                    </p> <br><br> 
                        <a href="/pages/blogs.html"><span class="back">back</span></a> 
                </div>
                </div>


                <div class="container">
                <h2>Leave us a comment</h2>
                <form action="" >
                  <input type="text" name="name" id="name" placeholder="Your Name" >
                  <br> <br> <br>
                  
                    <textarea placeholder="Add your comment" class="comment-input"></textarea>
                   <div class="btn">
                    <input type="submit" value="Post Comment" class="comment-submit">
                    <button type="reset" class="comment-cancel">Cancel</button>
                   </div>
                </form>
        </div>


                <div class="read-comment">
                    <h2><span class="title">Read Comments</span></h2>
                    <p><span  class="date">29/12/2021 6:41 09 at 6:41 09 pm</span> </p>

                  <!--   <p id="likebtn">likes <span id="displikebtn">Displike</span></p> -->

                </div>
                </div>
        `;
        
let BlogComment = document.querySelector(".article-comments");
let div = document.createElement('div');

