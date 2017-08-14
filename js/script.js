
$(function(){
    $('body').click(function(event){
        
        var x = $('.menu-button a i');
        if($(event.target).is(x)){
            console.log('prem');
            event.preventDefault();
            $('body').toggleClass('push-body');
            $('.navbar-collapse').toggleClass("push");
            
        }
        else{
            $('.navbar-collapse').removeClass("push");
            $('body').removeClass('push-body');
        }
    });
        $('.navbar-collapse').click(function(e) { //button click class name is myDiv
        e.stopPropagation();
        });
  
});