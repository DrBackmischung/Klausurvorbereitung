import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const mdTheme = createTheme();

function HomepageContent() {

  return (
    <ThemeProvider theme={mdTheme}><Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h3 className='header'>Willkommen!</h3>
                <p>Hier sind viele viele Aufgaben :)</p>
                <p>Viel Spaß beim Lernen!</p>
            </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={6}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h3>Spotlight: IT/BS/KS</h3>
            </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <h3>Spotlight: Mathe I</h3>
            </Paper>
        </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default function Homepage() {
  return <HomepageContent />;
}