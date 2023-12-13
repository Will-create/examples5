exports.install = function() {
	ROUTE('GET /', view_homepage);
};

function view_homepage($) {
	// look to homepage.html

	$.header('X-XSS-Protection', '1; mode=block');
	$.view('homepage');
}