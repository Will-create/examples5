var counter = 0;

exports.install = function() {

	// route index
	ROUTE('GET /', view_homepage);

	// file route
	ROUTE('FILE /*.pdf', file_download);
};

function view_homepage($) {
	$.plain($.hostname('/totaljs.pdf') + '\n\nDownload count: ' + counter);
}

function file_download($) {

	var filename = U.getName($.url);

	counter++;

	// response file
	$.file(PATH.public(filename), filename);
}