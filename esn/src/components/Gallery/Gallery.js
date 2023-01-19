import React, { useState } from 'react';
import './Gallery.css'
import PhotoAlbum from "react-photo-album";
import photos from "./photos.ts";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

function Gallery() {    
    // const [open, setOpen] = useState(false);

    return (
        <div className='gallery'>
            &nbsp;
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
    )
}

export default Gallery