import React, { useEffect } from "react";

export default () => {
  function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(51.508742, -0.12085),
      zoom: 5,
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }

  useEffect(() => {
    myMap();
  }, []);

  return <div id="googleMap" style={{ width: "100%", height: "400px" }}></div>;
};
