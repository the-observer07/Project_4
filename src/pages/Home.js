import React, { useEffect, useState } from "react";
import DataTicker from "../component/DataTicker";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import ResponsiveAppBar from "../component/ResponsiveAppBar";
import Table from "../component/Table";
import MainLineChart from "../component/charts/MainLineChart";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import geckoAPISlice, { geckoAPIActions } from "../redux/coingeckoAPISlice";
import watchlistSlice, { watchlistActions } from "../redux/watchlistSlice";
import { useSelector, useDispatch } from "react-redux";
import "../style.css";
import "../index.css"
// import "../queries.css"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};



const Home = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const api = useSelector((state) => state.api);

    useEffect(() => {}, [api]);

    return (
        <>
        <div>
            <div id="container">
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat
                            porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <div>
                <ResponsiveAppBar />
                <DataTicker />
                <div className="tableContainer">
                    <Table />
                </div>
                {/* <MainLineChart /> */}
             
                {/* <WatchList /> */}
            </div>
            </div>
        </>
    );
};

export default Home;
