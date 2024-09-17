let divBlog = document.querySelector('.blog-container');
var blog1 = localStorage.getItem('article');
var blog = JSON.parse(blog1);
console.log(blog)

function viewer(info, idx) {
    let div = document.createElement('div');

    div.innerHTML = `
    <div class="blog-box">

    <div class="blog-img">
            <img src="${info.image}" alt="Blog">
    </div>

    <div class="blog-text">
        <span>Article Name : ${info.articleName}</span>
        <a href="blog-read-more-01.html?id=${idx}" class="blog-title">Author : ${info.authorName}</a>
        <p> ${info.message}</p>
        <a href="blog-read-more-01.html#${info.idx}">Read more</a>
    </div>

</div>`;
    divBlog.appendChild(div);

}

blog.forEach((element, idx) => {
    console.log(element)
    viewer(element, idx);
});


