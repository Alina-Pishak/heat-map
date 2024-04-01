import React, { useState } from "react";
import FileUploader from "./components/FileUploader/FileUploader";
import emptyMap from "./img/empty-map.jpg";
import HeatMap from "./components/HeatMap/HeatMap";

const App: React.FC = () => {
  const [data, setData] = useState<{ x: number; y: number; value: number }[]>(
    []
  );

  const handleFileUploaded = (
    data: { x: number; y: number; value: number }[]
  ) => {
    setData(data);
  };
  return (
    <div>
      <img
        src={emptyMap}
        width="100%"
        height="100%"
        style={{ position: "relative" }}
      />
      <HeatMap data={data} />
      <div
        style={{ position: "absolute", top: 0, left: 0, background: "#000" }}
      >
        <h1>Завантажте файл:</h1>
        <FileUploader onFileUploaded={handleFileUploaded} />
      </div>
    </div>
  );
};

export default App;
