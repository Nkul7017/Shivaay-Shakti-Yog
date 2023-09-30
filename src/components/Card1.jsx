import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image1 from '../../public/program.png'
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link} from "react-router-dom";
export default function Card1() {
  return (
    <Card sx={{ maxWidth:320 ,minWidth:320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Image1}
          alt="green iguana"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" className="heading-class" component="div">
          <span className='heading'>Yoga in the Modern World</span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <span className='para'>In an era defined by stress, anxiety, and chronic busyness, ancient practices like yoga offer a beacon of hope. </span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/ParticularProgram" className='knowmorebtn' >Know More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

