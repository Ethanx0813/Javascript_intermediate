if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          console.error('User denied the request for Geolocation.');
        }
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
  