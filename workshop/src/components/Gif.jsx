import React from 'react';

const Gif = ({ gifID, setSelectedID }) => {
  const url = `https://media.giphy.com/media/${gifID}/giphy.gif`;
  const handleClick = () => {
    setSelectedID(gifID);
  };

  return (
    <img
      src={url}
      alt="gif"
      className="gif"
      onClick={handleClick}
    />
  );
};

export default Gif;
