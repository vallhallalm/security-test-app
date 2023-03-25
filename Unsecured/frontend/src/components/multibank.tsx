import { Box, Button, Stack, Typography } from "@mui/material"
import React from "react"
import multiAccount from "../img/multiAccount.png"


const MultiBankComp = () => {
    return (
        <Stack
            sx={{
                borderRadius: "10px",
                border : "dashed 3px #EAEAEA",
                width:"80vw",
                p:"24px",
            }}
        >
            <Stack
                sx={{
                    width:"100%",
                    alignItems:"center",
                    justifyContent:"center"
                }}
            >
                <Box
                    component={"img"}
                    src={multiAccount}
                    sx={{
                        pb:"16px",
                        width:"200px",
                        height:"200px"
                    }}
                />
            </Stack>
            <Typography
                sx={{
                    fontWeight:"600",
                    fontSize:"20px",
                    ml:"65px"
                }}
            >
                Tous vos comptes bancaires en un coup d'oeil
            </Typography>
            <Stack
                sx={{
                    width:"100%",
                    alignItems:"center",
                    justifyContent:"center"
                }}
            >
                <Typography
                    pb="24px"
                >
                    Ajoutez ici les comptes détenus dans d'autres banques pour avoir une vision globale de vos finances. C'est totalement gratuit et totalement confidentiel.
                </Typography>
                <Button
                variant="outlined"
                >
                    Ajouter une banque
                </Button>
            </Stack>
        </Stack>
    )
}

export default MultiBankComp