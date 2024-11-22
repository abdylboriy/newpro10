import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Sidbtn } from '../doctorStyled';

export  function NestedList() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
  
      >
     
        
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="Brand"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Aidal" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Knal" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="escape" />
              
            </ListItemButton>
  
          </List>
        </Collapse>
        {/* <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="Company"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="escape" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
            
  
  
  
              <ListItemText primary="Aidal" />
              
            </ListItemButton>
  
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="License type"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="1 year" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="2 year" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="1.5year" />
              
            </ListItemButton>
  
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="Number of travelers"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="2" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="3-4" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="5+" />
              
            </ListItemButton>
  
          </List>
        </Collapse>
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="Location"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Seoul" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Korea" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Pusan" />
              
            </ListItemButton>
  <Sidbtn>
                <button1>Cancel</button1>
                <button2>Search</button2>
        </Sidbtn>
          </List>
        </Collapse> */}
        
      </List>
    );
  }
  export  function NestedList2() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
  
      >
     
        
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="Company"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="escape" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Aidal" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
              
            </ListItemButton>
  
          </List>
        </Collapse>

        
      </List>
    );
  }
  export  function NestedList3() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
  
      >
     
        
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="License type"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="1 year" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="2 year" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="1.5 year" />
              
            </ListItemButton>
  
          </List>
        </Collapse>
        
        
      </List>
    );
  }export  function NestedList4() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
  
      >
     
        
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="Number of travelers"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="2" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="3-4" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="5+" />
              
            </ListItemButton>
  
          </List>
        </Collapse>
        
        
      </List>
    );
  }
  export  function NestedList5() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
  
      >
     
        
        <ListItemButton onClick={handleClick}  sx={{
           borderBottom: '1px solid rgba(55, 55, 55, 0.30)', 
          }}>
    
          <ListItemText primary="Location"
          primaryTypographyProps={{
              sx: {
                color: '#000',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '18px',
              },
            }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Seoul" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Korea" />
            </ListItemButton>
  
            <ListItemButton sx={{ pl: 4 }}>
               <ListItemIcon>
                <Checkbox edge="start" /> 
              </ListItemIcon>
  
  
  
              <ListItemText primary="Pusan" />
              
            </ListItemButton>
  
          </List>
        </Collapse>
        
  <Sidbtn>
                <button1>Cancel</button1>
                <button2>Search</button2>
        </Sidbtn>
          
        
      </List>
    );
  }