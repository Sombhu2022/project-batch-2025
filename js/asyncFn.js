
const fetchData = async()=>{

  const url = 'https://google-map-places.p.rapidapi.com/maps/api/geocode/json?address=1600%20Amphitheatre%2BParkway%2C%20Mountain%20View%2C%20CA&language=en&region=en&result_type=administrative_area_level_1&location_type=APPROXIMATE';
  const options = {
     method: 'GET',
     headers: {
        'x-rapidapi-key': 'e6b81a250bmshf7beda19fc9b5e7p188a70jsnf9c82a25ea17',
        'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
     }
  };
  
  try {
     const response = await fetch(url, options);
     const result = await response.text();
     console.log(result);
  } catch (error) {
     console.error(error);
  }


}


fetchData()

