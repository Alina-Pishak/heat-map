import React, { useState } from "react";

import FileUploader from "./components/FileUploader/FileUploader";
import emptyMap from "./img/empty-map.jpg";
import { EmptyMapImg, FileUploadWrapper, HetMapImg } from "./App.styled";

const App: React.FC = () => {
  const [data, setData] = useState<string>();
  const handleFileUploaded = (data: string) => {
    setData(data);
  };
  return (
    <div>
      <EmptyMapImg src={emptyMap} width="100%" height="100%" />
      <HetMapImg src={data} width="100%" height="100%" />
      <FileUploadWrapper>
        <h1>Завантажте файл:</h1>
        <FileUploader onFileUploaded={handleFileUploaded} />
      </FileUploadWrapper>
    </div>
  );
};

export default App;
