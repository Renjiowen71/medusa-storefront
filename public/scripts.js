let mapOptions={
    center:[-37.7747,175.2785],
    zoom:13
}

let map = new L.map('map',mapOptions);

let layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);

let locations =[]

function closePage() {
  document.getElementById("medusa").style.width= "0";
}

function openPage() {
    document.getElementById("medusa").style.width= "80%";
  }
  
window.onmessage = function(e) {
    const {page, data} = e.data;
    if(page=="stores"){
        map.setView([data.latitudes,data.longitudes], 15);
    }
    if(page=="landing"){
        if(locations.length==0){
            data.store.forEach(s =>{
                let location = {
                    "id":s.id,
                    "lat": s.latitudes,
                    "long": s.longitudes,
                    "src":"marker-icon-211x.png",
                    "title":s.name,
                    "url":"http://localhost:8000/stores/"+s.id
                }
                locations.push(location)
            });
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
        }
    }
};
