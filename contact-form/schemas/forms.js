NEWSCHEMA('ContactForms', function(schema) {

	schema.action('save', {
		name: 'Save',
		input: 'fileid:UID,*email:Email,phone:Phone,*message:Sting(10000)',
		action: function ($, model) {

			// Extends model
			model.dtcreated = NOW;
			model.ip = $.ip;
			model.ua = ($.headers['user-agent'] || '').parseUA();

			DATA.insert('nosql/contactforms', model);

			// var mail = MAIL(....);
			// model.fileid && mail.attachmentfs('files', model.fileid);

			$.success();
		}
	});
});