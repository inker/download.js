"use strict";
function download(title, dataURL) {
    var a = document.createElement('a');
    a.href = dataURL;
    a.download = title;
    a.click();
}
function downloadBlob(title, blob) {
    var url = URL.createObjectURL(blob);
    download(title, url);
    URL.revokeObjectURL(url);
}
exports.downloadBlob = downloadBlob;
function downloadText(title, content) {
    downloadBlob(title, new Blob([content], { type: 'octet/stream' }));
}
exports.downloadText = downloadText;
//# sourceMappingURL=download.js.map