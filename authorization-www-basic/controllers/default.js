exports.install = function() {
	ROUTE('GET /', auth);
};

function auth($) {

	var auth = $.baa();

	// "baa" means "B"asic "A"ccess "A"uthentication

	if (auth.empty) {
		$.baa('This is secured area');
		// It sends the response automatically.
		return;
	}

	if (auth.user !== 'totaljs' || auth.password !== '123456') {
		$.baa('Wrong credentials, this is secured area:');
		// or $.view401();
		return;
	}

	$.plain('You are authorized.');
}