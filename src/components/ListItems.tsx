import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PaidIcon from '@mui/icons-material/Paid';
import CalculateIcon from '@mui/icons-material/Calculate';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ComputerIcon from '@mui/icons-material/Computer';
import GavelIcon from '@mui/icons-material/Gavel';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import Collapse from '@mui/material/Collapse';

export const Year1 = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(

        <React.Fragment>

        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Jahr 1" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PrecisionManufacturingIcon />
                    </ListItemIcon>
                    <ListItemText primary="WI: Einführung" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PrecisionManufacturingIcon />
                    </ListItemIcon>
                    <ListItemText primary="WI: SAuE" />
                </ListItemButton>
        
                <ListItemButton>
                    <ListItemIcon>
                        <ComputerIcon />
                    </ListItemIcon>
                    <Link href="1/it" style={{color: 'black', textDecoration: 'none'}} >
                        <ListItemText primary="IT: Einführung" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="IT: BS" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="IT: KS" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <KeyboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Programmieren I" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <KeyboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Programmieren II" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="BWL: Einführung" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="BWL: Marketing" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <PaidIcon />
                    </ListItemIcon>
                    <ListItemText primary="GRL: FiBu" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PaidIcon />
                    </ListItemIcon>
                    <ListItemText primary="GRL: KLR" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <GavelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recht: Vertrag/Schuld." />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <GavelIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recht: Handel/Gesell." />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mathe: Analy./LinAlg." />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mathe: Logik/Alg." />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <TerminalIcon />
                    </ListItemIcon>
                    <ListItemText primary="SE: Methoden" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <TerminalIcon />
                    </ListItemIcon>
                    <ListItemText primary="SE: Konzepte" />
                </ListItemButton>

            </List>
        </Collapse>
    
      </React.Fragment>
    )
}

export const Year2 = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return(

        <React.Fragment>

        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Jahr 2" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PrecisionManufacturingIcon />
                    </ListItemIcon>
                    <ListItemText primary="WI: Fallstudie" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PrecisionManufacturingIcon />
                    </ListItemIcon>
                    <ListItemText primary="WI: PM" />
                </ListItemButton>
        
                <ListItemButton>
                    <ListItemIcon>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText primary="DB: DB I" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <StorageIcon />
                    </ListItemIcon>
                    <ListItemText primary="DB: DB II" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <KeyboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="EVS: Web-Prog." />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <KeyboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="EVS: Vert. Sys." />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <PaidIcon />
                    </ListItemIcon>
                    <ListItemText primary="ReWe: In/Fi" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PaidIcon />
                    </ListItemIcon>
                    <ListItemText primary="ReWe: Bilanzierung" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="VWL: Mikro/Makro" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="VWL: Geld/Währung" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mathe: Statistik" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mathe: OR" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="TI: Einführung" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ComputerIcon />
                    </ListItemIcon>
                    <ListItemText primary="TI: IT-Sicherheit" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <TerminalIcon />
                    </ListItemIcon>
                    <ListItemText primary="SE: Konzepte" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <TerminalIcon />
                    </ListItemIcon>
                    <ListItemText primary="SE: Architekturen" />
                </ListItemButton>
                
                <ListItemButton>
                    <ListItemIcon>
                        <DisplaySettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="AdvIT: BS" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DisplaySettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="AdvIT: RN" />
                </ListItemButton>

            </List>
        </Collapse>
    
      </React.Fragment>
    )
}