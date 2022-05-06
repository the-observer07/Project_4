import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container, Box } from "@mui/material/";

export default function CircularIndeterminate() {
    return (
        <Container>
            <Box sx={{ display: "flex" }}>
                <CircularProgress />
            </Box>
        </Container>
    );
}
