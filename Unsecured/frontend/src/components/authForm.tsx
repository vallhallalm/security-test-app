import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface AuthProps {
    email?:string
    setEmail (email: string) : void
    password?:string
    setPassword (email: string) : void
}

const Auth = (props : AuthProps) => {
    const { setEmail, setPassword, email, password} = props
    
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    
    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleSubmitAuth = (id?:string, pwd?:string) => {
        if (id && pwd) {
        }
    }

    return (
        <Stack
            sx={{
                width:"100%",
                alignItems:"center",
                justifyContent:"center",
            }}
        >
            <Stack
                mb="20px"
            >
                <TextField
                    label="Email"
                    type="text"
                    placeholder={"example@example.com"}
                    helperText="Please enter your email"
                    onChange= {(e) => {
                        if(e) {
                            setEmail(String(e))
                        } else {setEmail("")}
                    }}
                />
            </Stack>
            <Stack
                sx={{
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center"
                }}
            >
                <TextField
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    onChange= {(e) => {
                        if(e) {
                            setPassword(String(e))
                        } else {setPassword("")}
                    }}
                />
                <Stack
                    sx={{
                        ml:"10px",
                        background: hover ? "radial-gradient(#999999 ,#bdb9af)" : ""
                    }}
                    onClick={handleClickShowPassword}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {showPassword  ?
                            <Visibility/>
                        :
                            <VisibilityOff/>
                    }
                </Stack>
            </Stack>
            <Stack>
                <Stack>

                </Stack>
                <Stack
                    sx={{
                        flexDirection:"row",
                        mt:"20px"
                    }}
                >
                    <Stack mr="10px">
                        <Button 
                            variant="outlined"
                        >
                            Cancel
                        </Button>
                    </Stack>
                    <Button 
                        variant="contained"
                        onClick={() => handleSubmitAuth(email, password)}
                        disabled = {email!==undefined && password!==undefined}
                    >
                        Sign up
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Auth