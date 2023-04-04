export default `<div id="confirm-clear-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-trash modal-icon'></span> Clear the map</h2>
    </div>
    <div class="row">
        <p>
            Are you sure? This action cannot be undone.
        </p>
    </div>
    <form onsubmit="return false;">
        <div class="row buttom-row">
            <button id="confirm-cancel-button" class="modal-ok button-primary" type="submit">Okay</button>
            <button class="modal-cancel">Cancel</button>
        </div>
    </form>
</div>`;
