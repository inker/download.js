"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function downloadUrl(title, url) {
    var a = document.createElement('a');
    a.href = url;
    a.download = title;
    a.click();
}
exports.downloadUrl = downloadUrl;
function downloadBlob(title, blob) {
    var url = URL.createObjectURL(blob);
    downloadUrl(title, url);
    URL.revokeObjectURL(url);
}
exports.downloadBlob = downloadBlob;
function downloadText(title, content) {
    downloadBlob(title, new Blob([content], { type: 'octet/stream' }));
}
exports.downloadText = downloadText;
//# sourceMappingURL=index.js.map