import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthenticationPage from './page/authenticationPage';
import AccountPage from './page/account';
import Navbar from './components/navbar';
import { Stack } from '@mui/material';
import MaintenancePage from './page/maitenance';
import { QueryClient, QueryClientProvider } from "react-query";
import AdminPage from './page/adminPage';

function App() {
  
  const queryClient= new QueryClient({})

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
              <Route  path="*" element={<AuthenticationPage/>}/>
              <Route  path="/auth" element={<AuthenticationPage/>}/>
              <Route  path="/account" element={<AccountPage/>} />
              <Route  path="/maintenance" element={<MaintenancePage/>} />
              <Route  path="/admin" element={<AdminPage/>} />
            </Routes>
            {window.location.pathname !== ("/"||"/admin") && (
              <Stack
                position="sticky"
                bottom="0px"
                width="100vw"
              >
                <Navbar/>
              </Stack>
            )}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
