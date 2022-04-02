function like(){
    // console.log("liked");
    if(likeBtn.querySelector("i").classList=="bi bi-heart-fill"){
        likeBtn.querySelector("i").classList="bi bi-heart";
    }else{
        likeBtn.querySelector("i").classList="bi bi-heart-fill";
    }
    
    // console.log(likeBtn.querySelector("i").classList)
}


function addToCart(){
    // console.log("liked");
    if(cartBtn.classList=="btn btn-light ms-auto cartBtn"){
        cartBtn.classList="btn btn-light ms-auto cartBtn added";
        cartBtn.innerHTML=`Added <i class="bi bi-check-circle-fill"></i>`
        // itemCnt.innerText=itemCnt.innerText.toString()+"q";
        // itemCnt=parseInt(itemCnt.innerText);
        // itemCnt++
        
        // console.log(parseInt(itemCnt.innerText))
        // console.log(itemCount)
        itemCount++;
        // console.log(itemCount)
        itemCnt.innerText=itemCount;
        // console.log(parseInt(itemCnt.innerText)+1)
        // console.log(itemCnt.innerText)
    }else{
        cartBtn.classList="btn btn-light ms-auto cartBtn";
        cartBtn.innerHTML="Add to Cart";
        itemCount--;
        itemCnt.innerText=itemCount;



    }
    
    // console.log(likeBtn.querySelector("i").classList)
}


let userhere = sessionStorage.getItem('user1');
document.querySelector(".welcome-txt").innerText = userhere;
document.querySelector(".usermenu-msg").innerText ="Hello "+ userhere;

let likeBtn=document.querySelector(".wish");
likeBtn.addEventListener("click",like);

let cartBtn=document.querySelector(".cartBtn");
cartBtn.addEventListener("click",addToCart);
let itemCnt=document.querySelector(".itemCnt");
itemCount=parseInt(itemCnt.innerText)


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
