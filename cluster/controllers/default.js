exports.install = function() {
	ROUTE('GET /', view_homepage);
};

function view_homepage($) {
	console.log('Responded: ' + F.id);
	$.view('homepage');
}