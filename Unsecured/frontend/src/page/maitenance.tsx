import { Stack, Typography } from "@mui/material"
import React from "react"
import EngineeringIcon from '@mui/icons-material/Engineering';

const MaintenancePage = () => {

    return (
        <Stack
            sx={{
                justifyContent:"center",
                alignItems:"center",
                pb:"24px",
                height:"85vh"
            }}
        >
            <EngineeringIcon
                sx={{
                    width:"300px",
                    height:"300px"
                }}
                color="warning"
            />
            <Typography>
                Désolé, l'application est actuellement en maintenance. Veuillez réessayez plus tard
            </Typography>
        </Stack>
    )
}

export default MaintenancePage