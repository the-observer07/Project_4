import React from "react";
import Button from "@mui/material/Button";
import "./Modal.css";

function Popup({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <Button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </Button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Continue?</h1>
                </div>
                <div className="body">
                    <p>
                        The next page looks amazing. Hope you want to go there!
                    </p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
