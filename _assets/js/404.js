$(window).scroll(function() {

  var current = $(this).scrollTop(),
  path = '/assets/images/Untitled-4.gif',
  visible = $('404').css('opacity') != 0;

  if (current > 200) {
  if (!visible) $('404').attr('src', path).fadeTo(400,1);
  }
  else if (visible) $('404').fadeTo(0,0);
});
