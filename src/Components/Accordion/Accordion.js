import React, { useState } from "react";

export default function Accordion(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-title">
        <div className="content">
          <p>Testing</p>
        </div>
      </div>
    </div>
  );
}
