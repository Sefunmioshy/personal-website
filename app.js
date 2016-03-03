var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();    
         
    });
    
    // $('.arrow-next').click(function(){
    //     var currentSlide = $('.active-slide');
    //     var nextSlide = currentSlide.next();
        
    //     if(nextSlide.length === 0){
    //        nextSlide = $('.slide').first();
    //     }
      
    //     currentSlide.fadeOut(600).removeClass('active-slide');
    //     nextSlide.fadeIn(600).addClass('active-slide');
        
    //     var currentDot = $('.active-dot');  
    //     var nextDot = currentDot.next();
        
    //     if(nextDot.length === 0){
    //        nextDot = $('.dot').first();
    //     }
        
        
    //     currentDot.removeClass('active-dot');
    //     nextDot.addClass('active-dot');
        
    // });
    
    // $('.arrow-prev').click(function(){
    //     var currentSlide = $('.active-slide');
    //     var prevSlide = currentSlide.prev();
        
    //     if(prevSlide.length === 0){
    //       prevSlide = $('.slide').last();
    //     }
      
    //     currentSlide.fadeOut(600).removeClass('active-slide');
    //     prevSlide.fadeIn(600).addClass('active-slide');
        
    //     var currentDot = $('.active-dot');  
    //     var prevDot = currentDot.prev();
        
    //     if(prevDot.length === 0){
    //       prevDot = $('.dot').last();
    //     }
        
        
    //     currentDot.removeClass('active-dot');
    //     prevDot.addClass('active-dot');
        
    // });


    // setInterval(function(){
    //   var currentSlide = $('.active-slide');
    //     var nextSlide = currentSlide.next();
        
    //     if(nextSlide.length === 0){
    //        nextSlide = $('.slide').first();
    //     }
      
    //     currentSlide.fadeOut(600).removeClass('active-slide');
    //     nextSlide.fadeIn(600).addClass('active-slide');
        
    //     var currentDot = $('.active-dot');  
    //     var nextDot = currentDot.next();
        
    //     if(nextDot.length === 0){
    //        nextDot = $('.dot').first();
    //     }
        
        
    //     currentDot.removeClass('active-dot');
    //     nextDot.addClass('active-dot');
    // }, 8000);







//edeedee

$('.arrow-next2').click(function(){
        var currentSlide = $('.active-slide2');
        var nextSlide = currentSlide.next();
        
        if(nextSlide.length === 0){
           nextSlide = $('.slide2').first();
        }
      
        currentSlide.fadeOut(600).removeClass('active-slide2');
        nextSlide.fadeIn(600).addClass('active-slide2');
        
        var currentDot = $('.active-dot2');  
        var nextDot = currentDot.next();
        
        if(nextDot.length === 0){
           nextDot = $('.dot2').first();
        }
        
        
        currentDot.removeClass('active-dot2');
        nextDot.addClass('active-dot2');
        
    });
    
    $('.arrow-prev2').click(function(){
        var currentSlide = $('.active-slide2');
        var prevSlide = currentSlide.prev();
        
        if(prevSlide.length === 0){
          prevSlide = $('.slide2').last();
        }
      
        currentSlide.fadeOut(600).removeClass('active-slide2');
        prevSlide.fadeIn(600).addClass('active-slide2');
        
        var currentDot = $('.active-dot2');  
        var prevDot = currentDot.prev();
        
        if(prevDot.length === 0){
          prevDot = $('.dot2').last();
        }
        
        
        currentDot.removeClass('active-dot2');
        prevDot.addClass('active-dot2');
        
    });


    setInterval(function(){
      var currentSlide = $('.active-slide2');
        var nextSlide = currentSlide.next();
        
        if(nextSlide.length === 0){
           nextSlide = $('.slide2').first();
        }
      
        currentSlide.fadeOut(600).removeClass('active-slide2');
        nextSlide.fadeIn(600).addClass('active-slide2');
        
        var currentDot = $('.active-dot2');  
        var nextDot = currentDot.next();
        
        if(nextDot.length === 0){
           nextDot = $('.dot2').first();
        }
        
        
        currentDot.removeClass('active-dot2');
        nextDot.addClass('active-dot2');
    }, 8000);

    
    
};

$(document).ready(main);