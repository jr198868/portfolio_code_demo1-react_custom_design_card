import * as React from 'react';
import '../card3d/Card3d.css'
import Typography from '@mui/material/Typography';
import ReactStars from 'react-stars';

import randyland from '../assets/IMG195.jpg';
import nightviewnown from '../assets/IMG196.jpg';
import roll from '../assets/IMG197.jpg';
import rockroll from '../assets/IMG198.jpg';
import chicago from '../assets/IMG199.jpg';
import rice from '../assets/IMG200.jpg';

export default function Card_3DCSS() {

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    return (
    <div class="container">
        <div class="card rgb nightviewnown">
        <div class="card-image"></div>
            <div class="card-description">
                <Typography component="div" style = {{fontSize: "22px", fontWeight: 600, color: '#2fc9e2'}}>
                    Pittsburgh's Night View in Mt. Washington
                    <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactStars
                            count={7}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                        </div>
                </Typography>
                <Typography variant="body1" color="text.secondary" style = {{fontSize: "16px", color: 'white'}}>
                    Mt. Washington, Pittsburgh <br />
                    May 30, 2022
                </Typography>
            </div>
        </div>

        <div class="card rgb randyland">
            <div class="card-image"></div>
            <div class="card-description">
                <Typography component="div" style = {{fontSize: "22px", fontWeight: 600, color: '#ff9a00'}}>
                    Roadside Pittsburgh Randyland 
                    <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactStars
                            count={7}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                        </div>
                </Typography>
                <Typography variant="body1" color="text.secondary" style = {{fontSize: "16px", color: 'white'}}>
                    Randyland, Pittsburgh <br />
                    May 28, 2022
                </Typography>
            </div>
        </div>

        <div class="card rgb roll">
            <div class="card-image"></div>
            <div class="card-description">
                <Typography component="div" style = {{fontSize: "22px", fontWeight: 600, color: '#ff0000'}}>
                    Cleveland Rock & Roll Hall of Fame
                    <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactStars
                            count={7}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                    </div>
                </Typography>
                <Typography variant="body1" color="text.secondary" style = {{fontSize: "16px", color: 'white'}}>
                    Cleveland, Ohio <br />
                    May 30, 2022
                </Typography>
            </div>
        </div>

        <div class="card rgb chicago">
            <div class="card-image"></div>
            <div class="card-description">
                <Typography component="div" style = {{fontSize: "22px", fontWeight: 600, color: '#1c7fee'}}>
                    Balaban and Katz Chicago Theatre
                    <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactStars
                            count={7}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                    </div>
                </Typography>
                <Typography variant="body1" color="text.secondary" style = {{fontSize: "16px", color: 'white'}}>
                    Chicago, Illinois <br />
                    November 25, 2021
                </Typography>

            </div>
        </div>


        <div class="card rgb rockroll">
            <div class="card-image"></div>
            <div class="card-description">
                <Typography component="div" style = {{fontSize: "22px", fontWeight: 600, color: '#4fdc4a'}}>
                    Rock and Roll Hall of Fame (RRHOF)
                    <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactStars
                            count={7}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                    </div>
                </Typography>
                <Typography variant="body1" color="text.secondary" style = {{fontSize: "16px", color: 'white'}}>
                    Cleveland, Ohio<br />
                    May 30, 2022
                </Typography>
            </div>
        </div>



        <div class="card rgb rice">
            <div class="card-image"></div>
            <div class="card-description">
                <Typography component="div" style = {{fontSize: "22px", fontWeight: 600, color: '#ba0cf8'}}>
                    Rice University Academic Quad
                    <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReactStars
                            count={7}
                            onChange={ratingChanged}
                            size={24}
                            color2={'#ffd700'} />
                    </div>
                </Typography>
                <Typography variant="body1" color="text.secondary" style = {{fontSize: "16px", color: 'white'}}>
                    Houston, Texas <br />
                    November 5, 2021
                </Typography>

            </div>
        </div>
    </div>
    )
}