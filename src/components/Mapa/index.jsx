import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "./styles.scss";

const Mapa = () => {
  // let LeafIcon = L.Icon.extend({
  //   options: {
  //     shadowUrl: iconShadow,
  //     iconSize: [40, 55],
  //     shadowSize: [60, 64],
  //     iconAnchor: [-20, 55],
  //     shadowAnchor: [-8, 0],
  //     popupAnchor: [25, 3],
  //   },
  // });

  // let ownIcon = new LeafIcon({ iconUrl: "./images/marker-icon.png" });

  // L.icon = function (options) {
  //   return new L.Icon(options);
  // };

  // L.Marker.prototype.options.icon = ownIcon;

  // const position = [3.473983, -76.5098402];

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: iconRetinaUrl,
      iconUrl: iconUrl,
      shadowUrl: iconShadow,
    });
  }, []);

  return (
    <div className="map-contact">
      <div className="info-map">
        Cali, Colombia
        <br />
        Calle 46b # 4n-53 <br />
        Contacto: <br />
        (+57) 3209491068 <br />
        st.lucano1205@gmail.com
      </div>
      <div id="map-container">
        <MapContainer
          center={[3.473983, -76.5098402]}
          zoom={17}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[3.473983, -76.5098402]}>
            <Popup>
              <span className="popup-content">Mi hogar 🏠</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa;
