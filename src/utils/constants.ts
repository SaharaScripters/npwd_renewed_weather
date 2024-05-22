import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import WaterIcon from '@mui/icons-material/Water';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';


type WeatherIconMap = {
  [key: string]: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
};

export const weatherIcons: WeatherIconMap = {
  BLIZZARD: SevereColdIcon,
  CLEAR: WbSunnyIcon,
  CLEARING: WbSunnyIcon,
  CLOUDS: CloudQueueIcon,
  EXTRASUNNY: WbSunnyIcon,
  FOGGY: WaterIcon,
  NEUTRAL: WbSunnyIcon,
  OVERCAST: CloudIcon,
  RAIN: ThunderstormIcon,
  SMOG: WaterIcon,
  SNOW: AcUnitIcon,
  SNOWLIGHT: AcUnitIcon,
  THUNDER: ThunderstormIcon,
  XMAS: AcUnitIcon,
};
