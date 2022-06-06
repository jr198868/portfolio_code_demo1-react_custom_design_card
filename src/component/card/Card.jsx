import * as React from 'react';
import styled from "styled-components";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Trip from '../tripcard/Tripcard_raw'



export default function Card_3DCSS() {

    const CardSection = styled.div`
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
    `;

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
      
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
      <div>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" style={{background: 'white'}}>
                    <Tab label="Item 1" value="1" />
                    <Tab label="Item 2" value="2" />
                    
                </TabList>
            </Box>
            <TabPanel value="1" style={{background: 'white'}}>Item One</TabPanel>
            <TabPanel value="2">
                <Trip />
            </TabPanel>
        </TabContext>

  </div>
  );
}
