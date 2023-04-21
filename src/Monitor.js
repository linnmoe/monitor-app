import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CelebrationIcon from '@mui/icons-material/Celebration';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Monitor = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            <CelebrationIcon></CelebrationIcon>
            <ul>
              <li>
                AW-kväll
              </li>
              <li>
                Docker-kurs
              </li>
            </ul>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Monitor;