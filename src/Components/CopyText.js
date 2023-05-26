import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";

function CopyText({ text }) {
  return (
    <div
      className="border border-3 rounded my-3 d-flex justify-content-between align-items-center container"
      style={{ width: "445px", height: "50px", backgroundColor: "#F8F0E3" }}
    >
      <div>{text}</div>
      <CopyToClipboard text={text}>
        {/* <button>Copy</button> */}
        <FaCopy></FaCopy>
      </CopyToClipboard>
    </div>
  );
}

export default CopyText;
