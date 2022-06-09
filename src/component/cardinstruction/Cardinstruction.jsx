import * as React from 'react';
import './Cardinstruction.css'
import ReactStars from 'react-stars';
import Card from '@mui/material/Card';
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OverlayTrigger from 'react-overlay-trigger';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import randyland from '../assets/IMG195.jpg';

import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

// const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
//     <Tooltip {...props} classes={{ popper: className }} />
//   ))({
//     [`& .${tooltipClasses.tooltip}`]: {
//       maxWidth: 500,
//     },
//   });
  
//   const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
//     <Tooltip {...props} classes={{ popper: className }} />
//   ))({
//     [`& .${tooltipClasses.tooltip}`]: {
//       maxWidth: 'none',
//     },
//   });
  
  const longText = `
  Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.
  `;

export default function Cardinstruction() {

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    const CardSection = styled.div`
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
    `;


    return (
        <div>
        <div className ='description'>
        Card consists of various elements like card photo area,  card name,  star rating, and text box. <br />
        It can construct different card as based on different requirements. Hover over the card to see each component instruction.
        </div>
        <CardSection>
            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} >            
                <CardActionArea>
                <Tooltip title={<h2 style={{ color: "lightblue" }}>Card Photo Area: <br /> By default,  a background image of a tourist attraction is the major content of the card photo area</h2>} placement="left" >
               
                    <CardMedia
                    component="img"
                    height="380"
                    image= {randyland}
                    sx={{ boxShadow: 3 }}
                    />
                </Tooltip>

                    <CardContent>
                    <Tooltip title={<h2 style={{ color: "lightblue" }}>Card Name: <br /> It is usually tourist attractions in different states in USA</h2>} placement="right">
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                       
                            Roadside Pittsburgh Randyland 

                        <Tooltip title={<h2 style={{ color: "lightblue" }}>Star Rating: <br /> A simple star rating component with half stars and custom characters</h2>} placement="left">

                            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}} className='mask'>
                                <ReactStars
                                    count={7}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#1c7fee'}                                 
                                    />
                            </div> 
    
                        </Tooltip>
                    </Typography>
                    </Tooltip>
                    <Tooltip title={<h2 style={{ color: "lightblue" }}>Text Box: <br /> Location information and date</h2>} placement="right">
                        <Typography variant="body1" color="text.secondary">
                            Randyland, Pittsburgh <br />
                            May 28, 2022
                        </Typography>
                    </Tooltip>
                    </CardContent>
                </CardActionArea>
            </Card>

        </CardSection>
    </div>
    )
}