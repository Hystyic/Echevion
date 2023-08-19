import React from 'react';
import './FrontPage.css';

const images = [
  { id: 1, src: "https://cdn.dribbble.com/userupload/6053392/file/original-90dc8e683c85166808a2e69509d4ccb2.png?compress=1&resize=800x800", alt: '1' },
  { id: 2, src: "https://cdn.dribbble.com/userupload/6054317/file/original-0d22343f00cf68f12af1c6d34e598ede.png?compress=1&resize=800x800", alt: '2' },
  { id: 3, src: "https://cdn.dribbble.com/userupload/6059863/file/original-0d54715050f23af2ad21f72f48dbac8d.jpg?compress=1&resize=800x800", alt: '3' },
  { id: 4, src: "https://cdn.dribbble.com/userupload/6058933/file/original-3d7ef1099354156302e3b08e1790478b.jpg?compress=1&resize=800x800", alt: '4' },
  { id: 5, src: "https://cdn.dribbble.com/userupload/5451680/file/original-68fe9720efaa5823427dcc639badc345.png?compress=1&resize=800x800", alt: '5' },
];

const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="image-list-container">
        {images.map((image) => (
          <div className="image-container" key={image.id}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <button className="like-button">Like</button>
              <button className="comment-button">Comment</button>
              <button className="share-button">Share</button>
              <button className="save-button">Save</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontPage;
