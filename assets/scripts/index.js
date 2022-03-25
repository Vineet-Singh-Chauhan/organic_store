// function foo(){
//     console.log("hello")
// document.querySelector('#staticBackdrop');
// }
// console.log("hello")

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
        var splide2 = new Splide( '.splide2', {
            type    : 'loop',
            perPage : 3,
            autoplay: true,
          } );
          
          
          splide2.mount();
        });
