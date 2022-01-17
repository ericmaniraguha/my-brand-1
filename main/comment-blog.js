const submit = document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput = document.querySelector('.comment-input');

// Display date function

function formatAMPM() {
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

    return n + ' ' +  time;
}
var today = formatAMPM();

// likes 
let likebtn = document.querySelector("#likebtn");
let displikebtn = document.querySelector("#displikebtn");

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

likebtn.addEventListener("click", () => {
  input1.value = parseInt(input1.value) + 1;
  input2.style.color = "green";
});

  dislikebtn.addEventListener("click", () => {
  input2.value = parseInt(input2.value) + 1;
  input.style.color = "red";
});

// 

function template(data) {
  commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <img class="comment-avatar" src="${data.avatar}" />
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}

function appendComment (event) {
  const data = {
    avatar: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    comment: commentInput.value,
    author: "User Comment" + " " + today
  };

  event.preventDefault();
  if (commentInput.value.length < 1) return;
  template(data);

  commentInput.value = "";

    localStorage.setItem('commentListing', commentList.innerHTML);

}
submit.addEventListener('click', appendComment, false)
const saved = localStorage.getItem('commentListing');
if (saved) {
  commentList.innerHTML = saved;
}

