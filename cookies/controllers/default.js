exports.install = function() {
	ROUTE('GET /get/', cookie_get);
	ROUTE('GET /set/', cookie_set);
};

function cookie_get($) {
	$.plain('Cookie example\nread test1: ' + ($.cookie('test1') || 'null') + '\nread test2: ' + ($.cookie('test2') || 'null'));
}

function cookie_set($) {

	$.cookie('test1', 'value 1', '2 days');
	$.cookie('test2', 'value 2', new Date().add('day', 1));

	// options.domain
	// options.path
	// options.secure
	// options.httponly
	// $.res.cookie(name, value, expire, [options]);

	// $.plain('Cookie example, write: ' + value);
	$.redirect('/get/');
}