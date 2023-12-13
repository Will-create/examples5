exports.install = function() {

	// Main routes
	ROUTE('GET  / @authorize', view_logged);
	ROUTE('GET  / @unauthorize', view_unlogged);

	// Operations are defined in /schemas/users.js
	ROUTE('POST /login/  @unauthorize    --> Users/login');
	ROUTE('GET  /logout/ @authorize      --> Users/logout');

};

function view_logged($) {
	$.plain('You are logged as {0}. To unlogged remove cookie __user or click http://{1}:{2}/logout/'.format($.user.email, F.ip, F.port));
}

function view_unlogged($) {
	$.view('homepage', { email: '@' });
}