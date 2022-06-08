import * as React from 'react';
import ReactStars from 'react-stars';
import Card from '@mui/material/Card';
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import randyland from '../assets/IMG195.jpg';
import nightviewnown from '../assets/IMG196.jpg';
import roll from '../assets/IMG197.jpg';
import rockroll from '../assets/IMG198.jpg';
import chicago from '../assets/IMG199.jpg';
import rice from '../assets/IMG200.jpg';

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

        <CardSection>
            <Card sx={{ maxWidth: 380,  height: 550, m: 10, boxShadow: '0 26px 70px -12.125px rgba(0,0,0,0.3)'}} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="380"
                    image= {randyland}
                    sx={{ boxShadow: 3 }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                        Roadside Pittsburgh Randyland 
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#1c7fee'} />
                            </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Randyland, Pittsburgh <br />
                        May 28, 2022
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </CardSection>
    </div>
    )
}