var firstmap = L.map('albertaMap').setView([48.905920, -84.012382], 5.00);

L.tileLayer('https://api.mapbox.com/styles/v1/amaliebethune/ckib3rzev045i19t0h23q0kzc.html?fresh=true&title=view&access_token=pk.eyJ1IjoiYW1hbGllYmV0aHVuZSIsImEiOiJja2liM25vbHQwNTMzMnFwM3JibnlocnJtIn0.N01w-pVGqhkPof5ROJrb8A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20

}).addTo(firstmap);

//Banff
let marker1 = L.marker([51.169830, -115.589350]).addTo(firstmap);
marker1.bindPopup("<b>Banff National Park</b>");

//Jasper
let marker2 = L.marker([52.887518171316025, -117.97646959344628]).addTo(firstmap);
marker2.bindPopup("<b>Jasper National Park</b>");

//Waterton
let marker3 = L.marker([49.083222291603775, -113.917443828861]).addTo(firstmap);
marker3.bindPopup("<b>Waterton Lakes National Park</b>");

//Elk Island
let marker4 = L.marker([53.60863350680107, -112.86231248203482]).addTo(firstmap);
marker4.bindPopup("<b>Elk Island National Park</b>");
