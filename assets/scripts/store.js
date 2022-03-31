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
    }else{
        cartBtn.classList="btn btn-light ms-auto cartBtn";
        cartBtn.innerHTML="Add to Cart"

    }
    
    // console.log(likeBtn.querySelector("i").classList)
}


let likeBtn=document.querySelector(".wish");
likeBtn.addEventListener("click",like);

let cartBtn=document.querySelector(".cartBtn");
cartBtn.addEventListener("click",addToCart);