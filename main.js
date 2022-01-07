// var headerElement = document.getElementById('header');
// var menuElement = document.getElementById('menu-mobile');
// var menuHight = headerElement.clientHeight;

// menuElement.onclick = function() {
//     var isClosed = headerElement.clientHeight === menuHight
//     if (isClosed) {
//         headerElement.style.height = 'auto'
//     } else {
//         headerElement.style.height = null
//     }
// }            

// var count = 0    
// var menuItems = document.querySelectorAll('.nav li a[href*="#"]')

// var subNav = document.getElementById('sub-nav-id');

// for (var i = 0; i < menuItems.length; i++) {
//     var menuItem = menuItems[i];
   


//     menuItem.onclick = function(event) {
//     var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-nav')

//         if (isParentMenu) {
//             event.preventDefault()
//             count += 1
//             console.log(count)

//         } else {
//             headerElement.style.height = null 
                              
//         }

//         if (count % 2 === 0) {
//             subNav.style.display = 'none'
//         } else {
//             subNav.style.display = null

//         }
        
        

        
//     }


// }

htmlLog = `<div class="login-wrap">
<div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
    <div class="login-form">
        <div class="sign-in-htm">
            <div class="group">
                <label for="user-in" class="label">Username</label>
                <input id="user-in" type="text" class="input">
            </div>
            <div class="group">
                <label for="pass-in" class="label">Password</label>
                <input id="pass-in" type="password" class="input" data-type="password">
            </div>
            <div class="group">
                <input id="check-in" type="checkbox" class="check" checked>
                <label for="check-in"><span class="icon"></span> Keep me Signed in</label>
            </div>
            <div class="group">
                <input type="submit" class="button" onclick="signIn()" value="Sign In">
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
            </div>
        </div>
        <div class="sign-up-htm">
            <div class="group">
                <label for="user-up" class="label">Username</label>
                <input id="user-up" type="text" class="input">
            </div>
            <div class="group">
                <label for="pass-up" class="label">Password</label>
                <input id="pass-up" type="password" class="input" data-type="password">
            </div>
            <div class="group">
                <label for="pass-repeat-up" class="label">Repeat Password</label>
                <input id="pass-repeat-up" type="password" class="input" data-type="password">
            </div>
            <div class="group">
                <label for="email-up" class="label">Email Address</label>
                <input id="email-up" type="text" class="input">
            </div>
            <div class="group">
                <input onclick="signUp()" type="submit" class="button" value="Sign Up">
            </div>
            <div class="hr"></div>
            <div class="foot-lnk">
                <label for="tab-1">Already Member?</a>
            </div>
        </div>
    </div>
</div>
</div>`

var modalLog = document.querySelector('.modal-login')
var modal = document.querySelector('.add-content')

var usersApi = "https://61bc10bed8542f001782452a.mockapi.io/userApi"


console.log(modal)

function openLog(){
    modalLog.classList.add("display-block")
    modal.innerHTML = htmlLog;
}

function closeModal() {
    modalLog.classList.remove("display-block")
}

function createAccDone(userName,pass){
    document.querySelector("#user-in").value = userName;
    document.querySelector("#pass-in").value = pass;
    document.querySelector("#tab-2").checked = false
    document.querySelector("#tab-1").checked = true
}

async function signUp() {
    var user = document.querySelector("#user-up").value
    var pass = document.querySelector("#pass-up").value
    var passRe = document.querySelector("#pass-repeat-up").value
    var email = document.querySelector("#email-up").value

   if (await getName(user) === null && checkPass(pass,passRe)== true) {
        var data ={
            name: user,
            pass: pass,
            email: email,
            product:[]
        };
        createAcc(data);
        console.log("ok")
        createAccDone(user,pass);
    } else {
        console.log("fal")
    }    
}

async function signIn(){
    var userName = document.querySelector("#user-in").value
    var pass = document.querySelector("#pass-in").value

    console.log(userName)
    var data = await getName(userName)
    console.log(data)
    if(data === null){
        console.log("ten chua co")
    } else {
        if(checkPass(pass,data.pass) === false){
            console.log("pass sai")
        } else {
            console.log("ok")
            ipa = "https://61bc10bed8542f001782452a.mockapi.io/userApi/"+data.id;  
            closeModal()
            signInSucc(data,ipa)
            alert("Logged in successfully")
                    
        }
    }
}


async function getName(userName){
    var data = await getUsers(usersApi)
    
    for(i = 0; i < data.length; i++){
        if (data[i].name === userName){
            
            return data[i]
        } 
    }
    return null   
}

function checkPass(pass,passRe){
    if (pass === passRe){
        return true
    } else {
        return false
    }
}

function createAcc(data){
    var options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
    }
    handleData(usersApi,options);
}

function handleData(usersApi,options){
    fetch(usersApi,options)
        .then(function (response){
            response.json()
        })
}

async function getUsers(Api){
   return await fetch(Api)   
        .then(res=>res.json())      
}

function signInSucc(acc,ipa){

}