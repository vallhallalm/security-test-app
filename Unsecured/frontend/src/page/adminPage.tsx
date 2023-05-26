import { Button, Input, Stack } from "@mui/material"
import React from "react"
import { postFile } from "../query/upload"

const AdminPage = () => {

    var formData = new FormData ()

    const handleFileUpload = (e:any) => {
        formData.append("test", e.target.files[0])
        console.log(formData)
    }

    const handleSubmit = () => {
        console.log(formData)
        postFile(formData)
    }

    return (
        <Stack
            alignItems="center"
            justifyContent="center"
        >
            <Input 
                type="file"
                onChange={(e) => {handleFileUpload(e)}}
            />
            <Stack
                mt="10px"
            >
                <Button
                    variant="outlined"
                    onClick={handleSubmit}         
                >
                    Submit
                </Button>
            </Stack>
        </Stack>
    )
}

export default AdminPage