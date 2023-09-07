let mapOptions={
    center:[-37.7747,175.2785],
    zoom:13
}

let map = new L.map('map',mapOptions);

let layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

//add stores location here
let locations =[
    {
        "id":1,
        "lat": -37.76063,
        "long": 175.28032,
        "src":"marker-icon-211x.png",
        "title":"Store1",
        "url":"http://localhost:8000/stores/store_01H8W5W9EJD67GK3C0F5RY61NN"
    },
    {
        "id": 2,
        "lat": -37.78535,
        "long": 175.27808,
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

  document.cookie = "myCookie=myValue; SameSite=None; Secure"; // Example for setting SameSite to "None"
