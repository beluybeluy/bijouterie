$('.shops-slider').slick({
   slidesToShow: 4,
   arrows: true,
   variableWidth: true,
//    responsive: [
//      {
//         breakpoint: 1024, //дисплей з розширенням 1024 
//         settings: {
//            slidesToShow: 2
//            , slidesToScroll: 3
//            , infinite: true
//            , dots: true
//         }
//    }
//      , {
//         breakpoint: 768
//         , settings: {
//            slidesToShow: 1
//            , slidesToScroll: 2
//         }
//      }
//      , {
//         breakpoint: 480
//         , settings: {
//            slidesToShow: 1
//            , slidesToScroll: 1
//         }
//    }]
//   centerMode: true
});
$('.photos-slider').slick({
   slidesToShow: 3,
   rows: 2, 
   dots: true,
   arrows: false

});
 
$('.products-slider').slick({
   arrows: false

});