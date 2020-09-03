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