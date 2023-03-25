import { Box, Stack, Typography } from "@mui/material"
import React from "react"

interface ButtonProps {
    title: string,
    backgroundColor:string,
    direction: "row" | "column",
    isSelected:boolean,
    icon?: string,
    onClick?(): void
}

const Button = (props: ButtonProps) => {
    const {title, backgroundColor, direction, icon, onClick, isSelected} = props

    return (
        <Stack
            onClick={onClick ? onClick : () => {}}
            sx={{
                borderRadius:"10px",
                backgroundColor: isSelected ? "#E8F0F6" : backgroundColor,
                flexDirection: direction,
                alignItems:"center",
                justifyContent:"center",
                p:"0px 8px"
            }}
        >
            {icon && (
                <Box
                    component="img"
                    src={icon}
                />
            )}
            <Typography>
                {title}
            </Typography>
        </Stack>
    )
}

export default Button