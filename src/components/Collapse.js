import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <div className="collapse-container">
      <div className="collapse">
        <div onClick={() => setIsOpen(false)} className="collapse-header">
          <h2 className="collapse-title">{title}</h2>
          <img
            className="collapse-chevron"
            src={isOpen ? "./chevron-up.png" : "./chevron-down.png"}
            alt="Chevron"
          />
        </div>
      </div>
      <div className="collapse-content">{content}</div>
    </div>
  ) : (
    <div className="collapse-container">
      <div className="collapse">
        <div className="collapse-header" onClick={() => setIsOpen(true)}>
          <h2 className="collapse-title">{title}</h2>
          <img
            className="collapse-chevron"
            src={isOpen ? "./chevron-up.png" : "./chevron-down.png"}
            alt="Chevron"
          />
        </div>
      </div>
    </div>
  );
};

export default Collapse;

// <div>
//   <div
//     onClick={() =>
//       (isOpen && setIsOpen(false)) || (!isOpen && setIsOpen(true))
//     }
//     className="collapse"
//   >
//     <div className="collapse-header">
//       <h2 className="collapse-title">{title}</h2>
//       <img
//         className="collapse-chevron"
//         src={isOpen ? "./chevron-up.png" : "./chevron-down.png"}
//       />
//     </div>
//     <div className={isOpen ? "show-collapse" : "hide-collapse"}>
//       {content}
//     </div>
//   </div>
// </div>
