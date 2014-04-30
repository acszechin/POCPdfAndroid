var exec = require('cordova/exec');

exports.openPDF = function(path) {
    exec(null, function(){console.log("erro");}, "MuPDFViewer", "openPDF", [ { fileName: path } ]);
};
