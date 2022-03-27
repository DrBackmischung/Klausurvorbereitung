import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const mdTheme = createTheme();

function HomepageContent() {

  return (
    <ThemeProvider theme={mdTheme}><Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
                <h3>Chart</h3>
            </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                }}
            >
            <h3>Deposits</h3>
            </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <h3>Orders</h3>
            </Paper>
        </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default function Homepage() {
  return <HomepageContent />;
}