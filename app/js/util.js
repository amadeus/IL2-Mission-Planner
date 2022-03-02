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
                array.push(parseInt(val));
            }
            return array;
        },

        formatFlightLegMarker: function(distance, heading, speed, time, units) {
            units = units || 'metric';
            distance = typeof distance === 'number' ? distance.toFixed(1) : distance;
            heading = typeof heading === 'number' ? heading.toFixed(0) : heading;
            var textRotation = (heading % 180) - 90;
            return  '<div style="background: rgba(100, 100, 100, .75); transform: rotate(' + textRotation + 'deg);">' + 
                distance + UNIT_MAP[units].distance + ' | ' + 
                calc.pad(heading, 3) + '&deg;/' + 
                calc.pad(calc.invertHeading(heading), 3) +'&deg; <br/> ' + 
                speed + UNIT_MAP[units].speed + ' | ' + 
                'ETE ' + time + '</div>';
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

        bindPicture: function(url, layer) {
            var popupContent = document.createElement("img");
            popupContent.onload = function () {
                layer.update();
            };
            popupContent.src = url;
            popupContent.width = 700;
            layer.bindPopup(popupContent, {className: 'popup', maxWidth: "710px", closeButton: false});
        },

        validUrl: function(string) {
            var url = require('url');
            var result;
  
            try {
                result = url.parse(string);
            } catch (_) {
              return false;  
            }
          
            return result.protocol === "http:" || result.protocol === "https:";
        },

        buildGetXhr: function(url, updateFn) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = updateFn;
            xhr.send(null);
            return xhr;
        },
        
        buildGetBlobXhr: function(url, updateFn) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';
            xhr.onreadystatechange = updateFn;
            xhr.send();
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
        }, // End download function

        csvConvert: function(array) {
            var csv="";
            for (var i = 0; i < array.length; i++)
            {
                var row = array[i];
                // Row is the row of array at index "i"
                var string = "";
                // Empty string which will be added later
                for (var index in row) {
                    // Traversing each element in the row
                    var w = row[index];
                    // Adding the element at index "index" to the string
                    string += w;
                    if (index !== row.length - 1) {
                        string += ",";
                        // If the element is not the last element , then add a comma
                    }
                }
                string += "\n";
                // Adding next line at the end
                csv += string;
                // adding the string to the final string "csv"
            }
            return csv;
        },

        flightPlanPresent: function (layer) {
            var present = false;
            layer.eachLayer(function(e) {
                if ((e instanceof L.Polyline) && !(e instanceof L.Polygon)) {
                    if (e.isFlightPlan) {
                        present = true;
                    }
                }
            });
            return present;
        },

        offsetMarker: function (icon, offset) {
            var iconMarginTop = parseInt(icon.style.marginTop, 10) - offset,
                iconMarginLeft = parseInt(icon.style.marginLeft, 10) - offset;
    
            icon.style.marginTop = iconMarginTop + 'px';
            icon.style.marginLeft = iconMarginLeft + 'px';
        },
        
        // In the newer, modern tile scheme, this does a decent job of adjusting old mission plans
        fixOldLatLng: function(latLng, mapConfig, revision) {
            // Now check revision and update LatLngs if need be
            if ((typeof revision === 'undefined') || (revision < 2))
            {
                latLng.lat = latLng.lat - Math.abs(mapConfig.latMax - mapConfig.latMin);
            }
            return latLng;
        },

        fixOldLatLngs: function(latLngs, mapConfig, revision) {
            // Now check revision and update LatLngs if need be
            if ((typeof revision === 'undefined') || (revision < 2))
            {
                for (var i = 0; i < latLngs.length; i++)
                {
                    latLngs[i][0] = latLngs[i][0] - Math.abs(mapConfig.latMax - mapConfig.latMin);
                }
            }

            return latLngs;
        },

    };
})();
