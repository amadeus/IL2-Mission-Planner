export default `<div id="target-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-map-marker modal-icon'></span> Point of Interest</h2>
    </div>
    <form onsubmit="return false;">
        <div class="row">
            <label class="" for="target-name">Name</label>
            <input id="target-name" class="half-width" value="{name}" placeholder="name"></input>
        </div>
        <div class="row">
            <label for="point-type-select">Type</label>
            <select class="u-full-width" id="point-type-select">
                
                <option value="point">Point (Legacy)</option>
                <option value="marker">Marker (Legacy)</option>
                <option value="target">Target (Legacy)</option>
                <option value="bomb-target">Bombing Target (Legacy)</option>
                <option value="combat">Combat (Legacy)</option>
                <option value="ground-combat">Ground Combat (Legacy)</option>
                <option value="takeoff">Takeoff (Legacy)</option>
                <option value="landing">Landing (Legacy)</option>
                <option value="base">Base (Legacy)</option>
                <option value="plane">Aircraft (Legacy)</option>

                <option value="stock-aircraft">Aircraft (Stock)</option>
                <option value="stock-bomber">Bomber (Stock)</option>
                <option value="stock-heavy-bomber">Heavy Bomber (Stock)</option>
                <option value="stock-anti-air">Anti-Air (Stock)</option>
                <option value="stock-artillery">Artillery (Stock)</option>
                <option value="stock-ship">Ship (Stock)</option>
                <option value="stock-tank">Tank (Stock)</option>
                <option value="stock-tanks">Tanks (Stock)</option>
                <option value="stock-truck">Truck (Stock)</option>
                <option value="stock-trucks">Trucks (Stock)</option>
                <option value="stock-train">Train (Stock)</option>
                <option value="stock-train-station">Train Station (Stock)</option>
                <option value="stock-encampment">Encampment (Stock)</option>
                <option value="stock-patrol">Patrol (Stock)</option>
                <option value="stock-waypoint">Waypoint (Stock)</option>
                <option value="stock-buildings">Buildings (Stock)</option>
                <option value="stock-bridge">Bridge (Stock)</option>
                <option value="stock-cargo">Cargo (Stock)</option>
                <option value="stock-cargo-drop">Cargo Drop (Stock)</option>
                <option value="stock-paratroopers">Paratroopers (Stock)</option>
                <option value="stock-aircraft-square">Aircraft Square (Stock)</option>
                <option value="stock-air-encounter">Air Encounter (Stock)</option>
                <option value="stock-large-air-encounter">Large Air Encounter (Stock)</option>
                <option value="stock-balloon">Balloon (Stock)</option>
                <option value="stock-v1-launch-site">V1 Launch Site (Stock)</option>
                <option value="stock-v1-missle">V1 Missle (Stock)</option>
                <option value="stock-plane-at-enemy-coast">Plane At Enemy Coast (Stock)</option>
                <option value="stock-bomber-at-enemy-coast">Bomber At Enemy Coast (Stock)</option>
                <option value="stock-plane-at-friendly-coast">Plane At Friendly Coast (Stock)</option>

                <option value="stock-ussr-plane-spawn">USSR Plane Spawn (Stock)</option>
                <option value="stock-british-plane-spawn">British Plane Spawn (Stock)</option>
                <option value="stock-usa-plane-spawn">USA Plane Spawn (Stock)</option>
                <option value="stock-german-plane-spawn">German Plane Spawn (Stock)</option>
                <option value="stock-italian-plane-spawn">Italian Plane Spawn (Stock)</option>
                <option value="stock-japanese-plane-spawn">Japanese Plane Spawn (Stock)</option>
                <option value="stock-fc-russia-plane-spawn">FC Russia Plane Spawn (Stock)</option>
                <option value="stock-fc-usa-plane-spawn">FC USA Plane Spawn (Stock)</option>
                <option value="stock-fc-britian-plane-spawn">FC Britian Plane Spawn (Stock)</option>
                <option value="stock-fc-germany-plane-spawn">FC Germany Plane Spawn (Stock)</option>
                <option value="stock-fc-france-plane-spawn">FC France Plane Spawn (Stock)</option>
                <option value="stock-fc-belgium-plane-spawn">FC Belgium Plane Spawn (Stock)</option>
                <option value="stock-fc-austria-hungary-plane-spawn">FC Austria Hungary Plane Spawn (Stock)</option>
                
                <option value="stock-ussr-tank-spawn">USSR Tank Spawn (Stock)</option>
                <option value="stock-british-tank-spawn">British Tank Spawn (Stock)</option>
                <option value="stock-usa-tank-spawn">USA Tank Spawn (Stock)</option>
                <option value="stock-german-tank-spawn">German Tank Spawn (Stock)</option>
                <option value="stock-italian-tank-spawn">Italian Tank Spawn (Stock)</option>
                <option value="stock-japanese-tank-spawn">Japanese Tank Spawn (Stock)</option>
                <option value="stock-fc-russia-tank-spawn">FC Russia Tank Spawn (Stock)</option>
                <option value="stock-fc-britian-tank-spawn">FC Britian Tank Spawn (Stock)</option>
                <option value="stock-fc-usa-tank-spawn">FC USA Tank Spawn (Stock)</option>
                <option value="stock-fc-germany-tank-spawn">FC Germany Tank Spawn (Stock)</option>
                <option value="stock-fc-france-tank-spawn">FC France Tank Spawn (Stock)</option>
                <option value="stock-fc-belgium-tank-spawn">FC Belgium Tank Spawn (Stock)</option>
                <option value="stock-fc-austria-hungary-tank-spawn">FC Austria Hungary Tank Spawn (Stock)</option>

                <option value="re-af">Airfield (Random Expert)</option>
                <option value="re-art">Artillery (Random Expert)</option>
                <option value="re-hq">Headquarters (Random Expert)</option>
                <option value="re-motorcade">Motorcade (Random Expert)</option>
                <option value="re-point-active">Active Point (Random Expert)</option>
                <option value="re-point">Point (Random Expert)</option>
                <option value="re-tanks">Tank (Random Expert)</option>
                <option value="re-warehouse">Warehouse (Random Expert)</option>
                <option value="re-fort">Fort (Random Expert)</option>

                <option value="taw-af">Airfield (TAW)</option>
                <option value="taw-arta">Artillery (TAW)</option>
                <option value="taw-bridge">Bridge (TAW)</option>
                <option value="taw-city">City (TAW)</option>
                <option value="taw-def">Defences (TAW)</option>
                <option value="taw-depo">Depot (TAW)</option>
                <option value="taw-supply">Supply (TAW)</option>
                <option value="taw-tank">Tank (TAW)</option>
                <option value="taw-train">Train (TAW)</option>
            </select>
        </div>
        <div class="row">
            <p>Note: Point is for appending information to flight plans.</p>
        </div>
        <div class="row">
            <label for="point-color-select">Color</label>
            <select class="u-full-width" id="point-color-select">
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select>
        </div>
        <div class="row">
            <p>Note: If a black icon is unavailable, it will default to blue.</p>
        </div>
        <div class="row">
            <label class="" for="target-notes">Notes (supports HTML tags)</label>
            <textarea id="target-notes" class="u-full-width" value="{notes}">{notes}</textarea>
        </div>
        <div class="row">
            <label class="" for="target-photo">Info Picture URL (Destination server must support HTTPS + CORS)</label>
            <input type="url" id="target-photo" class="u-full-width" value="{photo}">{photo}</input>
            <button class="modal-test-photo" type="button">Validate</button>
            <div id="photo-status-hidden" class="row hidden-section">
                <span id='checkmark' class='fa fa-check modal-icon'></span>
            </div>
        </div>
        <div class="row button-row">
            <button class="modal-ok button-primary" type="submit">Okay</button>
            <button class="modal-cancel" type="button">Cancel</button>
        </div>
    </form>
</div>`;
