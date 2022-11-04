window.addEventListener("DOMContentLoaded", function(e){
    
    let locationBox = this.document.querySelector("#location");

    let location = {
        latitude: "unknown",
        longtitude: "unknown"
    };

    this.window.navigator.geolocation.getCurrentPosition(

        function(position) {
          location = {
            latitude: position.coords.latitude,
            longtitude: position.coords.longitude
          }  
          locationBox.value = JSON.stringify(location);
        },

        function(error) {
            locationBox.value = JSON.stringify(location);
        }
    );

    const order = this.localStorage.getItem("order");
    
    if (order) {
        const pieOrder = JSON.parse(order);    

        const orderInput = this.document.querySelector("#pie-order");
        orderInput.value = order;
    
        const pie = this.document.querySelector(".pie");
        
        const title = pie.querySelector(".title");
        const price = pie.querySelector(".price");
        const desc = pie.querySelector(".desc");
    
        title.innerText = pieOrder.title;
        price.innerText = pieOrder.price;
        desc.innerText = pieOrder.desc; 
    
        const img = pie.querySelector("img");
        img.setAttribute("src", `images/${pieOrder.id}.png`);
        img.setAttribute("alt", pieOrder.title);
    }

});