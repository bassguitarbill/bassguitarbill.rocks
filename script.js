$(document).ready(function(){
	loadWidgets();
});

function loadWidgets() {
	$.get("widgets.json", processWidgets);
}

function processWidgets(data){
	var widgets = data
		.map(function(w){return new Widget(w).generateElement()})
		.forEach(function(w){$('.container').append(w)});
}

function Widget(descriptor){
	var d = descriptor;
	this.url = d.url;
	this.name = d.name;
	this.title = d.title;
	this.desc = d.description;
	this.titleColor = d.color.title;
	this.textColor = d.color.text;
	this.bgColor = d.color.background;
}

Widget.prototype.generateElement = function() {
	return $(document.createElement('a')).attr('href',this.url)
	.append(
		$(document.createElement('div')).addClass('thing').css("background-color",this.bgColor).attr('id',this.name)
		.append(
			$(document.createElement('p')).addClass('title').text(this.title).css("color",this.titleColor))
		.append(
			$(document.createElement('p')).addClass('description').text(this.desc).css("color",this.textColor))
	)
	
}