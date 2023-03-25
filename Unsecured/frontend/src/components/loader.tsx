import { Box, CircularProgress, Stack, Typography } from "@mui/material"
import React from "react"

interface CircularLoaderProps {
    caption?: string,
    icon?: string
}

const CustomLoader = (props : CircularLoaderProps) => {
    const {caption,icon} = props

    return (
        <Stack>
            {icon && (
                <Box
                    component="img"
                    src={icon}
                    sx={{
                        width:"250px",
                        height:"250px"
                    }}
                />
            )}
            <CircularProgress
                color="inherit"
            />
            {caption && (
                <Typography>
                    {caption}
                </Typography>
            )}
        </Stack>
    )
}

export default CustomLoader