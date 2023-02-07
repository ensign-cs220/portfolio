function downloadFile(filePath) {
    const a = document.createElement('a');
    a.href = filePath;
    a.download = 'Izzy Mansurov resume';
    a.click();
}

window.downloadFile = downloadFile;
