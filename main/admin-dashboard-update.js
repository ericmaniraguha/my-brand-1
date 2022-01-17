window.onload = function() {

    myform = document.getElementById('myform');
    authorName = document.getElementById('authorName');
    articleName = document.getElementById('articleName');
    message = document.getElementById('message');
    date = document.getElementById('date');
    submitbtn = document.getElementById('submit');
 
    dynamicHere = document.getElementById('dynamicHere')
    cardBody = document.getElementsByClassName('card-body')[0]

    submitbtn.addEventListener('click', function(e) {
        e.preventDefault();

        authorNameTxtValue = authorName.value;
        articleNameTxtValue = articleName.value;
        dateTxtValue = date.value;
        messageTxtValue = message.value;
        console.log(authorNameTxtValue,articleNameTxtValue, dateTxtValue,messageTxtValue)

        if (authorNameTxtValue == '' || articleNameTxtValue == '' || dateTxtValue == '' || messageTxtValue =='') {
            UI.messages('Insert All Text Fields', 'danger');
            return
        } else {
            var articles = new article(authorNameTxtValue, articleNameTxtValue, dateTxtValue,  messageTxtValue);

            UI.clearFields();
            UI.displayData(articles)
            Store.setStored(articles)
            UI.messages('Data Inserted', 'success')
        }

    })
    dynamicHere.addEventListener('click', function(e) {
        if (e.target.classList.contains('RemoveIt')) {
            UI.removeRow(e.target)
        }

    })
    class article {
        constructor(authorNameTxtValue, articleNameTxtValue,dateTxtValue,  messageTxtValue) {
            this.author = authorNameTxtValue;
            this.article = articleNameTxtValue;
            this.date = dateTxtValue;
            this.message =  messageTxtValue;
        }
    }
 
    class UI {
        static clearFields() {
            document.getElementById('authorName').value = '';
            document.getElementById('articleName').value = '';
            document.getElementById('date').value = '';
            document.getElementById('message').value = '';
            
        }

        static displayData(obj) {
            let articleFromLocalStorage = Store.getStored()
            articleFromLocalStorage.push(obj)
            UI.populateTR(articleFromLocalStorage)

        }
        

        static populateTR(articleFromLocalStorage) {
            articleFromLocalStorage.forEach(function(onebyone) {
                dynamicHere.innerHTML += ` <tr>
                <td>${onebyone.article}</td>
                <td>${onebyone.author} </td>
                <td>${onebyone.article}</td>
                <td>${onebyone.date}</td>
                <td>${onebyone.message} </td>
            
                <td><button class='btn btn-warning RemoveIt'>delete</button></td>     
                        
                        
            </tr>`

            })
        }
        static messages(txt, className) {
            let divs = '';
            divs = document.createElement('div')
            divs.classList = `alert alert-${className}`
            divs.innerText = txt;
            cardBody.insertBefore(divs, myform)
            setTimeout(function() {
                divs.remove()
            }, 2000)
        }

        static removeRow(element) {
            date = element.parentElement.parentElement.firstElementChild.innerText

            element.parentElement.parentElement.remove()
            Store.removeStored(date)
        }
    }

    class Store {
        static getStored() {
            let articles = ''
            if (localStorage.getItem('article') == null) {
                articles = []
            } else {
                articles = JSON.parse(localStorage.getItem('article'))
            }
            return articles
        }

        static setStored(x) {

            let articles = Store.getStored()
            console.log(articles)
            articles.push(x)
            localStorage.setItem('article', JSON.stringify(articles))
        }
        static removeStored(date) {
            let Allvalues = Store.getStored()
            Allvalues.forEach((onebyone, index) => {
                if (onebyone.date == date) {
                    Allvalues.splice(index, 1);
                }
            })

            localStorage.setItem('article', JSON.stringify(Allvalues))
        }
    }
    UI.populateTR(Store.getStored())
}

