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

	 	"vanilla" : "\nget '/<span class='golden-text'>articles</span>' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>' do\n\n  @<span class='golden-text'>articles</span> = <span class='g-text-singular'>Article</span>.all #define instance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/index' #shows all <span class='golden-text'>articles</span> view (index)\n\nend\n"
	},
	{
		"type" : "GET",

  		"path" : "'/<span class='golden-text'>articles</span>/new'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/new'",

  		"description" : "return an HTML form for creating new  <span class='golden-text'>articles</span>",

 		"vanilla" : "\nget'/<span class='golden-text'>articles</span>/new' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/new' do\n\n  erb :'<span class='golden-text'>articles</span>/new' #shows view with new <span class='golden-text'>articles</span> form\n\nend\n"
	},
	{
		"type" : "POST",

  		"path" : "'/<span class='golden-text'>articles</span>'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/create'",

  		"description" : "create new <span class='golden-text'>articles</span>",

 		"vanilla" : "\npost '/<span class='golden-text'>articles</span>' do\n\n  #your code here\n\nend\n",

		"suggested" : "\npost '/<span class='golden-text'>articles</span>' do\n\n  #below works with properly formatted params in html form\n  @<span class='g-text-s-dc'>article</span> = <span class='g-text-singular'>Article</span>.new(params[:<span class='g-text-s-dc'>article</span>]) #create new <span class='g-text-s-dc'>article</span>\n\n  if @<span class='g-text-s-dc'>article</span>.save #saves new <span class='g-text-s-dc'>article</span> or returns false if unsuccessful\n    redirect '/<span class='golden-text'>articles</span>' #links back to <span class='golden-text'>articles</span> index page\n  else\n    erb :errors #shows an errors view you define\n  end\n\nend\n"
	},
	{
		"type" : "GET",

  		"path" : "'/<span class='golden-text'>articles</span>/:id'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/show'",

  		"description" : "display specific <span class='golden-text'>articles</span>",

 		"vanilla" : "\nget '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/:id' do\n\n  #gets params from url\n\n  @<span class='g-text-s-dc'>article</span> = <span class='g-text-singular'>Article</span>.find(params[:id]) #define instance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/show' #shows single <span class='g-text-s-dc'>article</span> view\n\nend\n"
	},
	{
		"type" : "GET",

  		"path" : "'/<span class='golden-text'>articles</span>/:id/edit'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/edit'",

  		"description" : "display page with edit <span class='golden-text'>articles",

 		"vanilla" : "\nget '/<span class='golden-text'>articles</span>/:id/edit' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/:id/edit' do\n\n  #get params from url\n  @<span class='g-text-s-dc'>article</span> = <span class='g-text-singular'>Article</span>.find(params[:id]) #define intstance variable for view\n\n  erb '<span class='golden-text'>articles</span>/edit' #shows view with edit <span class='g-text-s-dc'>article</span> form\n\nend\n"
	},
	{
		"type" : "PUT/PATCH",

  		"path" : "'/<span class='golden-text'>articles</span>/:id'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/update'",

  		"description" : "return an HTML form for editing <span class='golden-text'>articles</span>",

 		"vanilla" : "\nput '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nput '/<span class='golden-text'>articles</span>/:id' do\n\n  #get params from url\n  @<span class='g-text-s-dc'>article</span> = <span class='g-text-singular'>Article</span>.find(params[:id]) #define variable to edit\n\n  @<span class='g-text-s-dc'>article</span>.assign_attributes(params[:<span class='g-text-s-dc'>article</span>]) #assign new attributes\n\n  if @<span class='g-text-s-dc'>article</span>.save #saves new <span class='g-text-s-dc'>article</span> or returns false if unsuccessful\n    redirect '/<span class='golden-text'>articles</span>' #links back to <span class='golden-text'>articles</span> index page\n  else\n    erb :errors #shows an errors view you define\n  end\n\nend\n"
	},
	{
		"type" : "DELETE",

  		"path" : "'/<span class='golden-text'>articles</span>/:id'",

	  	"viewFile" : "'/<span class='golden-text'>articles</span>/destroy'",

	  	"description" : "delete specific <span class='golden-text'>articles</span>",

 		"vanilla" : "\ndelete '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\ndelete '/<span class='golden-text'>articles</span>/:id' do\n\n  #get params from url\n\n  @<span class='g-text-s-dc'>article</span> = <span class='g-text-singular'>Article</span>.find(params[:id]) #define <span class='g-text-s-dc'>article</span> to delete\n\n  @<span class='g-text-s-dc'>article</span>.destroy #delete <span class='g-text-s-dc'>article</span>\n\nend\n"
	},
]