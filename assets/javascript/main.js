$(document).ready(function(){
    $("#button").on('click', function(){
       var state = $("#menu").attr('data-display');
       if(state === 'false'){
        $("#menu").css('display','block');
        $("#menu").attr('data-display','true');
       }else if(state === 'true'){
        $("#menu").css('display','none');
        $("#menu").attr('data-display', 'false');
       }
    });


});