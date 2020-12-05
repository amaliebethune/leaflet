var firstmap = L.map('canadaMap').setView([ 62.558995, -97.005705], 3.00);

L.tileLayer('https://api.mapbox.com/styles/v1/amaliebethune/ckib3rzev045i19t0h23q0kzc.html?fresh=true&title=view&access_token=pk.eyJ1IjoiYW1hbGllYmV0aHVuZSIsImEiOiJja2liM25vbHQwNTMzMnFwM3JibnlocnJtIn0.N01w-pVGqhkPof5ROJrb8A}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20
    }).addTo(secondmap);

    for (let i = 0; i < places.length; i++ ) {
  L.marker( [places[i].latitude, places[i].longitude ] ) .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>') .addTo(secondmap);
}
