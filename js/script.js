
$(function(){
    $('body').click(function(event){
        
        var x = $('.menu-button a i');
        if($(event.target).is(x)){
            console.log('prem');
            event.preventDefault();
            $('.navbar-collapse').slideToggle(500);
        }
        else{
            $('.navbar-collapse').slideUp(500);
        }
    });
        $('.navbar-collapse').click(function(e) { //button click class name is myDiv
        e.stopPropagation();
        });
  
});