module.exports = (function() {

    var fs = require('fs');

    var conf = JSON.parse(fs.readFileSync('dist/conf.json', 'utf8'));

    var mapConfigs = {
        stalingrad: {
            fullName: 'Stalingrad',
            name: 'stalingrad',
            hash: '#stalingrad',
            selectIndex: 0,
            scale: 1.40056,
            latMin: -164.2,
            latMax: 0,
            latGridMax: 23,
            lngMin: 0,
            lngMax: 256,
            lngGridMax: 35.8512,
            gridHopZoom: 5,
            defaultZoom: 3,
            minZoom: 2,
            maxZoom: 6,
            tileUrl: conf.tilesUrl + '/stalingrad/{z}/{x}/{y}.png'
            //tileUrl: 'file:///Users/fkc930/Development/personal/tiles.il2missionplanner.com/dist/stalingrad/{z}/{x}/{y}.png'
        },
        moscow: {
            fullName: 'Moscow',
            name: 'moscow',
            hash: '#moscow',
            selectIndex: 1,
            scale: 1.46621,
            latMin: -192,
            latMax: 0,
            latGridMax: 28.1697,
            lngMin: 0,
            lngMax: 192,
            lngGridMax: 28.1697,
            gridHopZoom: 5,
            defaultZoom: 3,
            minZoom: 2,
            maxZoom: 6,
            tileUrl: conf.tilesUrl + '/moscow/{z}/{x}/{y}.png'
            //tileUrl: 'file:///Users/fkc930/Development/personal/tiles.il2missionplanner.com/dist/moscow/{z}/{x}/{y}.png'
        },
        luki: {
            fullName: 'Velikie Luki',
            name: 'luki',
            hash: '#luki',
            selectIndex: 2,
            scale: 0.65306,
            latMin: -160,
            latMax: 0,
            latGridMax: 10.4510,
            lngMin: 0,
            lngMax: 256,
            lngGridMax: 16.7204,
            gridHopZoom: 4,
            defaultZoom: 3,
            minZoom: 2,
            maxZoom: 6,
            tileUrl: conf.tilesUrl + '/luki/{z}/{x}/{y}.png'
            //tileUrl: 'file:///Users/fkc930/Development/personal/tiles.il2missionplanner.com/dist/luki/{z}/{x}/{y}.png'
        },
        kuban: {
            fullName: 'Kuban',
            name: 'kuban',
            hash: '#kuban',
            selectIndex: 3,
            scale: 2.876397232,
            latMin: -99.94,
            latMax: 0,
            latGridMax: 28.8086,
            lngMin: 0,
            lngMax: 144.34,
            lngGridMax: 41.6104,
            gridHopZoom: 6,
            defaultZoom: 4,
            minZoom: 2,
            maxZoom: 7,
            tileUrl: conf.tilesUrl + '/kuban/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/kuban/{z}/{x}/{y}.png'
        },
        rheinland: {
            fullName: 'Rheinland',
            name: 'rheinland',
            hash: '#rheinland',
            selectIndex: 4,
            scale: 2.876397232,
            latMin: -112.55,
            latMax: 0,
            latGridMax: 32.4437,
            lngMin: 0,
            lngMax: 139.21,
            lngGridMax: 40.1306,
            gridHopZoom: 6,
            defaultZoom: 4,
            minZoom: 2,
            maxZoom: 7,
            tileUrl: conf.tilesUrl + '/rheinland/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/rheinland/{z}/{x}/{y}.png'
        },
        arras: {
            fullName: 'Arras',
            name: 'arras',
            hash: '#arras',
            selectIndex: 5,
            scale: 0.7191,
            latMin: -163.7,
            latMax: 0,
            latGridMax: 11.7973,
            lngMin: 0,
            lngMax: 163.7,
            lngGridMax: 11.7973,
            gridHopZoom: 5,
            defaultZoom: 3,
            minZoom: 3,
            maxZoom: 5,
            tileUrl: conf.tilesUrl + '/arras/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/arras/{z}/{x}/{y}.png'
        },
        prokhorovka: {
            fullName: 'Prokhorovka',
            name: 'prokhorovka',
            hash: '#prokhorovka',
            selectIndex: 6,
            scale: 0.6491,
            latMin: -163.7,
            latMax: 0,
            latGridMax: 10.6484,
            lngMin: 0,
            lngMax: 163.7,
            lngGridMax: 10.6484,
            gridHopZoom: 5,
            defaultZoom: 4,
            minZoom: 3,
            maxZoom: 6,
            tileUrl: conf.tilesUrl + '/prokhorovka/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/prokhorovka/{z}/{x}/{y}.png'
        },
        normandy: {
            fullName: 'Normandy',
            name: 'normandy',
            hash: '#normandy',
            selectIndex: 7,
            scale: 2.48099,
            latMin: -139.87,
            latMax: 0,
            latGridMax: 34.6957,
            lngMin: 0,
            lngMax: 125.51,
            lngGridMax: 31.1337,
            gridHopZoom: 6,
            defaultZoom: 3,
            minZoom: 2,
            maxZoom: 7,
            tileUrl: conf.tilesUrl + '/normandy/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/normandy/{z}/{x}/{y}.png'
        },
        normandy_early: {
            fullName: 'Normandy_Early',
            name: 'normandy_early',
            hash: '#normandy_early',
            selectIndex: 8,
            scale: 2.48099,
            latMin: -139.87,
            latMax: 0,
            latGridMax: 34.6957,
            lngMin: 0,
            lngMax: 125.51,
            lngGridMax: 31.1337,
            gridHopZoom: 6,
            defaultZoom: 3,
            minZoom: 2,
            maxZoom: 7,
            tileUrl: conf.tilesUrl + '/normandy-early/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/normandy-early/{z}/{x}/{y}.png'
        },
        lapino: {
            fullName: 'Lapino',
            name: 'lapino',
            hash: '#lapino',
            selectIndex: 9,
            scale: 0.2,
            latMin: -260,
            latMax: 0,
            latGridMax: 5.1225,
            lngMin: 0,
            lngMax: 260,
            lngGridMax: 5.1225,
            gridHopZoom: 3,
            defaultZoom: 3,
            minZoom: 2,
            maxZoom: 3,
            tileUrl: conf.tilesUrl + '/lapino/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/lapino/{z}/{x}/{y}.png'
        },
        novosokolniki: {
            fullName: 'Novosokolniki',
            name: 'novosokolniki',
            hash: '#novosokolniki',
            selectIndex: 10,
            scale: 0.2,
            latMin: -260,
            latMax: 0,
            latGridMax: 5.1225,
            lngMin: 0,
            lngMax: 260,
            lngGridMax: 5.1225,
            gridHopZoom: 3,
            defaultZoom: 3,
            minZoom: 2,
            maxZoom: 3,
            tileUrl: conf.tilesUrl + '/novosokolniki/{z}/{x}/{y}.png'
            //tileUrl: 'http://localhost:5001/novosokolniki/{z}/{x}/{y}.png'
        }
    };

    var defaults = {
      flightName: 'New Flight',
      flightSpeed: 300,
      flightAltitude: 1000,
      flightColor: 'red',
      pointType: 'marker',
      pointColor: 'red',
      pointName: 'New Marker',
      circleColor: 'red',
      polygonColor: 'red'
    };

    var validatinatorConfig = {
        'grid-jump-form': {
            'grid-input': 'digitsLength:4'
        },
        'flight-leg-form': {
            'flight-leg-speed': 'between:0,9999'
        },
        'connect-form': {
            'stream-password': 'required',
            'stream-code': 'requiredIf:leader-checkbox:checked'
        }
    };

    return {
        maps: mapConfigs,
        default: defaults,
        validatinatorConfig: validatinatorConfig,
        titleText: 'IL-2 Mission Planner <a href="https://github.com/ServError/il2missionplanner.com">Revived</a>',
        helpTooltip: 'How to use this tool',
        clearTooltip: 'Clear the map',
        exportTooltip: 'Export mission plan',
        importTooltip: 'Import mission plan',
        exportCSVTooltip: 'Export Flight Plans to CSV file',
        summaryTooltip: 'View summary of flight plans',
        gridHopTooltip: 'Jump to grid',
        missionHopTooltip: 'Jump to mission',
        settingsTooltip: 'Settings',
        streamTooltip: (conf.streaming === true) ? 'Stream mission plan' : 'Streaming disabled on this server',
        flightModalTemplate: fs.readFileSync('app/html/flightModal.html', 'utf8'),
        flightTurnModalTemplate: fs.readFileSync('app/html/flightTurnModal.html', 'utf8'),
        flightLegModalTemplate: fs.readFileSync('app/html/flightLegModal.html', 'utf8'),
        flightSummaryModalTemplate: fs.readFileSync('app/html/flightSummaryModal.html', 'utf8'),
        circleModalTemplate: fs.readFileSync('app/html/circleModal.html', 'utf8'),
        polygonModalTemplate: fs.readFileSync('app/html/polygonModal.html', 'utf8'),
        confirmClearModalTemplate: fs.readFileSync('app/html/confirmClearModal.html', 'utf8'),
        helpModalTemplate: fs.readFileSync('app/html/helpModal.html', 'utf8'),
        pointModalTemplate: fs.readFileSync('app/html/pointModal.html', 'utf8'),
        importModalTemplate: fs.readFileSync('app/html/importModal.html', 'utf8'),
        gridJumpModalTemplate: fs.readFileSync('app/html/gridJumpModal.html', 'utf8'),
        settingsModalTemplate: fs.readFileSync('app/html/settingsModal.html', 'utf8'),
        streamModalTemplate: fs.readFileSync('app/html/streamModal.html', 'utf8'),
        startStreamModalTemplate: fs.readFileSync('app/html/startStreamModal.html', 'utf8'),
        connectStreamModalTemplate: fs.readFileSync('app/html/connectStreamModal.html', 'utf8'),
        alreadyConnectedModalTemplate: fs.readFileSync('app/html/alreadyConnectedModal.html', 'utf8'),
        alreadyStreamingModalTemplate: fs.readFileSync('app/html/alreadyStreamingModal.html', 'utf8')
    };
})();
