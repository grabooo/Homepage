


$('document').ready(function(){


  $('.slide-wrapper:first-child, .slide-wrapper:last-child').css('opacity', '0.4');



  $('.point-wrapper').click(function(){
    $(this).toggleClass('point-active');

  });



// for(i=0;i<5;i++){
//
// var left = $('.slide-wrapper:nth-child('+i+')').css('margin-left', '200px;');
//
//
// }



$('.slider-wrapper').click(function(){

var timeout;



cloneSlide();



});



function move(){

  var first = $('.slide-wrapper:nth-child(4)');
  var currentLeft = first.css('left');
  var currentLeft = currentLeft.substring(0, currentLeft.length-2);
  currentLeft = Number(currentLeft);
  currentLeft = currentLeft+100+'px';
  first.animate({left: currentLeft});


}


function cloneSlide(){
  var cloned = $('.slide-wrapper:last-child').clone()

  $('.slider-wrapper').prepend(cloned);

}

function moveFirst(){
  var first = $('.slide-wrapper:first-child');
  first.css({'left':'300px',
              'position': 'relative'});
}

function moveSecond(){
  $('.slide-wrapper:nth-child(2)').animate(
    {left: '0px',
     opacity: '0'}, 500).animate(
    {left: '0px',
     opacity: '1'}, 500);
  // $('.slide-wrapper:nth-child(2)').css('position', 'absolute');
}

function deleteLast(){
  var last = $('.slide-wrapper:last-child').remove();
}





function allMove(){

var elements = document.getElementsByClassName('slide-wrapper');
  for (var i = 1; i <= elements.length ; i++) {
    var first = $('.slide-wrapper:nth-child('+i+')');
    var currentLeft = first.css('left');
    var currentLeft = currentLeft.substring(0, currentLeft.length-2);
    currentLeft = Number(currentLeft);
    currentLeft = currentLeft+239+'px';
    first.animate({left: currentLeft});
  }
}









$('.garden-button').click(function(){

  // $('.slide-wrapper:nth-child(3)').css('opacity', '1')
  //
  //
  // var presentMargin = $('.slide-wrapper:nth-child(1)').css('left');
  // var presentMargin = presentMargin.substring(0,presentMargin.length - 2);
  //
  // presentMargin = Number(presentMargin);
  // presentMargin+=440;
  // presentMargin = presentMargin + 'px';


  // var lastSlide = $('.slide-wrapper:nth-child(6)').clone();
  //
  // lastSlide.css({'position': 'absolute',
  //                'left': '-255px'});
  // $('.slider-wrapper').prepend(lastSlide);
  //
  //
  // $('.slide-wrapper:nth-child(2)').css(
  //   {'animation-name': 'slide-opacity',
  //    'animation-duration': '1s',
  //    'animation-fill-mode': 'forwards',
  //    'animation-timing-function': 'swing'})
  //



  //
  //




  // var margin = $('.slide-wrapper:nth-child(1)').css('left');
  // var margin = margin.substring(0,margin.length - 2);
  //
  //
  // margin = Number(margin);
  // margin+=235;
  // margin = margin + 'px';
  //
  // $('.slide-wrapper:nth-child(1)').css('transition', 'left 1s');
  //
  // $('.slide-wrapper:nth-child(1)').css('left', margin);

  var slidesNumber = document.getElementsByClassName('sw')[1];
alert(slidesNumber.css('width'));

  for (var i = 2; i < slidesNumber.length; i++) {
    var margin = $('.sw:nth-child('+i+')').css('width');
alert(margin);
    var margin = margin.substring(0,margin.length - 2);


    margin = Number(margin);
    margin+=235;
    margin = margin + 'px';

    $('.slide-wrapper:nth-child('+i+')').css('transition', 'left 1s');

    $('.slide-wrapper:nth-child('+i+')').css('left', margin);
  }








});










  //
  // alert(presentMargin);
  //
  // var firstSlide = $('.slide-wrapper:nth-child(1)');
  // firstSlide.css('position', 'static');
  //
  // firstSlide.animate({marginLeft: presentMargin}, 1000);
  //
  //
  //
  //
  // var lastSlide = $('.slide-wrapper:nth-child(6)').clone();
  // lastSlide.css('position', 'absolute');
  //
  //
  // lastSlide.insertBefore(".slide-wrapper:nth-child(1)");





//
// for(i=0;i<5;i++){
//   var slide = document.getElementsByClassName('slide-wrapper')[i];
//   var left = window.getComputedStyle(slide).left;
//
//
//   var length = left.length;
//
//     var left = left.substring(0,length-2);
//     left = Number(left);
//
//   slide.style.left = left + 200 + 'px';
//
// }


});

// function menu(){
//   var menu = document.getElementsByClassName('menu-container')[0];
//   var menuHeight = menu.offsetHeight;
//
//   if(menuHeight>0){
//     menu.style.display = 'none';
//   }
//   else{
//     menu.style.display = 'block';
//   }
// };


// function allSlidesLeft(){
// 	var slider = document.getElementsByClassName('slider-wrapper')[0];
//
// 	for(i=0;i<5;i++){
// 		var slide = document.getElementsByClassName('slide-wrapper')[i];
// 		var left = window.getComputedStyle(slide).left;
//
//
// 		var length = left.length;
//
// 			var left = left.substring(0,length-2);
// 			left = Number(left);
//
// 		slide.style.left = left + 200 + 'px';
//
// 	}
// cloneSlide();
// }
//
//
// var toClone;
//
// function cloneSlide(){
//
// 	var slider = document.getElementsByClassName('slider-wrapper')[0];
// 	var slideClone = slider.lastElementChild.cloneNode(true);
//
//
//   if(toClone === undefined){
//     toClone = 4;
//   }
//
//   var x = document.getElementsByClassName('slide-wrapper')[toClone];
//   var z = document.getElementsByClassName('slide-wrapper')[0];
//
// 	x.style.left = '0px';
//
//   slider.insertBefore(x, slider.firstElementChild);
//
// }



function paginate(){
  var point = document.getElementsByClassName('point-wrapper');
  alert(typeof point);
}
