import {CardsVideo, BoxBorder_CardVideo, Border_CardVideo, Text_CardVideo} from '../styles/card-video' 

import Image from 'next/image'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import PaginationRounded from '../components/pagination'

import Thumbnail from '../assets/thumbnail.png'

export default function ActionAreaCard() {
  return (
    <>
      <BoxBorder_CardVideo>
        <Border_CardVideo></Border_CardVideo>
      </BoxBorder_CardVideo>
      <CardsVideo>
        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo  color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

      </CardsVideo>

      <CardsVideo>
        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

      </CardsVideo>

      <CardsVideo>
        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 300, height: 285, borderRadius: 5 }}>
          <CardActionArea>
            <Image 
            src={Thumbnail}
            width={300}
            height={204}
            alt='Thumbnail'
            />
            <CardContent>
              <Text_CardVideo color="text.secondary">
                Como aumentar sua Geração de Leads feat. Traktor
              </Text_CardVideo>
            </CardContent>
          </CardActionArea>
        </Card>

      </CardsVideo>

      <BoxBorder_CardVideo>
        <Border_CardVideo style={{marginTop: 27}} ></Border_CardVideo>
      </BoxBorder_CardVideo>

      <PaginationRounded/>
    </>
  );
}
