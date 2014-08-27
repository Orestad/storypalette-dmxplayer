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
### With launchd

Edit ...

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
