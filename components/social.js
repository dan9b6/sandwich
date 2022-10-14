import React from "react";

const Social = () => {
  return (
    <div className="social p-4">
      <div className="social-content text-center d-flex flex-column justify-content-center align-items-center">
        <h3>Offers & Promotions</h3>
        <p>
          For latest offers and menu updates please check out our social media
          for more details
        </p>
        <img src="./images/breakfast.jpg" alt="" className="mb-4" />
        <a
          href=""
          target="_blank"
          className="social-icon social-icon--instagram mb-3"
        >
          Sams Baps
        </a>
        <a
          href=""
          target="_blank"
          className="social-icon social-icon--facebook"
        >
          Sams Baps
        </a>
      </div>
    </div>
  );
};

export default Social;
