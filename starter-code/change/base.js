console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('#total').on('click',function(){
    var numOne = parseInt($('#left').val());
    var numTwo = parseInt($('#right').val());
    var total = numOne + numTwo;
    $('#total').val(total);
  });

});
