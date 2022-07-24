import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import AddPost from './components/AddPost/AddPost';
import Feed from './components/Feed/Feed';
import Navbar from './components/Navbar/Navbar';
import Rightbar from './components/Rightbar/Rightbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction={'row'} spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
