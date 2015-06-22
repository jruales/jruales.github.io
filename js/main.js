var source   = $("#page-template").html();
var template = Handlebars.compile(source);
$("#main").html(template(context))
