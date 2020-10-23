function initMap() {
  //解説2：変数
  var mapPosition = { lat: 33.592017, lng: 130.396406 };

  var mapArea = document.getElementById('maps');
  var mapOptions = {
    center: mapPosition,
    zoom: 16,
    
  };

  //解説1：マップを生成するMapクラス
  var map = new google.maps.Map(mapArea, mapOptions);

  var markerOptions = {
    map: map, //変数の中身... new google.maps.Map(mapArea, mapOptions);
    position: mapPosition, //変数の中身... {lat: 35.170662, lng: 136.923430}
    // icon: new google.maps.MarkerImage(
    //   '',
    //   new google.maps.Size(80, 50),
    //   new google.maps.Point(0, 0),
    // )
  };
  var mapStyle = [{
    "stylers": [{
      "saturation": -100
    }]
  }];
  var mapType = new google.maps.StyledMapType(mapStyle);
  map.mapTypes.set('GrayScaleMap', mapType);
  map.setMapTypeId('GrayScaleMap');
  var marker = new google.maps.Marker(markerOptions);
}
$('.menu-btn').on('click', function(){
    $('.slide-menu').toggleClass('is-active');
});

$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});