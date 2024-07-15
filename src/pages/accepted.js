import React from "react";
import happy from "../assets/happy_cat.gif";

function Accepted() {
  const sendMessage = () => {
    window.location.href = process.env.REACT_APP_WHATSAPP_LINK;
  };

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    heart.innerText = "💗";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
  setInterval(createHeart, 1000);
  return (
    <div className="main-container">
      <div className="items">
        <div className="container">
          <img src={happy} className="cat-image" id="noButton" alt="rose_cat" />
          <div className="ask-out-text">Happy Happy Happy!</div>
          <button onClick={sendMessage}>Send Message 💖</button>
        </div>
      </div>
    </div>
  );
}

export default Accepted;
