const urlParams = new URLSearchParams(location.search);
var id = urlParams.get("id");

var blog1 = document.querySelector('.flex-container');

const getblog = JSON.parse(localStorage.getItem("article"));
var Readmessage = getblog[id];

blog1.innerHTML = `
<div class="para">
<h2 class="title"><span>Published on 15th july, 2021</span> <br> Author : Eric M.</h2>
<div class="image"> </div>  
      <h3>How ICT is powering the world....</h3> <br> <br>
   
<p>${Readmessage.message}</p> <br><br>
    
    <div class="voting">
      <button id="likebtn">
        <i class="fa fa-thumbs-up"></i>
      </button>
      <input type="number" id="input1" value="0" />

      <button id="dislikebtn">
        <i class="fa fa-thumbs-down"></i>
      </button>
      <input type="number" id="input2" value="0" />
    </div>
    <a href="/pages/blogs.html" class="back-blog"><span class="back">back</span></a> 
</div>


<div class="container">
<h2>Leave us a comment</h2>
<form action="" >
    <textarea placeholder="Add your comment" class="comment-input"></textarea>
   <div class="btn">
    <input type="submit" value="Post Comment" class="comment-submit">
    <button type="reset" class="comment-cancel">Cancel</button>
   </div>
</form>
</div>


<div class="read-comment">
<h2><span class="title">Read Comments </span></h2>
<div class="comments">
  <div class="">
    <img
      class="comment-avatar"src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
    />
    <div>
      <h3 class="comment-author">Eric Maniraguha</h3> <br> <br>
      <p class="comment-body">Your idea is important to us.....</p> 
    </div>
  </div>
</div>
<script src="../main/comment-blog.js"></script>
</div>
`
