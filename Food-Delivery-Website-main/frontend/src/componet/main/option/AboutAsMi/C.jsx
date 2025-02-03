
function MapShareLink() {
  const latitude = 37.7749;
  const longitude = -122.4194;
  const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div>
      <h1>Share Location</h1>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        Open Location in Google Maps
      </a>
    </div>
  );
}

export default MapShareLink;