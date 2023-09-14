import * as React from 'react';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Typography
        variant="h2"
        textAlign="center"
        style={{ color: '#1976d2' }}
      ></Typography>

      <Typography
        variant="h4"
        textAlign="center"
        fontFamily="Dancing Script"
        style={{ color: '#1976d2' }}
      ></Typography>

      <Typography variant="h6" textAlign="center" style={{ color: '#1976d2' }}>
        Wanna try? Just <Link to="/registration">sign up</Link>
      </Typography>
      <Typography variant="h6" textAlign="center" style={{ color: '#1976d2' }}>
        Already with us? Just <Link to="/login">login</Link>
      </Typography>
    </div>
  );
};
