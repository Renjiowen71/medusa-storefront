let mapOptions={
    center:[-37.7747,175.2785],
    zoom:13
}

let map = new L.map('map',mapOptions);

let layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

let locations =[
    {
        "id":"store_01H8W5W9EJD67GK3C0F5RY61NN",
        "lat": -37.76063,
        "long": 175.28032,
        "src":"marker-icon-211x.png",
        "title":"Store1",
        "url":"http://localhost:8000/stores/store_01H8W5W9EJD67GK3C0F5RY61NN"
    },
    {
        "id": "store_01H8W36KV80JJGNXJPCYXHGR0X",
        "lat": -37,
        "long": 175,
        "src": 'marker-icon-211x.png',
        "title":"Store2",
        "url":"http://localhost:8000/stores/store_01H8W36KV80JJGNXJPCYXHGR0X"
    },
]
locations.forEach(Element =>{
    new L.Marker([Element.lat,Element.long]).addTo(map)
    .on("mouseover",event =>{

        //show the content
        //event.target.bindPopup('content').openPopup();
        //show the title
        event.target.bindPopup(Element.title).openPopup();
    
    })
    .on("mouseover",event =>{
        event.target.closepopup();
    })    
    //jump to url
    .on("click",() =>{
        //window.open(Element.url,);
        var iframe = document.getElementById("myIframe");
        iframe.src = Element.url;
        var medusa = document.getElementById("medusa");
        medusa.style.width = "80%"

    })    

});

function closePage() {
  document.getElementById("medusa").style.width= "0";
}

function openPage() {
    document.getElementById("medusa").style.width= "80%";
  }
  
window.onmessage = function(e) {
    console.log(e.data)
    let searchObject = locations.find((location) => location.id == e.data);
    const { title, lat, long } = searchObject
    map.setView([lat,long], 15);
};
