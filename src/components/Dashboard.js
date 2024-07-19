import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import BarChart from './BarChart';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className="paper">
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4">$50,000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="paper">
            <Typography variant="h6">New Users</Typography>
            <Typography variant="h4">200</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className="paper">
            <Typography variant="h6">Recent Orders</Typography>
            <Typography variant="h4">150</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="paper">
            <Typography variant="h6">Sales Trends</Typography>
            <Line data={data} />
          </Paper>
        </Grid>
      </Grid>
      <BarChart/>
    </div>
  );
};

export default Dashboard;
