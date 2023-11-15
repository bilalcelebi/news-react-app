import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const StyledHeader = styled('div')({
  backgroundColor: '#C5C5C5',
  color: '#2E2E2E',
  padding: '10px',
  textAlign: 'center',
  marginBottom: '7px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius:15
});

const StylishHeader = ({ children }) => {
  return (
    <StyledHeader>
      <Typography variant="h1" component="h1">
        {children}
      </Typography>
    </StyledHeader>
  );
};

export default StylishHeader;