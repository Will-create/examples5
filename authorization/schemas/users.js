NEWSCHEMA('Users', function(schema) {
	// Performs login
	schema.action('login', {
		name: 'Login',
		input: '*email:Email,*password:String(30)',
		action: function($, model){
			var builder = DATA.one('nosql/users');
			builder.where('email', model.email);
			builder.where('password', model.password);
			builder.callback(function(err, user) {
				if (!user) {
					$.invalid('error-users-404');
					return;
				}
	
				// Creates a cookie and session item
				MAIN.session.authcookie($, UID(), user.id, '3 days');
	
				// Writes audit
				$.audit(user.id + ': ' + user.name);
				$.success();
			});
		}
	});

	// Performs logout
	schema.action('logout', {
		name: 'Logout',
		action: function($) {

		// Removes session
		MAIN.session.logout($);

		// Performs a redirect
		$.redirect('/');
		}
	});
});