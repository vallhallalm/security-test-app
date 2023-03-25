import { Box, Stack, Typography } from "@mui/material"
import React from "react"
import boat from "../img/boat.jpg"

const Topbar = () => {
    return (
        <>
            <Stack width="100%" position="relative">
                <Box
                    sx={{
                        width:"100%",
                        height:"50vh",
                    }}
                    component="img"
                    src={boat}
                />
                
            </Stack>
            <Typography
                sx={{
                    color:"white",
                    fontWeight:"500",
                    fontSize:"25px",
                    position:"absolute",
                    zIndex:"50",
                    top:"80px",
                    left:"15px"
                }}
            >
                Tous mes comptes
            </Typography>
        </>
    )
}

export default Topbar