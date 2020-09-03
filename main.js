//Initialize and add the map
function initMap() {
//My loacation
    const  loc={ lat: 27.717245, lng:  85.323959};
//Centered map on location
    const map = new google.maps.Map(document.querySelector('.contact-map')
    , { zoom: 14 ,
        center: loc
    });
//The marker,positioned at location
   const marker=new google.maps.Marker({ position: loc, map: map});
 }

//Navbar opacity
window.addEventListener('scroll', function() {
    if(window.scrollY > 150){
        document.querySelector('.navbar').style.opacity = 0.8;
   }else{
       document.querySelector('.navbar').style.opacity = 1;
   }
});

 // Smooth Scrolling
 $('.navbar a, .btn').on('click', function(envent) {
     if(this.hash !== '') {
         event.preventDefault();

         const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -63
            },
            800
        )
     }
 });


