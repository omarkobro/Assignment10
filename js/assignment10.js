let nameInput = document.getElementById("nameInput")
let signEmail = document.getElementById("signEmail")
let signPassword = document.getElementById("signPassword")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let signUp = document.getElementById("signUp")
let login = document.getElementById("login")
let loginLink = document.getElementById("loginLink")
let signupLink = document.getElementById("signupLink")
let signUpBox = document.getElementById("signUpBox")
let loginBox = document.getElementById("loginBox")
let nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
let passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
let arr = []
let myObjectName;
let myObjectEmail;
let myObjectPassword;
let userInfo ={

}

let LogInEmail;
let LogInPass;

    for(i = 0; i<arr.length; i++){}

function checkInputs(){
    userInfo = {
        name:nameInput.value,
        email:signEmail.value,
        pass:signPassword.value
    }
    if(nameRegex.test(nameInput.value) && emailRegex.test(signEmail.value) && passRegex.test(signPassword.value)){
        arr.push(userInfo)
        localStorage.setItem("list",JSON.stringify(arr))
        swal("Congrats, You've Signed Up successfully", {
            icon: "success",
            
        });
    }
    else if(!nameRegex.test(nameInput.value)){
        swal("Please Enter A Vaild Name");
    }
    else if(!emailRegex.test(signEmail.value)){
        swal("Please Enter A Vaild Email");
    }
    else if(!passRegex.test(signPassword.value)){
        swal("Please Enter A Vaild Password between 7 to 15 character \n and must have att least one number and one special Character ");
    }
}
signUp.addEventListener("click",  submitInfo)

function submitInfo(){
    if(localStorage.getItem("list") !== null){
        let arr = JSON.parse(localStorage.getItem("list"))
        for(i = 0; i<arr.length; i++){
            myObjectName = arr[i].name
            myObjectEmail = arr[i].email
            myObjectPassword = arr[i].pass
        }
        if(nameInput.value === myObjectName || signEmail.value === myObjectEmail){
            // console.log("hello");
            swal({
                title: "Hmmm...",
                text: "It Looks Like This Info Already Exist, Try Another One",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
        }
        else{
            checkInputs()
        }
    }
    else{
        checkInputs()
}
}

// Dont forget to solve the new page bug 
loginLink.addEventListener("click",function(){
    // console.log(signUpBox.classList);
    signUpBox.style.display = "none"
    loginBox.style.display = "block"
})
signupLink.addEventListener("click",function(){
    // console.log(signUpBox.classList);
    signUpBox.style.display = "block"
    loginBox.style.display = "none"
})




login.addEventListener("click",  loginFun)
function loginFun(){
    if(localStorage.getItem("list") == null){
        swal("it looks like we don't have such account, Please Sign Up");
    }

    if(emailInput.value === "" || passwordInput.value === ""){
        swal("Hold On!, These Fields Are Required");
    }
    else{
        arr = JSON.parse(localStorage.getItem("list"))
        // console.log(arr);
        for(i = 0; i<arr.length; i++){
            LogInEmail = arr[i].email
            LogInPass  = arr[i].pass
            if(emailInput.value === LogInEmail && passwordInput.value === LogInPass){
                console.log("hello " + arr[i].name);
                loginBox.style.display = "none"
                signUpBox.style.display = "none" 
                document.getElementById("homePage").style.display = "block"
                document.getElementById("welcomeMessege").innerHTML = `welcome `+arr[i].name+``
                return;
            }
        }
        if(emailInput.value !== LogInEmail || passwordInput.value !== LogInEmail){
            sweetAlert("Oops...", "incorrect Email or Password \n Try Again :)","error");
            return;
        }
    }
}

