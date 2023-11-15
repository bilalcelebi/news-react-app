import React from 'react';
import Grid from '@mui/material/Grid';
import NewsCard from './NewsCard';

const NewsList = ({ newsData }) => {

    return (
        <Grid container spacing={2} justifyContent="center">
          {newsData.map((news, index) => (
            <Grid item key={index}>
              <NewsCard 
              title = {news['title']}
              description = {news['description']}
              url = {news['url']}
              publishedAt = {news['publishedAt']} />
            </Grid>
          ))}
        </Grid>
      );    

};

export default NewsList;    