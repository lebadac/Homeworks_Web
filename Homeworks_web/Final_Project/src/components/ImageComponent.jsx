import React from "react";

function ImageComponent({ title, src }) {
    return (
        <div className="imageComponent">
        <img src={src} alt={title} />
        <p>{title}</p>
        </div>
    );
}

export default ImageComponent;
