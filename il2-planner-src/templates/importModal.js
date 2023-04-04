export default `<div id="import-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-upload modal-icon'></span> Import Mission</h2>
    </div>
    <form onsubmit="return false;">
        <div class="row">
            <input id="import-file" type="file" name="importFile"></input>
        </div>
        <div class="row">
            <div class="five columns">
                <label class="checkbox-label" for="merge-checkbox">Merge to current mission: (Must use same map)</label>
            </div>
            <div class="two columns">
                <input id="merge-checkbox" name="merge-checkbox" type="checkbox">
            </div>
        </div>
        <div class="row buttom-row">
            <button id="import-button" class="modal-ok button-primary" type="submit">Import</button>
            <button class="modal-cancel">Cancel</button>
        </div>
    </form>
</div>`;
