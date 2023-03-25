import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { getAuth, postAuth } from "../query/user";

interface AuthProps {
    email?:string
    setEmail (email?: string) : void
    password?:string
    setPassword (email?: string) : void
    signUp? : boolean,
    setSignUp (signUp:boolean) : void
}

const Auth = (props : AuthProps) => {
    const {
        setEmail,
        setPassword, 
        email, 
        password,
        signUp,
        setSignUp
    } = props
    
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [hover, setHover] = useState<boolean>(false)
    const [error, setError] = useState<string>()

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    async function handleSubmitAuth () {
        if (email && password) {
            setError(undefined)
            if(signUp) {
                const auth = await postAuth(email, password)
                if (auth) {
                    if(auth.data.error && auth.data.error.code==="ER_DUP_ENTRY") {
                        setError("Already existing username, please try with another one")
                    }
                } else {
                    setError("Server Error, please try again later  ")
                }
            } else {
                const auth = await getAuth(email, password)
                if (auth) {
                    if(auth.data && auth.data.auth===true) {

                    } else {
                        setError("Wrong id or password, please try again")
                        setPassword(undefined)
                    }
                } else {
                    setError("Server Error, please try again later  ")
                }
            }
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
                            setEmail(String(e.currentTarget.value))
                        } else {setEmail("")}
                    }}
                />
            </Stack>
            <Stack>
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
                                setPassword(String(e.currentTarget.value))
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
                    {error &&
                        <Typography
                            color="red"
                            fontSize="10px"
                        >
                            {error}
                        </Typography>
                    }
                </Stack>
            </Stack>
            <Stack mt="20px" alignContent={"center"}>
                <Stack
                    flexDirection="row"
                >
                    {!signUp ? "Don't have an account yet ?  " : "Already have an account ?  "} 
                    <Typography 
                        onClick={() => {setSignUp(!signUp)}}
                        color="blue"
                        sx={{
                            cursor: "pointer"
                        }}
                    > 
                        {!signUp ? " Sign up" : " Log in"}
                    </Typography>
                </Stack>
                <Stack
                    sx={{
                        flexDirection:"row",
                        mt:"20px",
                        justifyContent:"center"
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
                        onClick={() => handleSubmitAuth()}
                        disabled = {!(email!==undefined && password!==undefined)}
                    >
                        {signUp ? "Sign Up" : "Log In"}
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Auth