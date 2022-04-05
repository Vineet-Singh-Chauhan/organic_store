


// function addToCart(){
//     // console.log("liked");
//     if(cartBtn.classList=="btn btn-light ms-auto cartBtn"){
//         cartBtn.classList="btn btn-light ms-auto cartBtn added";
//         cartBtn.innerHTML=`Added <i class="bi bi-check-circle-fill"></i>`
//         // itemCnt.innerText=itemCnt.innerText.toString()+"q";
//         // itemCnt=parseInt(itemCnt.innerText);
//         // itemCnt++
        
//         // console.log(parseInt(itemCnt.innerText))
//         // console.log(itemCount)
//         itemCount++;
//         // console.log(itemCount)
//         itemCnt.innerText=itemCount;
//         // console.log(parseInt(itemCnt.innerText)+1)
//         // console.log(itemCnt.innerText)
//     }else{
//         cartBtn.classList="btn btn-light ms-auto cartBtn";
//         cartBtn.innerHTML="Add to Cart";
//         itemCount--;
//         itemCnt.innerText=itemCount;



//     }
    
//     // console.log(likeBtn.querySelector("i").classList)
// }


let userhere = sessionStorage.getItem('user1');
document.querySelector(".welcome-txt").innerText = userhere;
document.querySelector(".usermenu-msg").innerText ="Hello "+ userhere;



let cartBtn=document.querySelector(".cartBtn");
// cartBtn.addEventListener("click",addToCart);
let itemCnt=document.querySelector(".itemCnt");
itemCount=parseInt(itemCnt.innerText);


//--------------------Theme-plate-toggle----------------------------------//
let storeToggleVar = false;
let storeSlider = document.querySelector(".store-slider");
let storeBtn = document.querySelector(".storeBtn");

storeBtn.addEventListener("click", storeToggle);

function storeToggle() {
    if (storeToggleVar === false) {
        showStore();
        storeToggleVar = true;
        
    }
    else if (storeToggleVar === true) {
        hideStore();
        storeToggleVar = false;
        
    }
}

function showStore() {
    storeSlider.style.transform = "translateX(0)";
}

function hideStore() {
    storeSlider.style.transform = "translateX(-200px)";
}


/*----------------scroll spy--------------------*/
document.querySelectorAll(".storeDiv div").forEach(function(e){
    e.onclick=(function(){
        document.querySelectorAll(".storeDiv div").forEach(function(s){
            s.classList.remove("selected");
        })
        e.classList.add("selected")
    })
});

document.querySelector(".store-main").onscroll=function(){
    document.querySelectorAll(".store-main section").forEach(function(v,i){
        
        // console.log(v.getBoundingClientRect().y)
        if(v.getBoundingClientRect().y<window.innerHeight){
            document.querySelectorAll(".storeDiv div").forEach(function(v){
                v.classList.remove('selected')
            })
            document.querySelectorAll(".storeDiv div")[i].classList.add('selected')
        }
    

    })
}

// console.log(document.querySelectorAll(".store-main section"))




document.querySelector(".store-main").onscroll=function(){
    document.querySelectorAll(".store-main section").forEach(function(v,i){
        
        // console.log(v.getBoundingClientRect().y)
        if(v.getBoundingClientRect().y<window.innerHeight){
            document.querySelectorAll(".storeDiv div").forEach(function(v){
                v.classList.remove('selected')
            })
            document.querySelectorAll(".storeDiv div")[i].classList.add('selected')
        }
    

    })
}


/*----------------add to cart--------------------*/
document.querySelectorAll(".cartBtn").forEach(function(e){
    e.onclick=(function(){
        if(e.classList=="btn btn-light ms-auto cartBtn"){
        e.classList.add("added");
        e.innerHTML=`Added <i class="bi bi-check-circle-fill"></i>`
        itemCount++;
        // console.log(itemCount)
        itemCnt.innerText=itemCount;
        }
        else{
        e.classList="btn btn-light ms-auto cartBtn";
        e.innerHTML="Add to Cart";
        itemCount--;
        itemCnt.innerText=itemCount;
        }
    })
});

/*----------------like--------------------*/
document.querySelectorAll(".wish").forEach(function(e){
    e.onclick=(function(){
        if(e.querySelector("i").classList=="bi bi-heart-fill"){
        e.querySelector("i").classList="bi bi-heart";
       
        }
        else{
            e.querySelector("i").classList="bi bi-heart-fill";
        }
    })
});


/*------------------search mechanism----------------*/
let searchBar= document.getElementById("searchBar");
searchBar.addEventListener("input",function(){
    let searchTxt=searchBar.value.toLowerCase();
    let cards=document.querySelectorAll(".card");
    Array.from(cards).forEach(function(e){
        if(e.querySelector(".card-title").innerText.toLowerCase().includes(searchTxt)){
            e.style.display="block";
        }
        else{
            e.style.display="none";

        }
    })
    
})