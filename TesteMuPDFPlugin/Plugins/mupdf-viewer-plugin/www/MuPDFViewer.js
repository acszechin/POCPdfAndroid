var exec = require('cordova/exec');

exports.openPDF = function(path, password) {
    exec(null, function(){console.log("erro");}, "MuPDFViewer", "openPDF", [ { fileName: path, pass: password } ]);
};
