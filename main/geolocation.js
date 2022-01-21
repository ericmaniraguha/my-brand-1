// 01c88ee1253b428b97ff365cad50a597

const successCallback = (position) => {
    console.log(position);

    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;
    
    // const geoAPIUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=latitude&longitude=logitude&localityLanguage=en`
    
    
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=01c88ee1253b428b97ff365cad50a597`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        userLocation = `${county} , ${country}`;
    }).catch(()=>{
        userLocation = "Something went wrong";
    });
} 
const errorCallback = (error) => {
    console.log(error);
}

const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback,
    {
    enableHighAccuracy: true,
    timeout: 5000
   }
);

