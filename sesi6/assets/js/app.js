$(document).ready(function(){

   var daftarTaman = $('.daftar-taman');
   var filter      = $('#filter');

   $.get('https://www.ariona.net/talentbandung/', function(data){
      $.each( data, function(){
         var html =  '<div class="grid-item"><article class="taman">'+
                        '<figure>'+
                           '<a href="single.html"><img src="'+this.image.thumbnail+'" alt=""/></a>'+
                        '</figure>'+
                        '<div class="taman-detail">'+
                           '<h2>'+
                              '<a href="single.html">'+
                                 '<span class="subtitle">Taman</span>'+
                                 '<span class="title">'+this.nama+'</span>'+
                              '</a>'+
                           '</h2>'+
                           '<p>'+this.alamat+'</p>'+
                        '</div>'+
                     '</article></div>';
         
         daftarTaman.append(html);
   
      } );
   });
   
   filter.on('keyup', function(){
      var taman  = $(".grid-item");
      var search = this.value.toLowerCase();
      
      taman.each(function(){
         var namaTaman   = $(this).find('.title').text().toLowerCase();
         var alamatTaman = $(this).find('p').text().toLowerCase();
   
   
         if (namaTaman.indexOf(search) != -1 || alamatTaman.indexOf(search) != -1) {
            $(this).show(300);
         } else {
            $(this).hide(300);
         }
      });
   });

   var gallery = $('.gallery-carousel').slick({
      slidesToShow : 3,
      infinite     : false,
      nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-forward"></i></button>',
      prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-back"></i></button>'
   });

   $('.test-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      },
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
		
	});

  //  function initMap() {
  //     var uluru = {lat: -25.363, lng: 131.044};
  //     var map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 4,
  //       center: uluru
  //     });
  //     var marker = new google.maps.Marker({
  //       position: uluru,
  //       map: map
  //     });

  //  }
});