import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { Header } from './styles/header';
import { Loading } from './styles/loading';
import { IPhoneSettings } from '@npwd/types';
import { i18n } from 'i18next';
import {
  IconButton,
  Theme,
  StyledEngineProvider,
  ThemeProvider,
  Typography,
  CircularProgress,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import fetchNui from './utils/fetchNui';
import { ServerPromiseResp } from './types/common';
import { WeatherData } from './types/weather';
import WeatherList from './components/WeatherList';

const Container = styled.div`
  flex: 1;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  background-color: #002F2F;
`;

interface AppProps {
  theme: Theme;
  i18n: i18n;
  settings: IPhoneSettings;
}

export function App(props: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [weatherList, setWeatherList] = useState<WeatherData[] | undefined>([]);

  useEffect(() => {
    fetchNui<ServerPromiseResp<WeatherData[]>>('getForcast').then(
      (resp) => {
        setIsLoading(false);
        setWeatherList(resp.data);
      }
    ).catch((err) => {
      setIsLoading(false);
      setWeatherList([
        {
          code: 'NEUTRAL',
          label: 'Error',
          hasRain: false,
          hasSnow: false,
          startIn: 0,
        },
        {
          code: 'NEUTRAL',
          label: 'Error',
          hasRain: false,
          hasSnow: false,
          startIn: 30,
        }
      ]);
    });

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={props.theme}>
        <Container>
          <Header>
            <IconButton onClick={() => history.goBack()} style={{ color: '#FFD700' }}>
              <ArrowBack />
            </IconButton>
            <Typography fontSize={24} color='#FFD700' fontWeight='bold'>
              Weather App
            </Typography>
          </Header>
          {
            isLoading ? (
              <Loading>
                <CircularProgress />
              </Loading>
            ) : (
              (weatherList && weatherList.length > 0) ?
              <WeatherList weatherDataList={weatherList} /> :
              <Typography variant='h5' textAlign={'center'}>No weather data available</Typography>
            )
          }
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default function WithProviders(props: AppProps) {
  return (
    <App {...props} />
  );
}
