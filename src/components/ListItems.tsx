import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
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
                    <ListItemText primary="IT: Einführung" />
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
                    <ListItemText primary="Recht" />
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
                    <ListItemText primary="SE" />
                </ListItemButton>

            </List>
        </Collapse>
    
      </React.Fragment>
    )
}