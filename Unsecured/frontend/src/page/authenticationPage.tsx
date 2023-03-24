import { Stack } from "@mui/material";
import React, { useState } from "react";
import AuthForm from "../components/authForm";

const AuthenticationPage = () => {

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [signUp, setSignUp] = useState<boolean>(true)

    return (
        <Stack 
            sx={{
                width:"100%",
                height:"100%"
            }}
        >
            <Stack>

            </Stack>
            <Stack>
                <AuthForm
                    setEmail={setEmail}
                    email={email}
                    setPassword={setPassword}
                    password={password}
                />
            </Stack>
        </Stack>
    )
}

export default AuthenticationPage