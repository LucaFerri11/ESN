import React from "react";
import "./Gallery.css";
import PhotoAlbum from "react-photo-album";
import photos from "./photos.ts";

function Gallery() {
  return (
    <div className="gallery">
      &nbsp;
      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
}

export default Gallery;
