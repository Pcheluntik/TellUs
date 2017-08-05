
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 2,
    values: [ 0, 1 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "1 " + ui.values[ 0 ] + " - 1 " + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "1 " + $( "#slider-range" ).slider( "values", 0 ) +
    " - 1 " + $( "#slider-range" ).slider( "values", 1 ) );
} );
