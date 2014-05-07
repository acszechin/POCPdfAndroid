var exec = require('cordova/exec');

exports.openPDF = function(path, password) {
    if(device.platform === 'Android' || device.platform === 'android'){
        exec(null, null, "PDFViewer", "openPDF", [ { fileName: path, pass: password } ]);
        
    }else{
        exec(null, function(){console.log("Erro plugin de pdf!");}, 'PDFViewer', 'showPDF',[path, password]);
    }
 };
