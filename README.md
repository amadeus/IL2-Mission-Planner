# Il-2 Mission Planner Revived

Welcome to the IL2 Mission Planner Revived repository. This repository houses the code behind the Il-2 Mission Planner web based tool, a simple client-side javascript application based primarily on [Leaflet](http://leafletjs.com/).

Unlike the abandoned il2missionplanner.com project, this fork aims to remove the dependency on the API server (which only loses automatic JSON fetch functionality) and generally streamline installation for locally hosted setups based on my own working configuration (test server is currently private, sorry). Webdis/Redis will still be required if the application is built with streaming enabled (disable support TBD).

## Issues and Enhancements

If you'd like to report a bug or request an enhancement, please [open an issue](https://github.com/ServError/il2missionplanner.com/issues).

## Contributing

Interested in contributing to this tool? Feel free to fork the project and open a PR when you're ready to contribute back. The code is under the MIT license, so you can basically do whatever you like with it.

## Development Setup

Clone the repository. In the repository directory, run `npm ci` followed by `bower install` to fetch dependencies. Then run `npm run develop` and navigate to the dist index file in a web browser (e.g. `file:///path/to/dist/index.html`) to access the site.

## Setting up


