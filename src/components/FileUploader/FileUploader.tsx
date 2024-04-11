import React, { useCallback } from "react";
import * as Dropzone from "react-dropzone";
import axios from "axios";

interface FileUploaderProps {
  onFileUploaded: (data: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUploaded }) => {
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("map", file);

      try {
        const response = await axios.post(
          "https://heat-map-backend.onrender.com/api/map",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        onFileUploaded(response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = Dropzone.useDropzone({
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={isDragActive ? "dropzone-active" : "dropzone"}
    >
      <input {...getInputProps()} />
      <p>Перетягніть сюди файл або клацніть, щоб вибрати файл</p>
    </div>
  );
};

export default FileUploader;
