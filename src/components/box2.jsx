import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

const BoxSx = ({ children }) => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#FFFFFF',
            // dark: '#CCCCCC', // Example dark color for hover effect
          },
        },
      }}
    >
      <Box
        sx={{
          width: '100%', 
          maxWidth: { xs: '100%', sm: '425px' }, 
          height: 'auto', 
          borderRadius: '8px',
          bgcolor: '#FFFFFF',
          position: 'flex', 
          top: { xs: '10px', sm: '10px' }, 
          left: { xs: '0%', sm: '50%' }, 
          // transform: { xs: 'none', sm: 'translateX(-50%)' }, 
          border: '1px solid #E0E0E0',
          p: 2, 
          '&:hover': {
            bgcolor: '#FFFFFF',
          },
        }}
      >
        {children} {/* Render children passed into BoxSx */}
      </Box>
    </ThemeProvider>
  );
};

export default BoxSx;
