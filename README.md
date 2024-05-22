[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/saharascripters)

<a href="https://discord.gg/kQxzuyqnkR"><img src="https://discordapp.com/api/guilds/882172298059190282/widget.png?style=banner2" alt="Discord Server"></a>

# [NPWD] Weather App

External NPWD app for Weather Forecast.

## Description

`npwd_renewed_weather` is a script tailored for FiveM servers utilizing Renewed Weather Sync Script and NPWD as a phone resource, enabling players to conveniently access and check the weather forecast within the game."

## Dependencies

- [NPWD Phone](https://github.com/project-error/npwd)
- [Renewed Weather Sync](https://github.com/Renewed-Scripts/Renewed-Weathersync)

## Install

1. **Download** the `npwd_renewed_weather.zip` from releases. **DO NOT CHANGE THE RESOURCE NAME**. If you want to change it, you'll need to download the source code, alter `fetchNui.ts`, and build the project.
2. **Unzip** and add the resource to your server's resources folder.
3. **Ensure** `npwd_renewed_weather` **BEFORE** `npwd`.
4. **Add** the app to `NPWD`'s `config.json` in the apps section: `"apps": ["npwd_renewed_weather"]`.
5. **Open** `Renewed-Weathersync/server/weather.lua` and **Add** the following snippet.

```lua
exports('getWeatherList', function()
    return weatherList
end)
```

## Credits

- [Project Error](https://github.com/project-error/) for [NPWD App Template](https://github.com/project-error/npwd-app-template)
