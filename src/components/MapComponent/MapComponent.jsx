import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Certifique-se de incluir o CSS do Leaflet

export default function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Inicializa o mapa apenas se ele ainda não foi inicializado
    if (mapRef.current === null) {
      // Inicializa o mapa e define as coordenadas e o nível de zoom
      const map = L.map('map').setView([-23.535274, -46.648271], 16);

      // Define o tile layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Adiciona o marcador no mapa
      L.marker([-23.535274, -46.648271])
        .addTo(map)
        .bindPopup('Ponto de distribuição da Distro!')
        .openPopup();

      // Guarda a instância do mapa em ref
      mapRef.current = map;
    }

    // Cleanup: remove o mapa ao desmontar o componente
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
      {/* Define o container do mapa */}
      <div id="map" style={{ height: "450px", width: "45%", borderRadius: '0px',  border: '1px solid black' }} />
    </div>
  );
};
