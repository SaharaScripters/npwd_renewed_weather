RegisterNUICallback("getForcast", function(_, cb)
  local weatherList = lib.callback.await("npwd_renewed_weather:callback:getWeatherList", false)
  cb({ status = "ok", data = weatherList })
end)
