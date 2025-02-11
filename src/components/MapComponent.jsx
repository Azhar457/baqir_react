import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  // Koordinat untuk Tunisia atau area yang Anda inginkan
  const position = [34.0, 9.0];

  return (
    <MapContainer center={position} zoom={6} className="h-full w-full p-6">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold mb-2">Tunisia</h3>
          <p className="text-sm mb-2">
            Ini adalah deskripsi singkat mengenai Tunisia. Klik video untuk
            informasi lebih lanjut.
          </p>
          <a
            href="https://www.youtube.com/watch?v=kcpe4kqZaKg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Lihat video tutorial
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
