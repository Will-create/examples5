const Fs = require('fs');

exports.install = function() {

	// Flow
	ROUTE('+GET     /api/flow/components/', flow_components);
	ROUTE('+POST    /api/flow/', flow_save);
	ROUTE('+GET     /api/flow/', flow_read);

	// Dashboard
	ROUTE('+GET     /api/dashboard/components/', dashboard_components);
	ROUTE('+GET     /api/dashboard/flow/', dashboard_flow);
	ROUTE('+POST    /api/dashboard/', dashboard_save);
	ROUTE('+GET     /api/dashboard/', dashboard_read);

	// Socket
	ROUTE('+SOCKET  /', socket, ['json']);

	// Static files
	FILE('/dashboard/*.html', dashboard_component);
};

function notify($) {
	var msg = $.params.msg;
	var arr = FLOW.instance.instances();
	arr.wait(function(com, next) {
		com[msg.TYPE] && com[msg.TYPE](msg);
		setImmediate(next);
	}, 3);
}

function socket($) {

	var timeout;

	MAIN.ws = $;

	$.autodestroy(() => MAIN.ws = null);

	var refreshstatus = function() {

		timeout = null;
		var arr = FLOW.instance.instances();

		// Sends last statuses
		arr.wait(function(com, next) {
			com.status();
			setImmediate(next);
		}, 3);

	};

	$.on('open', function() {
		timeout && clearTimeout(timeout);
		timeout = setTimeout(refreshstatus, 1500);
	});

	$.on('message', function(client, message) {
		switch (message.TYPE) {
			case 'dashboard':
			case 'status':
			case 'trigger':
				notify(message);
				break;
		}
	});
}

function flow_components($) {
	$.json(FLOW.instance.components(true));
}

function flow_save($) {
	FLOW.save($.req.bodydata);
	FLOW.instance.use($.body);
	$.success();
}

function flow_read($) {
	FLOW.json($);
}

function dashboard_components($) {
	Fs.readdir(PATH.databases('dashboard'), function(err, response) {

		var output = [];
		for (var i = 0; i < response.length; i++) {
			var item = response[i];
			if ((/\.html$/).test(item))
				output.push(item);
		}

		$.json(output);
	});
}

function dashboard_flow($) {
	$.json(FLOW.dashboard());
}

function dashboard_save($) {
	Fs.writeFile(PATH.databases('dashboard.json'), $.req.bodydata, ERROR('dashboard_save'));
	$.success();
}

function dashboard_read($) {
	Fs.readFile(PATH.databases('dashboard.json'), function(err, response) {
		if (response)
			$.binary(response, 'application/json');
		else
			$.json([]);
	});
}

function dashboard_component($) {
	$.file(PATH.databases('dashboard/' + $.split[1]));
}