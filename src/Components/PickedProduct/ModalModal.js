import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function ModalCart() {
  const [ModalisOpen, setModalisOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={ModalisOpen}
        onRequestClose={() => setModalisOpen(false)}
        style={{
          overlay: {
            backgroundColor: "white",
          },
          content: {
            color: "white",
            backgroundColor: "black",
            borderRadius: "3px",
            width: "700px",
            height: "300px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Chelsea Fun Facts</h2>
        <p>
          Chelsea once played a Premier League game wearing the oppositions away
          kit.. Yikes!
        </p>
        <div>
          <button onClick={() => setModalisOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}
