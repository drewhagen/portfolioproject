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
  //resetCanvas() //commented out function
// Resize to fix all iframes on page load.
}).resize();

// Give a mouseover effect on Navigation bar buttons using JQuery
$( ".nav-link").mouseover(function() {
  $( ".nav-link").fadein()
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
  //resetCanvas(); //commented out function
}

function canvasAlignToNav() {
  var navigation = document.getElementById("navbar");
  var domRect = navigation.getBoundingClientRect();
  var newCanvas = document.createElement("canvas");
  newCanvas.id = "newCanvas";
  newCanvas.height = domRect.height;
  newCanvas.width = domRect.width;
  $( "body" ).prepend(newCanvas);
  $( "#newCanvas" ).css("margin-bottom",-83);
  $( "#navbar" ).css("margin-top",-20);
  runCanvasEffect(newCanvas);
}

function resetCanvas() {
  $( "#newCanvas" ).remove();
  canvasAlignToNav();
}

function navigation_Selector() {
  navBtnList = ["about", "edu", "skills", "work", "contact"];
  
}

//$( "body" ).ready(canvasAlignToNav); //commented out function


/*======================================
function runCanvasEffect(canvas){

  canvas.width = window.innerWidth;
  var navigation = document.getElementById("navbar");
  var domRect = navigation.getBoundingClientRect();
  canvas.height = domRect.height;

  var c = canvas.getContext('2d');

  var mouse = {
      x: undefined,
      y: undefined
  }

  var maxRadius = 40;
  //var minRadius = 2;

  var fillColorArray = [
      '#e74c3c',
      '#e67e22',
      '#f1c40f',
  ];

  var strokeColorArray = [
      '#f39c12',
      '#d35400',
      '#c0392b'
  ];

/*  window.addEventListener('mousemove',
      function(event) {
          mouse.x = event.x;
          mouse.y = event.y;
          console.log(mouse);
      });

  window.addEventListener('resize',
      function(event) {
          canvas.width = window.innerWidth;
          var navigation = document.getElementById("navbar");
          var domRect = navigation.getBoundingClientRect();
          canvas.height = domRect.height;
      }
  )

  function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.fillColor = fillColorArray[Math.floor(Math.random() * fillColorArray.length)];
      this.strokeColor = strokeColorArray[Math.floor(Math.random() * fillColorArray.length)];

      this.draw = function() {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          c.strokeStyle = this.strokeColor;
          c.stroke();
          c.fillStyle = this.fillColor;
          c.fill();
      }

      this.update = function() {
          if(this.x+this.radius > innerWidth || this.x-this.radius < 0) {
              this.dx = -this.dx;
          }
          if(this.y+this.radius > innerHeight || this.y-this.radius < 0) {
              this.dy = -this.dy;
          }

          this.x+= this.dx;
          this.y+= this.dy;

          //interactivity
          if (mouse.x - this.x < 50 && mouse.x - this.x > -50
              && mouse.y - this.y < 50 && mouse.y -this.y > -50) {
              if(this.radius < maxRadius) {
                  this.radius += 1;
              }
          } else if (this.radius > this.minRadius) {
              this.radius -= 1;
          }

          this.draw();
      }
  }

  var circleArray = [];

  for (var i = 0; i < 800; i++) {
      var radius = Math.random() * 3.5 + 1;
      var x = Math.random() * (innerWidth - radius * 2) + radius;
      var y = Math.random() * (innerHeight - radius * 2) + radius;
      var dx = (Math.random() - 0.5) * 4;
      var dy = (Math.random() - 0.5) * 4;

      circleArray.push(new Circle(x, y, dx, dy, radius))
  }


  function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, innerWidth, innerHeight);

      for(var i = 0; i < circleArray.length; i++) {
          circleArray[i].update();
      }
  }

  animate();
}
=============================================*/
