$( document ).ready( function () {
  $('#menu-link').on('click', function() {
    $('#menu').toggle();
  });
  $('#background').on('click', function() {
    $('#menu').hide();
  })
});