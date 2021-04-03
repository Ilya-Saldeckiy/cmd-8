ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.55719506918082,37.813880999999995],
        zoom: 17
    });
    var myPlacemark = new ymaps.Placemark([55.55719506918082,37.813880999999995], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'map_marker_blue.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42],
    });
    
    myMap.geoObjects.add(myPlacemark);
    
}