import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { WeatherData } from "../types/weather";
import { weatherIcons } from "../utils/constants";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WindPowerIcon from '@mui/icons-material/WindPower';
import NorthIcon from '@mui/icons-material/North';

const WeatherItem = ({ weather }: { weather: WeatherData }) => {
  const { code, label, hasRain, hasSnow, windSpeed, windDirection, startIn } = weather;
  const IconComponent = weatherIcons[code] || weatherIcons.NEUTRAL;

  return (
    <ListItem>
      <ListItemIcon>
        <IconComponent fontSize='large' style={{ color: '#FFCC00' }} />
      </ListItemIcon>
      <List>
        <ListItemText
          primary={label}
          style={{ color: '#FFFFFF' }}
        />
        <ListItemText
          primary={
            <Box>
              {windSpeed && <WindPowerIcon fontSize="small" style={{ marginLeft: "4px" }} />}
              {windSpeed && <ListItemText color="white" secondary={`${windSpeed} mph`} secondaryTypographyProps={{color:'#B2DFDB'}} />}
              {windDirection && <NorthIcon fontSize="small" style={{ marginLeft: "4px" }} />}
              {windDirection && <ListItemText secondary={`${windDirection}°`} secondaryTypographyProps={{color:'#B2DFDB'}} />}
              {hasRain && <BeachAccessIcon fontSize="small" style={{ marginLeft: "4px" }} />}
              {hasRain && <ListItemText secondary="Rain" secondaryTypographyProps={{color:'#B2DFDB'}} />}
              {hasSnow && <AcUnitIcon fontSize="small" style={{ marginLeft: "4px" }} />}
              {hasSnow && <ListItemText secondary="Snow" secondaryTypographyProps={{color:'#B2DFDB'}} />}
            </Box>
          }
        />
        {startIn && <ListItemText secondary={`Starts in ${startIn} minutes`} secondaryTypographyProps={{color:'#B2DFDB'}} />}
      </List>
    </ListItem>
  );
}

export default WeatherItem;
