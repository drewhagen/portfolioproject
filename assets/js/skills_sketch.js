// Find all iframes
var $panels = $( ".panel-group" );

// Find &#x26; save the aspect ratio for all iframes
$panels.each(function () {
  $( this ).data( "ratio", this.height / this.width )
    // Remove the hardcoded width &#x26; height attributes
    .removeAttr( "width" );
});

// Resize the iframes when the window is resized
$( window ).resize( function () {
  $panel.each( function() {
    // Get the parent container&#x27;s width
    var width = 30%($( this ).parent().width());
    $( this ).width( width );
  });
  //resetCanvas() //commented out function
// Resize to fix all iframes on page load.
}).resize();

/*$( "img" ).onClick(function() {
  $( this ).addClass("active");
})*/
