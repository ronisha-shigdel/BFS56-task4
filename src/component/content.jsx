import React from "react";
import "../App.css";
import image from "../assets/images/image.jpg";

function Content() {
  return (
    <>
      <div className="background">
        <div>
          <img className="image" src={image} />
        </div>
        <div>
          <h2 className="sectionTitle">Our Mission</h2>
          <p>
            Our mission is to promote sustainability and combat climate change
            by engaging communities, supporting conservation efforts, and
            advocating for policies that protect our planet. We aim to create a
            sustainable future for all by focusing on renewable energy, reducing
            carbon emissions, and fostering environmental awareness.
          </p>
        </div>
      </div>
    </>
  );
}

export default Content;
