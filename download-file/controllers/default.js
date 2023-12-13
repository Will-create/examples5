exports.install = function() {
	ROUTE('GET /', file_download);
	ROUTE('GET /image/', image_download);
};

function file_download($) {
	$.file('totaljs.pdf', 'logo.pdf');
}

function image_download($) {
	$.req.image('slovakia.jpg', function(image) {
		image.resize('50%');
		image.minify();
	});
}