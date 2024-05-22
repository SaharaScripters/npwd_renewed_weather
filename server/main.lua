local config = require 'config.server'

local function getWeatherList()
  local formattedWeatherList = {}
  local weatherList = exports['Renewed-Weathersync']:getWeatherList()
  if not weatherList or not next(weatherList) then return formattedWeatherList end
  local startIn = 0
  for k, weatherData in pairs(weatherList) do
    if k > config.weatherListLimit then break end
    startIn = startIn + weatherData.time
    local formattedWeatherData = {
      code = weatherData.weather,
      label = config.weatherTypes[weatherData.weather].label,
      startIn = startIn,
      hasRain = config.weatherTypes[weatherData.weather].hasRain or false,
      hasSnow = config.weatherTypes[weatherData.weather].hasSnow or false,
    }
    formattedWeatherList[k] = formattedWeatherData
  end
  local currentWeather = GlobalState.weather
  formattedWeatherList[1].startIn = nil
  if currentWeather then
    formattedWeatherList[1].windSpeed = currentWeather.windSpeed
    formattedWeatherList[1].windDirection = currentWeather.windDirection
  end
  return formattedWeatherList
end

lib.callback.register('npwd_renewed_weather:callback:getWeatherList', function(source)
  return getWeatherList()
end)
