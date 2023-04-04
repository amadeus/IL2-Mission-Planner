export default `<div id="circle-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-circle modal-icon'></span>Circle color</h2>
    </div>
    <form onsubmit="return false;">
        <div class="row">
            <label for="circleColor">Color</label>
            <select class="eleven columns" id="circleColor">
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
            </select>
        </div>
        <div class="row">
            <div class="five columns">
                <label class="checkbox-label" for="circle-fill-checkbox">
                    Fill circle?
                </label>
            </div>
            <div class="seven columns">
                <input id="circle-fill-checkbox" name="circle-fill-checkbox" type="checkbox" checked>
            </div>
        </div>
        <div class="row buttom-row">
            <button class="modal-ok button-primary" type="submit">Okay</button>
            <button class="modal-cancel" type="button">Cancel</button>
        </div>
    </form>
</div>`;
