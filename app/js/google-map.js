function init_map(){
    var myOptions = {zoom:14,center:new google.maps.LatLng(50.51875,30.23978299999999),
        mapTypeId: google.maps.MapTypeId.ROADMAP};
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(50.51875,30.23978299999999)});
        infowindow = new google.maps.InfoWindow({content:'<strong>massage-baby.com.ua</strong><br>Ирпень<br>'});
        google.maps.event.addListener(marker, 'click', function(){
                infowindow.open(map,marker);
                });
                infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
