
/*Page 26 grading stars*/
$(document).ready(function(){

  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });


  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);

  });


});


function responseMessage(msg) {
  $('.success-box').fadeIn(200);
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}



/*MAPS*/

function myMap() {

  var center = {lat: 40.023132, lng: -75.189160}; //40.023132, -75.189160

  var locations = [

    ['Jefferson University', 40.018662, -75.192078],

    ['You are here', 40.027437, -75.1828092],

    ['The Avenue', 40.025333,-75.181865],

    ['Alden Park', 40.027042, -75.184654],

    ['Park Heights',  40.027174, -75.182680]

  ];

var map = new google.maps.Map(document.getElementById('map'), {

    zoom: 15,

    center: center

  });

var infowindow =  new google.maps.InfoWindow({});

var marker, count;

for (count = 0; count < locations.length; count++) {

    marker = new google.maps.Marker({

      position: new google.maps.LatLng(locations[count][1], locations[count][2]),

      map: map,

      title: locations[count][0]

    });

    google.maps.event.addListener(marker, 'click', (function (marker, count) {

          return function () {

            infowindow.setContent(locations[count][0]);

            infowindow.open(map, marker);

          }

        })(marker, count));

      }

    }


/*Page 15 - Toggle*/


    $(function() {
   $('#coin1').hide();
   $('#toggle1').click(function() {
       $(this).nextAll().each( function() {
           if ($(this).filter('#toggle1').length) {
              return false;
           }
           $(this).filter('#coin1').toggle();
       });
   });
});

$(function() {
$('#coin2').hide();
$('#toggle2').click(function() {
   $(this).nextAll().each( function() {
       if ($(this).filter('#toggle2').length) {
          return false;
       }
       $(this).filter('#coin2').toggle();
   });
});
});
