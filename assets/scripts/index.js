// function foo() {
//     console.log("hello")
//     document.querySelector('#staticBackdrop');
// }
// console.log("hello")

function entry() {

    const username = document.querySelector(".username");
    const usernameVal = username.value.trim();
    if (usernameVal == "") {
        setErrorMsg(username, 'username cannot be blank');
    }
    else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username cannot be less than 3 characters');
    }
    else {
        setSuccessMsg(username, usernameVal);
    }

}

function setSuccessMsg(a, b) {
    a.className = "form-control username modalformcheck";
    a.parentElement.querySelector(".bi-check-circle").style.display = "block";
    document.querySelector(".close-btn").click();
    
    document.querySelector(".welcome-txt").innerText = b;
    document.querySelector(".usermenu-msg").innerText ="Hello "+ b;
    
    let i = 0;
    let txt = "Welcome " + b + ", hope you will enjoy Organic's products"; /* The text */
    let speed = 100; /* The speed/duration of the effect in milliseconds */

    function typeWriter() {
        if (i < txt.length) {
            

            document.querySelector(".typing").innerHTML+= txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        
    }
    typeWriter();

}
function setErrorMsg(a, b) {
    a.className = "form-control username modalformerror";
    a.parentElement.querySelector(".bi-exclamation-diamond").style.display = "block";
    a.parentElement.querySelector("p").innerText = b;
    a.parentElement.querySelector("p").style.color = "tomato";
}








document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,



    });



    splide.mount();
});



//--------------------splide 0f certificates-----------------//
document.addEventListener('DOMContentLoaded', function () {
    var splide2 = new Splide('.splide2', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        breakpoints: {
            
                1100: {
                    perPage: 3,
                },
                992: {
                    perPage: 2,
                },
                850: {
                    perPage: 2,
                },
                780: {
                    perPage: 1,
                },
            }
    });


    splide2.mount();
});


VanillaTilt.init(document.querySelectorAll(".second-section .col"),{
    max: 25,
    speed: 400,
    glare:true,
    "max-glare":1
});