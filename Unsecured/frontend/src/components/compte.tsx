import { Stack, Typography } from "@mui/material"
import React from "react"

interface CompteProps {
    title: string,
    price: number
}

const Compte = (props : CompteProps) => {
    const {title, price} = props

    return (
        <Stack
            sx={{
                flexDirection:"row",
                backgroundColor:"white",
                boxShadow:"2px 2px 1px #EAEAEA",
                borderRadius:"5px",
                border:"solid 1px #EAEAEA",
                justifyContent:"space-between",
                width:"80vw",
                p:"14px 20px"
            }}
        >
            <Typography
                fontWeight={600}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    color:"green"
                }}
            >
                {`+${price} €`}
            </Typography>
        </Stack>
    )
}

export default Compte