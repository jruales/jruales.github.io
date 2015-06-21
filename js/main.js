var source   = $("#page-template").html();
var template = Handlebars.compile(source);
$(document.body).prepend(template(context))
