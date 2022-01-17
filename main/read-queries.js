const queryCollection = document.querySelector('.column');
var q = localStorage.getItem('queries'); // the one we setted for item 
var splitObj = JSON.parse(q);

var msg = splitObj.sort().reverse();

function display(doc) {
    
    let div = document.createElement('div');
    div.setAttribute('class', 'query');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let span = document.createElement('span');

    h4.textContent = doc.Name;
    p.textContent = doc.Message;
    span.textContent = doc.Email;
    div.appendChild(h4)
    div.appendChild(p)
    div.appendChild(span)
    queryCollection.appendChild(div)
}
msg.forEach(messages => {
    display(messages);
})