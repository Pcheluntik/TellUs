$(document).ready(function() {

  jQuery('.actor').addClass("hid").viewportChecker({
  classToAdd: 'vis animated flipInX',
  offset: 100
  });

  jQuery('p').addClass("hid").viewportChecker({
  classToAdd: 'vis animated fadeIn',
  offset: 100
  });
  jQuery('.text ul').addClass("hid").viewportChecker({
  classToAdd: 'vis animated bounceInDown',
  offset: 100
  });

});
