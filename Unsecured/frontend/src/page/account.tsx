import React from "react"
import Topbar from "../components/topbar"
import { Stack, TextField, Typography } from "@mui/material"
import Compte from "../components/compte"
import MultiBankComp from "../components/multibank"

const AccountPage = () => {

    return (
        <>
            <Topbar/>
            {/*<Stack
                pt="24px"
                pb="24px"
            >
                <TextField
                    className="text"
                    variant="outlined"
                    placeholder="Rechercher"
                    sx={{
                        borderRadius:"20px !important"
                    }}
                />
            </Stack>*/}
            <Stack
                pb="24px"
                pt="24px"
            >
                <Typography
                pl="16px"
                >
                Comptes courants
                </Typography>
                <Stack
                justifyContent={"center"}
                alignItems="center"
                >
                {/*data ? (
                    <>
                    {data.map((item) => {
                        return (
                        <Stack
                            sx={{ pt:"12px" }}
                        >
                            <Compte title={item.title} price={item.price} />
                        </Stack>
                        )
                    })}
                    </>
                ) : (
                    <></>
                )*/}
                </Stack>
            </Stack>
            <Stack pb="24px">
                <MultiBankComp/>
            </Stack>
            <Stack pb="24px">
                <Typography>
                    Solde au {new Date().toLocaleDateString("fr")} sous réserve des opérations en cours d'enregistrement et d'une provision suffisante et disponible lors de l'arrêté de solde du compte réalisé en fin de journée.
                </Typography>
            </Stack>
      </>
    )
}

export default AccountPage