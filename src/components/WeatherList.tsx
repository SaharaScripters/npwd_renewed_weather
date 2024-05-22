import React from 'react';
import { List, Typography, Box } from '@mui/material';
import { WeatherData, WeatherListProps } from '../types/weather';
import WeatherItem from './WeatherItem';
import styled from '@emotion/styled';

const Container = styled.div`
  color: white;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

const WeatherList: React.FC<WeatherListProps> = ({weatherDataList}) => {
  const currentWeather = weatherDataList[0];
  const upcomingWeather = weatherDataList.slice(1);
  return (
    <Container>
    <Box>
      <Typography variant="h5" gutterBottom style={{color: '#FFCC00'}}>
        Current Weather
      </Typography>
      <WeatherItem weather={currentWeather} />

      <Typography variant="h5" gutterBottom style={{color: '#FFCC00'}}>
        Upcoming Weather
      </Typography>
      <List>
        {upcomingWeather.map((weather, index) => (
          <WeatherItem key={index} weather={weather} />
        ))}
      </List>
    </Box>
    </Container>
  );
};

export default WeatherList;
