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

htmlTickets = `
<div class="modal-tickets">

            <div class="row">
                <div class="col col-1">
                    <div class="img">
                        <img src="https://c.ststat.net/content/entimg//--1237882946-300x300.jpg" alt="">
                    </div>
                    <div class="infor">
                        <h2 class="address">Bedford Esquires, Room 2, Bedford</h2>
                        <p class="time">Thursday 27 Jan 2022 at 19:30.</p>
                        <p>Performing</p>
                        <p class="name">BILK</p>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="infor infor2">
                     
                        
                            <p>14+ only. 14s to 16s must be accompanied by an adult. No refunds will be given for incorrectly booked tickets.</p>
                            <p id="warning1"></p>
                          <div class="row">
                              <div class="col">Ticket type</div>
                              <div class="col">Cost</div>
                              <div class="col">Quantity</div>
                          </div>
                          
                          <div class="row">
                            <div class="col">GENERAL ADMISSION</div>
                            <div class="col">$9.2</div>
                            <div class="col">
                                <select onclick="removeWarning(warning1)" id="Selection-tickets">

                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                            </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>* Handling and delivery fees may apply to your order</p>
                            </div>
                            <div class="col">
                                <button onclick="Buyticlets()">Continue </button> 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>`

htmlBuyticlets = `
<div class="modal-tickets">

            <div class="row">
                <div class="col col-1">
                    <div class="img">
                        <img src="https://c.ststat.net/content/entimg//--1237882946-300x300.jpg" alt="">
                    </div>
                    <div class="infor">
                        <h2 class="address">Bedford Esquires, Room 2, Bedford</h2>
                        <p class="time">Thursday 27 Jan 2022 at 19:30.</p>
                        <p>Performing</p>
                        <p class="name">BILK</p>
                    </div>

                    <div class="infor cont-time">
                        <p class="countdown-time">Your tickets are held for <p id="time-add">05:00</p></p>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="infor infor2">
                        <h2>Delivery Options</h2>
                        <p id="warning1"></p>
                        
                            <div class="box">
                                <label onclick="removeWarning(warning1)" for="delivery-options-1" class="contain">
                                    <input  type="radio" name="delivery-options"  id="delivery-options-1" value="2.5" >
                                    Standard Delivery
                                    <span class="postage-price ">£2.50 </span>
                                    <br>
                                    <small class="postage-info">Your tickets will be delivered to the address you specify.</small>
                                </label>
                            </div>

                            <div class="box">
                                <label onclick="removeWarning(warning1)" for="delivery-options-2" class="contain">
                                    <input  type="radio" name="delivery-options"  id="delivery-options-2" value="0">
                                    Box Office Collection
                                    <span class="postage-price ">FREE</span>
                                    <br>
                                    <small class="postage-info">Your tickets will be available for collection from the venue box office on the day. You will need to quote your order reference number and must provide a payment card or ID matching your booking details. All members of your party must arrive together, and tickets will not be issued without proof of booking.</small>
                                </label>
                            </div>

                            <div class="box">
                                <label onclick="removeWarning(warning1)" for="delivery-options-3" class="contain">
                                    <input  type="radio" name="delivery-options"  id="delivery-options-3" value="0">
                                    E-Ticket
                                    <span class="postage-price ">FREE</span>
                                    <br>
                                    <small class="postage-info">Your tickets will be attached to your confirmation email. Please ensure you can display your tickets on your phone or bring printed copies, as you will not gain access to the venue without them.</small>
                                </label>
                            </div>
                    </div>

                    <div class="infor infor2">
                        <h2>Refund Protection</h2>
                        <p id="warning2"></p>
                        
                        <div class="box">
                            <label onclick="removeWarning(warning2)" for="refund-protection-1" class="contain">
                                <input  type="radio" name="refund-protection"  id="refund-protection-1" value="3.2" >
                                Yes, please protect my tickets
                                <span class="postage-price ">£3.20 </span>
                                <br>
                                <small class="postage-info">I can apply for a refund if I am unable to attend this event due to accidents, unexpected illnesses or specified unforeseen circumstances. By adding to my order I confirm that I have read and accepted TicketPlan's terms and conditions.</small>
                            </label>
                        </div>

                        <div class="box">
                            <label onclick="removeWarning(warning2)" for="refund-protection-2" class="contain">
                                <input  type="radio" name="refund-protection"  id="refund-protection-2" value="0">
                                No, do not protect my tickets.
                                
                                <br>
                                <small class="postage-info">I understand no refund can be given if I cannot attend.</small>
                            </label>
                        </div>
                    </div>

                    <div class="infor infor2">
                        <h2 class="name">bilk</h2>
                        <p class="time-asdress">Thursday 27 Jan 2022 at 19:30 | Bedford Esquires, Room 2, Bedford</p>
                        <div class="row">
                            <div class="col">
                                <p class="ticket-num">1</p>
                                <p> x GENERAL ADMISSION</p>

                            </div>
                            <div class="col">
                                <div class="ticket-cost">9.2</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p>Delivery Options</p>

                            </div>
                            <div class="col">
                                <div class="value-DO">9.2</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">                              
                                <p>Refund Protection</p>
                            </div>
                            <div class="col">
                                <div class="value-RP">9.2</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">                              
                                
                            </div>
                            <div class="col">
                                <p>Total</p>
                                <div class="ticket-Total">9.2</div>
                            </div>
                        </div>

                        <h1>Choose Payment Method</h1>
                        <p id="warning3"></p>

                        <div class="box">
                            <label onclick="removeWarning(warning3)" for="Payment-options-1" class="contain">
                                <input  type="radio" name="Payment-options"  id="Payment-options-1" value="card" >
                                <p class="img-payment">
                                    <img style="width:10%" src="https://cdn3.volusion.com/pysyf.hcsdd/v/vspfiles/photos/NTW-Visa-Gradient-2T.jpg?v-cache=1583923346" alt="">
                                    <img style="width:10%"src="https://cdn3.volusion.com/pysyf.hcsdd/v/vspfiles/photos/NTW-Master-2017-2T.jpg?v-cache=1583923346" alt="">
                                </p>
                            </label>

                            <label onclick="removeWarning(warning3)" for="Payment-options-2" class="contain">
                                <input  type="radio" name="Payment-options"  id="Payment-options-2" value="paypal" >
                                <p class="img-payment">
                                    <img style="width:20%" src="https://file.hstatic.net/1000012850/file/paypal-logo-2015_grande.png" alt="">
                                </p>
                            </label>
                            <label onclick="removeWarning(warning3)" for="Payment-options-3" class="contain">
                                <input  type="radio" name="Payment-options"  id="Payment-options-3" value="momo">
                                <p class="img-payment">
                                    <img style="width:7%" src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="">
                                </p>
                            </label>
                        </div>

                        <button class="pay" onclick="payment()">Continue<i class="fa fa-arrow-right" aria-hidden="true"></i></button>

                        

                        
                    </div>

                   


                
                
                
                </div>



            </div>
        </div>`

