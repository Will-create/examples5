exports.install = function() {
	ROUTE('GET /',      view_homepage);
	ROUTE('GET /mail/', redirect_mail);
};

function view_homepage($) {
	$.view('homepage');
}

function redirect_mail($) {

	// This function automatically reads view: email.html
	MAIL('louisbertson@gmail.com', 'Test e-mail', 'email', { name: 'MODEL NAME' });

	$.redirect('/?success=1');
}
