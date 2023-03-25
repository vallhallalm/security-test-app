import { Stack } from "@mui/material";
import React, { useState } from "react";
import AuthForm from "../components/authForm";

const AuthenticationPage = () => {

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [signUp, setSignUp] = useState<boolean>(false)

    return (
        <Stack 
            sx={{
                width:"100%",
                height:"100%",
                m:"20px"
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
                    signUp={signUp}
                    setSignUp={setSignUp}
                />
            </Stack>
        </Stack>
    )
}

export default AuthenticationPage