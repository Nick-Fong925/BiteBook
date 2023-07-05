import React from "react";
import heroimg from "../assests/Heroimg.jpeg";
function hero() {
  return (
    <div className="relative">
      <img src={heroimg} alt="heroimg" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-teal-100 text-6xl font-bold">
        All The Hidden Gems. All In One Place.
      </div>
    </div>
  );
}

export default hero;
