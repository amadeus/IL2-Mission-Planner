# Il-2 Mission Planner Revived

Welcome to the IL2 Mission Planner Revived repository. This repository houses the code behind the Il-2 Mission Planner web based tool, a simple client-side javascript application based primarily on [Leaflet](http://leafletjs.com/).

Unlike the abandoned il2missionplanner.com project, this fork aims to make optional the dependency on the Streaming and API servers (the latter of which only loses automatic JSON fetch functionality) and generally streamline installation for locally hosted setups based on my own working configuration (test server is currently private, sorry). Streaming (AKA live plan sharing) can optionally be enabled but requires the use of redis and webdis as a backend.

## Issues and Enhancements

If you'd like to report a bug or request an enhancement, please [open an issue](https://github.com/ServError/il2missionplanner.com/issues).

## Contributing

Interested in contributing to this tool? Feel free to fork the project and open a PR when you're ready to contribute back. The code is under the MIT license, so you can basically do whatever you like with it.

## Development Setup

Clone the repository. In the repository directory, run `npm ci` followed by `bower install` to fetch dependencies. Then run `npm run develop` and navigate to the dist index file in a web browser (e.g. `file:///path/to/dist/index.html`) to access the site.

## Setting up

Clone the repository. In the repository directory, run `npm ci` followed by `bower install` to fetch dependencies. Edit conf/conf.json to match your desired setup. I recommend starting with the defaults (streaming false and api set to none) and just substituting in your domain name. Run `npm run dist` to generate the files to push to your web server and then fetch the tiles from the 'dist' folder of [the tiles repo](https://github.com/ServError/tiles.il2missionplanner.com) and drop them into your webserver root (unless you configured otherwise). This last step will be automated at some point soon.

### Streaming

Use your package manager to download redis and webdis. Head to [the stream repo](https://github.com/ServError/stream.il2missionplanner.com) and grab the load_scripts.sh and contents of the lua folder. Nothing else in that repo is especially necessary, and I believe the stock redis and webdis configs are fine for our purposes. Make sure redis and webdis are configured to start on boot and check for failures (I needed a delay after the redis start or webdis complained) then edit the webdis service file to execute the load_scripts.sh script as a POSTEXEC and make sure it can see the lua files.

Now configure your web host of choice to reverse proxy the webdis commands on their port. I sent them to a WEBDIS subfolder for ease of integration with the map server.

### API Server

You're mostly on your own here. It's not too hard to get the docker running, and after that you'd need to direct traffic between it and your map server. You may need to tweak your dockerhub images to something more recent or compatible with your server's architecture. I personally found it not worth it for the minimal functionality, and may reimplement it in a different way down the road.
