import React from 'react';
import './App.css';
import { Stack } from '@mui/material';
import AuthenticationPage from './page/authenticationPage';

function App() {
  return (
    <Stack
      sx={{
        margin:"20px"
      }}
    >
      <AuthenticationPage/>
    </Stack>
  );
}

export default App;
