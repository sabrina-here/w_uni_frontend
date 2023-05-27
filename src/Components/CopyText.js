import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

function CopyText({ text }) {
  return (
    <div
      className="border border-3 rounded mb-3 mt-1 d-flex justify-content-between align-items-center container"
      style={{ width: "445px", height: "50px", backgroundColor: "#F8F0E3" }}
    >
      <div>{text}</div>

      <CopyToClipboard text={text}>
        <button className="btn">
          <FaCopy
            style={{ cursor: "pointer" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "blue")}
            onMouseOut={(e) => (e.currentTarget.style.color = "")}
          />
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default CopyText;
