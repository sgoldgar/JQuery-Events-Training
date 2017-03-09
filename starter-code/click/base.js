console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('#imperatives span').on('click', function(){
    var click = console.log('click');
    if ('click'){
    //var content = $(this).text();
    $('ul').append('<li>' + $(this).text());
  };

});
});


//http://stackoverflow.com/questions/4981765/jquery-create-list-item-from-user-input-on-click
