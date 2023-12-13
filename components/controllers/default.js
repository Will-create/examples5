exports.install = function() {
	ROUTE('GET /', view_index);
};

function view_index($) {
	$.view('index', { name: 'Peter', email: 'petersirka@gmail.com' });
}