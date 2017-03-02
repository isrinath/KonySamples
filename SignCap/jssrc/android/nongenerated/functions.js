function onClickhboxSign() {
    kony.print("====> Device Info =" + JSON.stringify(kony.os.deviceInfo()));
    if (kony.string.equalsIgnoreCase("android", kony.os.deviceInfo().name)) {
        signatureFFI.getSignature(callbackBase);
    } else { //iPhone
        var strokeWidth = "2.0";
        var strokeColor = "#0F00F0";
        var showClearButon = true;
        var shakeToCancelEnabled = true;
        signatureFFI.getSignatureIphone("Customer Signature", strokeWidth, strokeColor, showClearButon, shakeToCancelEnabled, callbackBase);
    }
}

function reset() {
    frmOfflineSigCapture.imgSign.setVisibility(false);
    frmOfflineSigCapture.btnReset.setVisibility(false);
}

function callbackBase(base64String) {
    //showLoadingVA();
    //var myrawbytes = kony.convertToRawBytes(base64String);
    kony.print("!!! Inside callbackBase");
    //frmOfflineSigCapture.btnClearSignature.setVisibility (false);
    frmOfflineSigCapture.imgSign.base64 = base64String;
    kony.print("image src from widgewt =" + frmOfflineSigCapture.imgSign.base64);
    frmOfflineSigCapture.hboxClear.setVisibility(true);
    frmOfflineSigCapture.btnReset.setVisibility(true);
    frmOfflineSigCapture.imgSign.setVisibility(true);
    frmOfflineSigCapture.show();
    kony.print("btnReset visibility =" + frmOfflineSigCapture.btnReset.isVisible);
    kony.print("hboxClear visibility =" + frmOfflineSigCapture.hboxClear.isVisible);
    kony.print("EXITING");
}