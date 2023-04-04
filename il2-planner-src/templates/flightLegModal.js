export default `<div id="flight-leg-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-plane modal-icon'></span> Flight Leg</h2>
    </div>
    <div id="flight-leg-error" class="row error-message hidden-section">
    </div>
    <form name="flight-leg-form" id="flight-leg-form" onsubmit="return false;">
        <div class="row">
            <label class="" for="flight-speed">Speed (kph/mph)</label>
            <input id="flight-leg-speed" name="flight-leg-speed" class="half-width" value="{speed}"></input>
        </div>
        <div class="row buttom-row">
            <button class="modal-ok button-primary" type="submit">Okay</button>
            <button class="modal-cancel" type="button">Cancel</button>
        </div>
    </form>
</div>`;
