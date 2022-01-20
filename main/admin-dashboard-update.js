
    
    
    var url;
    document.querySelector("#image").addEventListener("change", function() {
        const image = new FileReader();
        image.readAsDataURL(this.files[0]);
        image.addEventListener("load", () => {
            url = image.result;
        })
    });


function ceatBlog(event) {
    event.preventDefault();


    var authorName = document.getElementById('authorName');
    var articleName = document.getElementById('articleName');
    var message = document.getElementById('message');
    var image = document.getElementById('image');
   
    console.log(authorName)
    
    var image_invalid = document.getElementById("image_invalid");
    var authorName_invalid = document.getElementById("authorName_invalid");
    var articleName_invalid = document.getElementById("articleName_invalid");
    var message_invalid = document.getElementById("message");

    if (authorName.value == "" && articleName.value == "" && image.value == "" && message.value == "") {
        authorName.style.border = "solid 1px red";
        image.style.border = "solid 1px red";
        message.style.border = "solid 1px red";
        articleName.style.border = "solid 1px red";

        image_invalid.style.display = "block";
        authorName_invalid.style.display = "block";
        message_invalid.style.display = "block";
        articleName_invalid.style.display = "block";

    } else {
        var obj = {
            authorName: authorName.value,
            articleName: articleName.value,
            message: message.value,
            image: url,
            comments: [],
            like: 0
        }
        let bloges = localStorage.getItem("article");
        if (bloges) {
            var converBlog = JSON.parse(bloges);
            converBlog.push(obj);
            localStorage.setItem("article", JSON.stringify(converBlog));
            alert("created well");
            window.location.reload();
        } else {
            var blogArray = [obj];
            localStorage.setItem("article", JSON.stringify(blogArray));
            console.log(blogArray);
            alert("created well");
            window.location.reload();
        }
    }
}