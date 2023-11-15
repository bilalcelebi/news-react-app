import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NewsCard = (props) => {
  return (
    <Card sx={{ width: 850, height: '60%', margin: 'auto', marginTop: 10, p: 2, display:'flex', flexDirection:'column', justifyContent:'space-between', borderRadius:10, alignItems:'center'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{marginTop:2, marginBottom:2}}>
          {props.description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Published At : {props.publishedAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.url} target="_blank" rel="noopener noreferrer" size="small" variant='contained' sx={{marginBottom:3}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;