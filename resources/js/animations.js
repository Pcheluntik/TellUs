$(document).ready(function() {

  jQuery('.actor').addClass("hid").viewportChecker({
  classToAdd: 'vis animated flipInX',
  offset: 100
  });

  jQuery('.text p').addClass("hid").viewportChecker({
  classToAdd: 'vis animated flipInX',
  offset: 100
  });
  jQuery('.text ul').addClass("hid").viewportChecker({
  classToAdd: 'vis animated flipInX',
  offset: 100
  });

});
