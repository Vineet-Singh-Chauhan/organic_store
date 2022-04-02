
function fnameCheck(a) {
    let firstNameVal = a.value.trim().length;
    if (firstNameVal == 0) {
        // setErrorMsg(a,"First Name cannot be blank");
        console.log("zero");
        // a.className = "form-control username modalformerror";
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "block";
        a.parentElement.querySelector("p").innerText = "This field cannot be blank";
        a.parentElement.querySelector("p").style.color = "tomato";
        a.style.borderColor="tomato";

    }
    else if (firstNameVal < 3) {
        // setErrorMsg(a,"First Name cannot be less than 3 letters");
        console.log("<3");
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "block";
        a.parentElement.querySelector("p").innerText = "Must have atleast three characters";
        a.parentElement.querySelector("p").style.color = "tomato";
        a.style.borderColor="tomato";

    }
    else{
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "none";
        a.parentElement.querySelector("p").style.display= "none";
        a.style.borderColor="var(--pri-color)";
    }

}

function emailCheck(a){
    let emailVal=a.value.trim().length;
    let emailAddress=a.value.trim();
    if(emailVal==0){
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "block";
        a.parentElement.querySelector("p").innerText = "This field cannot be blank";
        a.parentElement.querySelector("p").style.color = "tomato";
        a.style.borderColor="tomato";
    }
    else if (!isemail(emailAddress)){
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "block";
        a.parentElement.querySelector("p").innerText = "Enter a valid Email";
        a.parentElement.querySelector("p").style.color = "tomato";
        a.style.borderColor="tomato";
    }
    else{
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "none";
        a.parentElement.querySelector("p").style.display= "none";
        a.style.borderColor="var(--pri-color)";
    }

}

function isemail(emailVal){
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol<1) return false;
    let dot= emailVal.lastIndexOf(".");
    if(dot<= atSymbol + 2) return false;
    if (dot === emailVal.length-1 || dot===emailVal.length-2) return false;
    return true;
    
}

function msgCheck(a){
    let msgVal=a.value.trim().length;
    if(msgVal<20){
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "block";
        a.parentElement.querySelector("p").innerText = "Please elaborate your thoughts/queries in more than 20 words";
        a.parentElement.querySelector("p").style.color = "tomato";
        a.style.borderColor="tomato";
    }
    else{
        a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "none";
        a.parentElement.querySelector("p").style.display= "none";
        a.style.borderColor="var(--pri-color)";
    }
}

function setSuccessMsg(){
    // if(document.querySelectorAll(".bi-exclamation-diamond").forEach(function(e){
    //     e.style.display=="block"
    // })
    // )
    // console.log("success")
    let cnt=0;
    let status=(document.querySelectorAll(".bi-exclamation-diamond"));
    status.forEach(function(e){
        if(e.style.display=="none"){
        
        cnt++;
    }
    })
    // console.log(cnt)
    if(cnt==4){
        swal("Thank you !" , "You're response have been recorded!", "success").then(
            function(){
                location.href=`hello.html?username=${usernameVal}`
            }
        );
    }
    }
    let userhere = sessionStorage.getItem('user1');
    document.querySelector(".welcome-txt").innerText = userhere;
    document.querySelector(".usermenu-msg").innerText ="Hello "+ userhere;
function validate() {
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let email = document.getElementById("email");
    let msg = document.getElementById("msg");
    
    
    fnameCheck(firstName);
    fnameCheck(lastName);
    emailCheck(email);
    msgCheck(msg);
    setSuccessMsg();
    // firstName=document.getElementsByClassName("firstname");
    // console.log(firstName[0].value.trim().length)
}