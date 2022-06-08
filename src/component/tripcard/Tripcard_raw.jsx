import * as React from 'react';
import ReactStars from 'react-stars';
import './Tripcard_raw.css';
import Card from '@mui/material/Card';
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import randyland from '../assets/IMG195.jpg';
import nightviewnown from '../assets/IMG196.jpg';
import roll from '../assets/IMG197.jpg';
import rockroll from '../assets/IMG198.jpg';
import chicago from '../assets/IMG199.jpg';
import rice from '../assets/IMG200.jpg';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';




export default function Trip() {

    const CardSection = styled.div`
        display: flex;
        justify-content: center;
        flex-flow: row wrap;
    `;

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

  return (
      <div>
        <CardSection>
            <Card sx={{ maxWidth: 380,  height: 550, m: 10}} >
                <CardActionArea >
                    <CardMedia
                    component="img"
                    height="380"
                    image= {nightviewnown}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                        Pittsburgh's Night View in Mt. Washington
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                            </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Mt. Washington, Pittsburgh <br />
                        May 30, 2022
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 380,  height: 550, m: 10}} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="380"
                    image= {randyland}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                        Roadside Pittsburgh Randyland 
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                            </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Randyland, Pittsburgh <br />
                        May 28, 2022
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10}} >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="380"
                    image= {roll}
                    className = "card-image"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                        Cleveland Rock & Roll Hall of Fame
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                        </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Cleveland, Ohio <br />
                        May 30, 2022
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10}} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="380"
                        image= {chicago}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                        Balaban and Katz Chicago Theatre
                        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <ReactStars
                                count={7}
                                onChange={ratingChanged}
                                size={24}
                                color2={'#ffd700'} />
                        </div>
                    </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Chicago, Illinois <br />
                            November 25, 2021
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10}} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="380"
                        image= {rockroll}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                            Rock and Roll Hall of Fame (RRHOF)
                            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <ReactStars
                                    count={7}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#ffd700'} />
                            </div>
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Cleveland, Ohio<br />
                            May 30, 2022
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 380,  height: 550, m: 10}} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="380"
                        image= {rice}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style = {{fontWeight: 600}}>
                            Rice University Academic Quad
                            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <ReactStars
                                    count={7}
                                    onChange={ratingChanged}
                                    size={24}
                                    color2={'#ffd700'} />
                            </div>
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Houston, Texas <br />
                            November 5, 2021
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </CardSection>


  </div>
  );
}
