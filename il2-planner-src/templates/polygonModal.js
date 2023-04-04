export default `<div id="polygon-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-star-o modal-icon'></span>Polygon color</h2>
    </div>
    <form onsubmit="return false;">
        <div class="row">
            <label for="polygonColor">Color</label>
            <select class="eleven columns" id="polygonColor">
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
            </select>
        </div>
        <div class="row">
            <div class="three columns">
                <label class="checkbox-label" for="polygon-fill-checkbox">Fill polygon?</label>
            </div>
            <div class="eight columns">
                <input id="polygon-fill-checkbox" name="polygon-fill-checkbox" type="checkbox" checked>
            </div>
        </div>
        <div class="row buttom-row">
            <button class="modal-ok button-primary" type="submit">Okay</button>
            <button class="modal-cancel" type="button">Cancel</button>
        </div>
    </form>
</div>`;
