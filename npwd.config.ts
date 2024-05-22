import App from './src/App';
import { AppIcon } from './icon';

export const path = '/npwd_renewed_weather';
export default () => ({
  id: 'npwd_renewed_weather',
  nameLocale: 'Forcast',
  color: '#FFCC00',
  backgroundColor: '#008B8B',
  path,
  icon: AppIcon,
  app: App,
  notificationIcon: AppIcon
});
