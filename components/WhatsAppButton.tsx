import React from "react";

const WhatsAppButton = ({ quote }) => {
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const message = encodeURIComponent(`Hello, here is my quote: ${quote}`);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button style={{
        backgroundColor: "#90EE90",   // Light green background
        color: "white",               // White text
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px"
      }}>
        Send Quote via WhatsApp
      </button>
    </a>
  );
};

export default WhatsAppButton;
