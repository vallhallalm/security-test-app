import { Stack } from "@mui/material"
import React from "react"
import Button from "./button"
import compte from "../img/compte.png"
import virement from "../img/virement.png"
import carte from "../img/carte.png"
import contact from "../img/contact.png"
import plus from "../img/plus.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate=useNavigate()

    return (
        <Stack
            sx={{
                backgroundColor:"white",
                maxWidth:"100vw",
                borderTop: "solid 1px #EAEAEA",
                flexDirection: "row",
                justifyContent: "center",
                p:{xs:"4px 0px", md:"12px 0px"}
            }}
        >
            <Stack
                sx={{
                    pr:{xs:"8px", md:"16px"}
                }}
            >
                <Button 
                    title={"Comptes"} 
                    backgroundColor={"white"} 
                    direction={"column"}     
                    icon={compte}
                    isSelected={true}
                    onClick={() => {navigate("/account")}}
                />
            </Stack>
            <Stack
                sx={{
                    pr:{xs:"8px", md:"16px"}
                }}
            >
                <Button 
                    title={"Virements"} 
                    backgroundColor={"white"} 
                    direction={"column"}     
                    icon={virement}
                    isSelected={false}
                    onClick={() => {navigate("/maintenance")}}
                />
            </Stack>
            <Stack
                sx={{
                    pr:{xs:"8px", md:"16px"}
                }}
            >
                <Button 
                    title={"Cartes"} 
                    backgroundColor={"white"} 
                    direction={"column"}     
                    icon={carte}
                    isSelected={false}
                    onClick={() => {navigate("/maintenance")}} 
                />
            </Stack>
            <Stack
                sx={{
                    pr:{xs:"8px", md:"16px"}
                }}
            >
                <Button 
                    title={"Contact"} 
                    backgroundColor={"white"} 
                    direction={"column"}     
                    icon={contact}
                    isSelected={false}
                    onClick={() => {navigate("/maintenance")}}      
                />
            </Stack>
            <Stack
                sx={{
                    pr:"0px"
                }}
            >
                <Button 
                    title={"Plus"} 
                    backgroundColor={"white"} 
                    direction={"column"}     
                    icon={plus}
                    isSelected={false}
                    onClick={() => {navigate("/maintenance")}}  
                />
            </Stack>
        </Stack>
    )
}

export default Navbar
