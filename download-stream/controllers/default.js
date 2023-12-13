var Fs = require('fs');

exports.install = function() {
	ROUTE('GET /', file_download);
};

function file_download($) {
	$.stream('application/pdf', Fs.createReadStream(PATH.public('totaljs.pdf')), 'logo.pdf');
}