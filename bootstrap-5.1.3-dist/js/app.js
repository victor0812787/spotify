let dataBase = []

function checkuUsers() {
    let userName = localStorage.getItem("users");
    if (userName == null){
        return(dataBase)
    }else{
        return(dataBase = JSON.parse(userName))
    }
}
let get = function(){   
    let name = document.getElementById('text').value;
    let mail = document.getElementById('email').value;
    let num = document.getElementById('number').value;
    let password = document.getElementById('pass').value;

    if (name == '') {
        // error('first','put in your name');
       return alert('put in your name')
    }
    if (mail == '') {
       return alert('put in your email')
    }
    if (num == ''){
      return alert('put in your number')
    }
    if (password == '') {
        alert('put in your password')
    } else {
        let user = checkuUsers()
        if (user.length == 0) {
            user = {
                name: name,
                mail: mail,
                numb: num,
                password: password
            }
            dataBase.push(user)
            
            console.log(dataBase);
            localStorage.setItem('users', JSON.stringify(dataBase))
            window.location.href = '../home.html'  
        }else{

            let User = {
                    name: name,
                    mail: mail,
                    numb: num,
                    password: password
            }
            user.push(User)
            localStorage.setItem('users', JSON.stringify(user))
            window.location.href = '../home.html'
        }
    } 
}
let user = function() {
    let name = document.getElementById('text').value;
    let mail = document.getElementById('email').value;
    let num = document.getElementById('number').value;
    let password = document.getElementById('pass').value;

    let savedDataBaseJson = localStorage.getItem('users');
    dataBase = JSON.parse('savedDataBaseJson')

    if (name == '') {
        // error('first','put in your name');
       return alert('put in your name')
    }
    if (mail == '') {
       return alert('put in your email')
    }
    if (num == ''){
      return alert('put in your number')
    }
    if (password == '') {
        alert('put in your password') 
    }else{
        window.location.href = '../home.html'
        let dataBase = checkuUsers()
        index = dataBase.find (element == element.name == name && element.mail == mail && element.numb == num && element.password == password)

        if (index == undefined){
            sinleUser = index.name
            localStorage.setItem('singleUser', sinleUser)
        }else{
            console.log ('name or mail or num or password incorrect')
        }
    }      
}

let showuser = function(){
    sinleUser = localStorage.getItem('singleUser')
    document.getElementById('name').innerHTML = sinleUser
}