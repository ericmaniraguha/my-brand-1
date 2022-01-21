const queryCollection = document.querySelector('.column');
var q = localStorage.getItem('queries'); 
var splitObj = JSON.parse(q);

var msg = splitObj.sort().reverse();

function display(messageUser) {
    
    let div = document.createElement('div');
    div.setAttribute('class', 'query');
    let h4 = document.createElement('h4');
    let br = document.createElement('br');
    let p = document.createElement('p');
    let hr = document.createElement('hr'); 
    let btn = document.createElement('button');
    btn.setAttribute("value", messageUser.id);
    btn.setAttribute("id", "deleteButton");
    btn.innerHTML = "Delete";
    let span = document.createElement('span');



    h4.textContent = messageUser.Fname;
    h4.textContent = messageUser.Lname;
    p.textContent = messageUser.Message;
    span.textContent = messageUser.Email;
    
    div.append(br);
    div.append(br);
    div.append(br);

    div.appendChild(h4).style.textTransform = "uppercase";
    div.appendChild(p);

    div.appendChild(span).style.color = "blue";
    div.appendChild(span).style.cursor= "pointer";
    div.appendChild(span).style.textDecorationLine= "underline";
    div.append(br);

    div.appendChild(btn).style.color = "back";
    div.appendChild(btn).style.background = "red";
    div.appendChild(btn).style.color = " skyblue";
    div.appendChild(btn).style.width = " 150px";
    div.appendChild(btn).style.height = " 30px";
    div.appendChild(btn).style.cursor= "pointer";
    
    div.append(hr);

    queryCollection.appendChild(div);
    document.querySelector("#deleteButton").addEventListener('click',
        function (e) { 
            console.log(e.getAttribute("value"))
        }
    );
}
msg.forEach(messages => {
    display(messages);
})

// delete comment one by one 
function deleteItem() { 
    localStorage.removeItem("div")
}