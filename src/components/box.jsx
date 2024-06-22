import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

const BoxSx = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#FAFAFA',
          },
        },
      }}
    >
      <Box
        sx={{
          width: '100%', 
          maxWidth: '680px', 
          height: 'auto', 
          borderRadius: '8px',
          bgcolor: 'primary.main',
          position: 'relative', 
          padding: '16px',
          border: '1px solid #E0E0E0',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        {children} {/* Render children passed into BoxSx */}
      </Box>
    </ThemeProvider>
  );
};

export default BoxSx;
