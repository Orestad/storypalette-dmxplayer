# storypalette-dmxplayer

> Standalone nodejs dmxplayer. Gets its data from storypalette-player.

## Installing

### Prerequisites 

- node.js

```sh
sudo npm install -g grunt-cli
```

### Clone and build

```sh
git clone https://github.com/storypalette/storypalette-dmxplayer.git
cd storypalette-dmxplayer
npm install dmxpro
```

## Running

### For testing
```sh
NODE_ENV=production dmxplayer.js
```
### Configure launchd autostart

```sh
sudo cp extras/org.nodejs.noded.plist /Library/LaunchDaemons
# Edit the plist file for current user.
vim /Library/LaunchDaemons
sudo launchctl load -w /Library/LaunchDaemons/org.nodejs.noded.plist
```

If you have changed plist file you may need to reload the plist file:
```sh
launchctl unload -w /Library/LaunchDaemons/org.nodejs.noded.plist
sudo launchctl load -w /Library/LaunchDaemons/org.nodejs.noded.plist
```
Logs are saved here:
`/Users/USER/Documents/nodejs.log`

## Developing
```sh
grunt serve
```

You may want to edit /etc/hosts for local development:

```
127.0.0.1 api.storypalette.dev
127.0.0.1 editor.storypalette.dev
127.0.0.1 player.storypalette.dev
127.0.0.1 performer.storypalette.dev
127.0.0.1 storypalette.dev
```
