import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link'

const mdTheme = createTheme();

function ITEinfuehrungContent() {

  return (
    <ThemeProvider theme={mdTheme}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
                <Paper sx={{ p: 2, display: 'flex',  flexDirection: 'column', }}>
                    <Link href="../../aufgaben/1/IT_Einfuehrung/VonNeumann.txt" style={{color: 'black', textDecoration: 'none'}} target="_blank">
                        <h4>[PDF] Übungsklausur 1: Einführung IT</h4>
                    </Link>
                </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Paper sx={{ p: 2, display: 'flex',  flexDirection: 'column', }}>
                    <h4>[PDF] Übungsklausur 2: Einführung IT</h4>
                </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
                <Paper sx={{ p: 2, display: 'flex',  flexDirection: 'column', }}>
                    <h4>[PDF] Übungsklausur 3: Einführung IT + BS/KS</h4>
                </Paper>
            </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default function ITEinfuehrung() {
  return <ITEinfuehrungContent />;
}