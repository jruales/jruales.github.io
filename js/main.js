$(function() {
  /*
  $("#showmoreprojects").click(function() {
    if(!more_projects_shown) {
      $("#moreprojects").slideDown('fast', function() {
        $("#showmoreprojects").text('hide');
      });
      more_projects_shown = true;
    } else {
      $("#moreprojects").slideUp('fast', function() {
        $("#showmoreprojects").text('show more');
      });
      more_projects_shown = false;
    }
  });
  */

  //
  // Mobile-style nav menu. Pt1.
  //
  // TODO: figure out why this needs to appear before mustache.
  var $menu = $('nav#menu'),
    $html = $('html, body');

  $menu.mmenu({
    dragOpen: false
  });


  function relevantCourseCompare(a, b) {
    if (a.number < b.number) {
      return 1;
    } else if (a.number > b.number) {
      return -1;
    } else {
      return 0;
    }
  }
  function otherCourseCompare(a, b) {
    if (a.departmentCode > b.departmentCode) {
      return 1;
    } else if (a.departmentCode < b.departmentCode) {
      return -1;
    } else {
      return relevantCourseCompare(a, b);
    }
  }
  for (var i = 0; i < context.degrees.length; i++) {
    context.degrees[i].relevantCourses.sort(relevantCourseCompare);
    context.degrees[i].otherCourses.sort(otherCourseCompare);
  };
  var source = $("#page-template").html();
  var template = Handlebars.compile(source);
  $("#main").html(template(context));





  FastClick.attach(document.body);


  //
  // Mobile-style nav menu. Pt2.
  //
  var $anchor = false;
  $menu.find( 'li > a' ).on(
    'click',
    function( e )
    {
      $anchor = $(this);
    }
  );

  var api = $menu.data( 'mmenu' );
  api.bind( 'closed',
    function()
    {
      if ( $anchor )
      {
        var href = $anchor.attr( 'href' );
        $anchor = false;

        //  if the clicked link is linked to an anchor, scroll the page to that anchor 
        if ( href.slice( 0, 1 ) == '#' )
        {
          $html.animate({
            scrollTop: $( href ).offset().top-30
          }); 
        }
      }
    }
  );





  
/*
  var $anchor = false;
  $menu.find( 'li > a' ).on(
    'click',
    function( e )
    {
      $anchor = $(this);
    }
  );

  var api = $menu.data( 'mmenu' );
  api.bind( 'closed',
    function()
    {
      if ( $anchor )
      {
        var href = $anchor.attr( 'href' );
        $anchor = false;

        //  if the clicked link is linked to an anchor, scroll the page to that anchor 
        if ( href.slice( 0, 1 ) == '#' )
        {
          $html.animate({
            scrollTop: $( href ).offset().top
          }); 
        }
      }
    }
  );
*/

});


/*
var displayStats = false;

var container, stats;

var camera, scene, renderer;

var cube, plane;

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {

  container = document.createElement( 'div' );
  document.body.appendChild( container );

  var info = document.createElement( 'div' );
  info.style.position = 'absolute';
  info.style.top = '10px';
  info.style.width = '100%';
  info.style.textAlign = 'center';
  info.innerHTML = 'Drag to spin the cube';
  container.appendChild( info );

  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.y = 150;
  camera.position.z = 500;

  scene = new THREE.Scene();

  // Cube

  var geometry = new THREE.BoxGeometry( 200, 200, 200 );

  for ( var i = 0; i < geometry.faces.length; i += 2 ) {

    var hex = Math.random() * 0xffffff;
    geometry.faces[ i ].color.setHex( hex );
    geometry.faces[ i + 1 ].color.setHex( hex );

  }

  var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );

  
  cube = new THREE.Mesh( geometry, material );
  cube.position.y = 150;
  scene.add( cube );

//
// // add subtle ambient lighting
// var ambientLight = new THREE.AmbientLight(0xf0f0f0);
// scene.add(ambientLight);

// // directional lighting
// var directionalLight = new THREE.DirectionalLight(0xf0f0f0);
// directionalLight.position.set(100, 100, 100).normalize();
// scene.add(directionalLight);
//

  // Plane

  var geometry = new THREE.PlaneBufferGeometry( 200, 200 );
  geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );

  var material = new THREE.MeshBasicMaterial( { color: 0xe0e0e0, overdraw: 0.5 } );

  plane = new THREE.Mesh( geometry, material );
  scene.add( plane );

  renderer = new THREE.CanvasRenderer();
  renderer.setClearColor( 0xf0f0f0 );
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  if(displayStats) {
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    container.appendChild( stats.domElement );
  }

  document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  document.addEventListener( 'touchstart', onDocumentTouchStart, false );
  document.addEventListener( 'touchmove', onDocumentTouchMove, false );

  //

  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function onDocumentMouseDown( event ) {

  event.preventDefault();

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'mouseup', onDocumentMouseUp, false );
  document.addEventListener( 'mouseout', onDocumentMouseOut, false );

  mouseXOnMouseDown = event.clientX - windowHalfX;
  targetRotationOnMouseDown = targetRotation;

}

function onDocumentMouseMove( event ) {

  mouseX = event.clientX - windowHalfX;

  targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

}

function onDocumentMouseUp( event ) {

  document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
  document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
  document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

  document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
  document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
  document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

  if ( event.touches.length === 1 ) {

    event.preventDefault();

    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
    targetRotationOnMouseDown = targetRotation;

  }

}

function onDocumentTouchMove( event ) {

  if ( event.touches.length === 1 ) {

    event.preventDefault();

    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    mouseY = event.touches[ 0 ].pageY - windowHalfY;
    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

  }

}

//

function animate() {

  requestAnimationFrame( animate );

  render();
  if(displayStats) {
    stats.update();
  }

}

function render() {

  plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
  renderer.render( scene, camera );

}
*/
