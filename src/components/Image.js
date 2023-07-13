import React from "react";

const Image = ({ data }) => {
  console.log(data.cover_photo.urls.regular);
  return (
    <a href={data.cover_photo.urls.regular} target="_blank" rel="noreferrer">
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md"
        src={data.cover_photo.urls.small}
        alt={data.cover_photo.urls.alt_description}
      />
    </a>
  );
};

export default Image;
