export default `<div id="stream-modal" class="container">
    <div class="row">
        <h2><span class='fa fa-share-alt modal-icon'></span> Start Streaming</h2>
    </div>
    <div id="start-stream-error" class="row error-message hidden-section">
    </div>
    <form onsubmit="return false;">
        <div class="row">
            <div class="row">
                <label for="stream-name">Stream name</label>
                <input id="stream-name" class="half-width" placeholder="name" maxlength="32"></input>
            </div>
            <div class="row">
                <label for="stream-password">Password</label>
                <input id="stream-password" class="half-width" placeholder="password" maxlength="32"></input>
            </div>
            <div class="row">
                <label for="stream-leader-code">Leader code</label>
                <input id="stream-leader-code" class="half-width" placeholder="code" maxlength="32"></input>
            </div>
        </div>
        <div class="row buttom-row">
            <button id="stream-start-confirm-button" class="modal-ok button-primary" type="submit">Start Streaming</button>
            <button class="modal-cancel">Cancel</button>
        </div>
    </form>
</div>`;