var modalLog = document.querySelector('.modal-login')
var modal = document.querySelector('.add-content')

var usersApi = "https://61bc10bed8542f001782452a.mockapi.io/userApi"


console.log(modal)

function openLog(){
    openModal(htmlLog);
}

function openModal(htmls){
    modalLog.classList.add("display-block")
    modal.innerHTML = htmls;
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
    var data = await getData(usersApi)
    
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

async function getData(Api){
   return await fetch(Api)   
        .then(res=>res.json())      
}

var accCustomer = ""
var ipaCustomer = ""

function signInSucc(acc,ipa){
    accCustomer = acc
    ipaCustomer = ipa
    
}

function logOut(){
    accCustomer = ""
    ipaCustomer = ""
    alert("You have been logged out")
    
}

function checkLoggedIn(){
    if(!ipaCustomer){
        alert("Please login")
    } else{
        return true

    }
}

// =============================== start buy

async function openModalBuyTickets(){
    data = await getData(ipa1)                       //ipa
    if(checkLoggedIn() ){
        if(countTickets(data) == false){
            console.log("over")
            // handel data
            openModal(htmlTickets);

        }else{
            console.log("ok")
            // handel data
            openModal(htmlTickets);
        }
    }
}


ipa1= "https://61bc10bed8542f001782452a.mockapi.io/londonTickets"

// ============================== step 2

async function Buyticlets(x){   // main
    data = await getData(ipa1)
    var ticketChoosing = document.querySelector("#Selection-tickets").value
    var ticketNum = countTickets(data)
    if (ticketNum == false){
        alert("sold out")

    } else {
        if(ticketChoosing > ticketNum){
            alert("The number of tickets you have selected has exceeded the number of tickets remaining")
        } else if(ticketChoosing == 0){
            document.querySelector("#warning1").innerHTML = "Please choose at least one type of ticket to buy"
        }
        
        else {
            // if(checkRoobot()){
                openModal(htmlBuyticlets) //handel data
                
                setTimeStart()
                countdown()
            // }
        }

    }
}

function countTickets(data) {
    var count = 0;    
    for (var i=0; i<data.length; i++){
        if(data[i].state != ""){
            count += data[i].peopleNum
        }
    }
    if (count <= 10){
        return count
    } else {
        return false
    }
}

async function chooseTickets(ipa){
    var data = await getData(ipa)
    for (var i = 0; i < data.length; i++){
        if (data[i].state == ""){
            ipaTicket = ipa +"/"+data[i].id
            console.log(ipaTicket)
            // updateTicket(ipaTicket)
            break;
        }
    }
}

// ===================================== step payment
function getValueRadio(list){
    // var list = document.getElementsByName(name)
    console.log("list",list)
    for (var i = 0; i < list.length; i++){
        if(list[i].checked){
            console.log("value",list[i].value)
            return list[i].value
        }
    }
}

function checkRadio(name1,name2,name3){
    
    if(!getValueRadio(name1)){
        document.querySelector("#warning1").innerHTML = "Please select a ticket delivery method"
        name1 = false
    } else{
        name1 = true
    }
    if(!getValueRadio(name2)){
        document.querySelector("#warning2").innerHTML = "Please select a Ticket Protection option"
        name2 = false
    }else{
        name2 = true
    }
    if(!getValueRadio(name3)){
        document.querySelector("#warning3").innerHTML = "Please select a payment method"
        name3 = false
    }else{
        name3 = true
    }

    if(name1 && name2 && name3){
        return true
    }
}

function removeWarning(id){
    console.log("id",id)
    id.innerHTML = ""
}

function payment(){                                                     // main

    var deliveryOptions = document.getElementsByName("delivery-options")
    var refundProtection = document.getElementsByName("refund-protection")
    var PaymentOptions = document.getElementsByName("Payment-options")

    if(checkRadio(deliveryOptions,refundProtection,PaymentOptions)){

    }
}

// ============================== countdown
var count = 120;
var seconds = 60
var minutes = 1
var x = 1

function setTimeStart(){
    count = 120;
    seconds = 60
    minutes = 1
    x = 1
}

function countdown() {
    count--
    seconds--
    if (x == 0){
        // move final step
        return
    }
    if(count == 1) {
        stopTime()
    }

    if(seconds == 0) {
        seconds = 59,
        minutes--
        if( minutes == 0){
            document.getElementById("time-add").innerHTML = "00:00"
            //  call return scren

            return
        }
     }
    if (seconds < 10){
        seconds = "0"+ seconds 
    }
    
    document.getElementById("time-add").innerHTML = "0"+minutes + ":" + seconds;
    seconds = parseFloat(seconds)
    t = setTimeout("countdown(x)", 1000);            
}

function stopTime(){
    x = 0
}

// ============================== stop countdown