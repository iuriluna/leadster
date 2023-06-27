import {CardsVideo} from '../styles/card-video' 

import Image from 'next/image'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import Thumbnail from '../assets/thumbnail.png'

export default function ActionAreaCard() {
  return (
    <>
    <CardsVideo>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <Image 
          src={Thumbnail}
          width={300}
          height={204}
          alt='Thumbnail'
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Como aumentar sua Geração de Leads feat. Traktor
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <Image 
          src={Thumbnail}
          width={300}
          height={204}
          alt='Thumbnail'
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Como aumentar sua Geração de Leads feat. Traktor
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <Image 
          src={Thumbnail}
          width={300}
          height={204}
          alt='Thumbnail'
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Como aumentar sua Geração de Leads feat. Traktor
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </CardsVideo>
    </>
  );
}
