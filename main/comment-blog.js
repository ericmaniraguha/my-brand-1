const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");

const Blog = document.querySelector('.flex-container');
const Com = document.querySelector('.container');

const submit = document.querySelector('.comment-submit');
const commentInput = document.querySelector('#comment-input');
const nameInput = document.querySelector('#name-input');

// date function 
var time = new Date().toLocaleString('en-GB', {
  year: "numeric",
  month: 'long',
  day: '2-digit',
  weekday: "long",
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})


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
                

                  
            <div class="read-comment">
                <h2><span class="title">Read Comments </span></h2>
                <div class="comments">
                  <div class="">
                    <img
                      class="comment-avatar"src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                    />
                    <div>
                      <h3 class="comment-author">${comments.Name}</h3> <br> <br>
                      <p class="comment-body">${comments.Comment}</p> 
                    </div>
                  </div>
                </div>
        `;
  

        
// let BlogComment = document.querySelector(".article-comments");
// let div = document.createElement('div');

var inputName_invalid = document.getElementById("inputName_invalid");
var inputComment_invalid = document.getElementById("inputComment_invalid");

//  post comment function 
function commentPost(event) { 
  event.preventDefault();

  if (commentInput.value == "" || nameInput.value == "") {
    
    nameInput.style.border = "solid 1px red";
    commentInput.style.border = "solid 1px red";
    inputComment_invalid.style.display = "block";
    inputName_invalid.style.display = "block";

  }
  else {
    var obj = {
      id: uuidv4(),
      Name: nameInput.value,
      Comment: commentInput.value,
      Time: time,
   
    }
    let comments = localStorage.getItem("comments");
    if (comments) {
      var convert = JSON.parse(comments);
      convert.push(obj);
      localStorage.setItem("comments", JSON.stringify(convert));

      document.forms['form'].reset();
      window.alert("Thank you for your comment!");
    
    }
    else
    {
      var commentArr = [obj];
      localStorage.setItem("comments", JSON.stringify(commentArr));
    }
  }
}

