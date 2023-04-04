export default `<div id="gridhop-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-th-large modal-icon'></span> Jump to Grid</h2>
    </div>
    <div id="grid-jump-error" class="row error-message hidden-section">
    </div>
    <form name="grid-jump-form" id="grid-jump-form" onsubmit="return false;">
        <div class="modal-item row">
            <label class="modal-item-label" for="grid-input">Grid</label>
            <input id="grid-input" name="grid-input" class="modal-item-input" placeholder="0000" maxlength="4"></input>
        </div>
        <div class="row buttom-row">
            <button class="modal-ok button-primary" type="submit">Okay</button>
            <button class="modal-cancel" type="button">Cancel</button>
        </div>
    </form>
</div>`;
