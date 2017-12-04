

// Find all iframes
var $iframes = $( "iframe" );

// Find &#x26; save the aspect ratio for all iframes
$iframes.each(function () {
  $( this ).data( "ratio", this.height / this.width )
    // Remove the hardcoded width &#x26; height attributes
    .removeAttr( "width" )
    .removeAttr( "height" );
});

// Resize the iframes when the window is resized
$( window ).resize( function () {
  $iframes.each( function() {
    // Get the parent container&#x27;s width
    var width = $( this ).parent().width();
    $( this ).width( width )
      .height( width * $( this ).data( "ratio" ) );
  });
// Resize to fix all iframes on page load.
}).resize();

// Give a mouseover effect on Navigation bar buttons using JQuery
$( ".navlink").mouseover(function() {
  $( ".navlink").fadein()
});

function resizeIframe(obj) {
  try {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
  catch(e) {
    console.log ("Error Message: " + e.message);
    console.log ("Error Code: ");
    console.log (e.number & 0xFFFF);
    console.log ("Error Name: " + e.name);
  }

}
