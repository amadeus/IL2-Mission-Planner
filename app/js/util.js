module.exports = (function() {

    var calc = require('./calc.js');

    const UNIT_MAP = {
        metric: {
            distance: 'km',
            speed: 'kph',
            altitude: 'm',
        },
        imperial: {
            distance: 'mi',
            speed: 'mph',
            altitude: 'ft',
        }
    };

    return {

        formatTime: function(timeInSeconds) {
            var minutes = timeInSeconds / 60;
            var seconds = timeInSeconds % 60;
            return Math.floor(minutes).toFixed(0) + ':' + calc.pad(seconds, 2);
        },

        isAvailableMapHash: function(hash, maps) {
            for (var map in maps) {
                if (maps[map].hash === hash) {
                    return true;
                }
            }
            return false;
        },

        getSelectedMapConfig: function(hash, maps) {
            for (var map in maps) {
                if (maps[map].hash === hash) {
                    return maps[map];
                }
            }
            return maps.stalingrad;
        },

        defaultPopulateArray: function(val, count) {
            var array = [];
            for (var i = 0; i < count; i++) {
                array.push(val);
            }
            return array;
        },

        formatFlightLegMarker: function(distance, heading, speed, time, units) {
            units = units || 'metric';
            distance = typeof distance === 'number' ? distance.toFixed(1) : distance;
            heading = typeof heading === 'number' ? heading.toFixed(0) : heading;
            return  distance + UNIT_MAP[units].distance + ' | ' + 
                calc.pad(heading, 3) + '&deg;/' + 
                calc.pad(calc.invertHeading(heading), 3) +'&deg; <br/> ' + 
                speed + UNIT_MAP[units].speed + ' | ' + 
                'ETE ' + time;
        },

        formatFlightStartMarker: function(name, altitude, units) {
            units = units || 'metric';
            return  name + '<br />' +
                altitude + UNIT_MAP[units].altitude;
        },
        
        formatFlightTurnMarker: function(altitude, units) {
            units = units || 'metric';
            return Math.round(altitude) + UNIT_MAP[units].altitude;
        },

        isLine: function(layer) {
            return typeof layer.getLatLngs !== 'undefined';
        },

        isCircle: function(layer) {
            return typeof layer.getBounds !== 'undefined';
        },

        isPolygon: function(layer) { // Always check polygon before polyline
            return typeof layer.options.isPolygon !== 'undefined';
        },

        isMarker: function(layer) {
            return typeof layer.getLatLng !== 'undefined';
        },

        buildGetXhr: function(url, updateFn) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = updateFn;
            xhr.send(null);
            return xhr;
        },

        buildSyncGetXhr: function(url) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send(null);
            return xhr;
        },

        // Class functions taken from here: http://jaketrent.com/post/addremove-classes-raw-javascript/
        hasClass: function(el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
            }
        },

        addClass: function(el, className) {
            if (el.classList) {
                el.classList.add(className);
            } else if (!this.hasClass(el, className)) {
                el.className += " " + className;
            }
        },

        removeClass: function(el, className) {
            if (el.classList) {
                el.classList.remove(className);
            } else if (this.hasClass(el, className)) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                el.className=el.className.replace(reg, ' ');
            }
        },
        // End class functions

        // Download function taken from here https://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file
        download: function(filename, text) {
            var pom = document.createElement('a');
            pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            pom.setAttribute('download', filename);

            if (document.createEvent) {
                var event = document.createEvent('MouseEvents');
                event.initEvent('click', true, true);
                pom.dispatchEvent(event);
            }
            else {
                pom.click();
            }
        }
        // End download function

    };
})();
