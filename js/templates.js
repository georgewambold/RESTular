routes = [
	{ 
	  	"type" : "GET",

	  	"path" : "'/<span class='golden-text'>articles</span>'",

	  	"viewFile" : "'/<span class='golden-text'>articles</span>/index'",

	  	"description" : "display a list of all <span class='golden-text'>articles</span>",

	 	"vanilla" : "\nget '/<span class='golden-text'>articles</span>' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>' do\n\n  @<span class='golden-text'>articles</span> = <span class='singular-golden-text'>Article</span>.all #define instance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/index' #shows all <span class='golden-text'>articles</span> view (index)\n\nend\n"
	},
	{
		"type" : "GET",

  		"path" : "'/<span class='golden-text'>articles</span>/new'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/new'",

  		"description" : "return an HTML form for creating a new <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nget'/<span class='golden-text'>articles</span>/new' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/new' do\n\n  erb :'<span class='golden-text'>articles</span>/new' #shows view with new <span class='golden-text'>articles</span> form\n\nend\n"
	},
	{
		"type" : "POST",

  		"path" : "'/<span class='golden-text'>articles</span>'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/create'",

  		"description" : "create a new <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\npost '/<span class='golden-text'>articles</span>' do\n\n  #your code here\n\nend\n",

		"suggested" : "\npost '/<span class='golden-text'>articles</span>' do\n\n  #below works with properly formatted params in HTML form\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.new(params[:<span class='singular-downcase-golden-text'>article</span>]) #create new <span class='singular-downcase-golden-text'>article</span>\n\n  if @<span class='singular-downcase-golden-text'>article</span>.save #saves new <span class='singular-downcase-golden-text'>article</span> or returns false if unsuccessful\n    redirect '/<span class='golden-text'>articles</span>' #links back to <span class='golden-text'>articles</span> index page\n  else\n    erb :errors #shows an errors view you define\n  end\n\nend\n"
	},
	{
		"type" : "GET",

  		"path" : "'/<span class='golden-text'>articles</span>/:id'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/show'",

  		"description" : "display a specific <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nget '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/:id' do\n\n  #gets params from url\n\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define instance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/show' #shows single <span class='singular-downcase-golden-text'>article</span> view\n\nend\n"
	},
	{
		"type" : "GET",

  		"path" : "'/<span class='golden-text'>articles</span>/:id/edit'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/edit'",

  		"description" : "return an HTML form for editing a <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nget '/<span class='golden-text'>articles</span>/:id/edit' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/:id/edit' do\n\n  #get params from url\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define intstance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/edit' #shows view with edit <span class='singular-downcase-golden-text'>article</span> form\n\nend\n"
	},
	{
		"type" : "PUT",

  		"path" : "'/<span class='golden-text'>articles</span>/:id'",

  		"viewFile" : "'/<span class='golden-text'>articles</span>/update'",

  		"description" : "update a specific <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nput '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nput '/<span class='golden-text'>articles</span>/:id' do\n\n  #get params from url\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define variable to edit\n\n  @<span class='singular-downcase-golden-text'>article</span>.assign_attributes(params[:<span class='singular-downcase-golden-text'>article</span>]) #assign new attributes\n\n  if @<span class='singular-downcase-golden-text'>article</span>.save #saves new <span class='singular-downcase-golden-text'>article</span> or returns false if unsuccessful\n    redirect '/<span class='golden-text'>articles</span>' #links back to <span class='golden-text'>articles</span> index page\n  else\n    erb :errors #shows an errors view you define\n  end\n\nend\n"
	},
	{
		"type" : "DELETE",

  		"path" : "'/<span class='golden-text'>articles</span>/:id/delete'",

	  	"viewFile" : "'/<span class='golden-text'>articles</span>/destroy'",

	  	"description" : "delete a specific <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\ndelete '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\ndelete '/<span class='golden-text'>articles</span>/:id' do\n\n  #get params from url\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define <span class='singular-downcase-golden-text'>article</span> to delete\n\n  @<span class='singular-downcase-golden-text'>article</span>.destroy #delete <span class='singular-downcase-golden-text'>article</span>\n\n  redirect '/<span class='golden-text'>articles</span>' #redirects back to <span class='golden-text'>articles</span> index page\n\nend\n"
	},
]