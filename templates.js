TableRows = function(object) {
	this.type = object["type"];
	this.path = object["path"];
	this.viewFile = object["viewFile"];
	this.description = object["description"];
	this.vanilla = object["vanilla"];
	this.suggested = object["suggested"];
}

TableRows.prototype.createRows = function() {

	var html = "<tr class='route'><td>" + this.type + "</td><td>" + this.path + "</td><td>" + this.viewFile + "</td><td>" + this.description + "</td></tr><tr class='route-info'><td colspan='2'><span class='temp-header'>Path Template:</span><pre class='route-pre'>" + this.vanilla + "</pre><div class='copy-prompt'>^click to copy^</div></td><td colspan='2'><span class='temp-header'>Suggestions:</span><span class='header-caption'> (to be taken with a grain of salt)</span><pre class='route-pre'>" + this.suggested + "</pre><div class='copy-prompt'>^click to copy^</div></td></tr>"

	return html
}


routes = [
	{ 
	  	"type" : "GET",

	  	"path" : "'/<span class='golden-text'>articles</span>'",

	  	"viewFile" : "'/<span class='golden-text'>articles</span>/index'",

	  	"description" : "display a list of all <span class='golden-text'>articles</span>",

	 		"vanilla" : "\nget '/articles' do\n\n  #your code here\n\nend\n",

			"suggested" : "\nget '/<span class='golden-text'>articles</span>' do\n\n  @<span class='golden-text'>articles</span> = <span class='g-text-singular'>Article</span>.all #define instance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/index' #shows all <span class='golden-text'>articles</span> view (index)\n\nend"
	  }
]

for (var i = 0; i < routes.length; i++) {
	var row = new TableRows(routes[i])
	console.log(row.createRows())
}




