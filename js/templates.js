var singularRoutes = [
	{ 
  	"type" : "GET",

  	"path" : "'/<span class='golden-text'>articles</span>'",

  	"viewFile" : "/<span class='golden-text'>articles</span>/index",

  	"description" : "display a list of all <span class='golden-text'>articles</span>",

	 	"vanilla" : "\nget '/<span class='golden-text'>articles</span>' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>' do\n\n  @<span class='golden-text'>articles</span> = <span class='singular-golden-text'>Article</span>.all #define instance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/index' #show all <span class='golden-text'>articles</span> view (index)\n\nend\n"
	},
	{
		"type" : "GET",

		"path" : "'/<span class='golden-text'>articles</span>/new'",

		"viewFile" : "/<span class='golden-text'>articles</span>/new",

		"description" : "return an HTML form for creating a new <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nget'/<span class='golden-text'>articles</span>/new' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/new' do\n\n  erb :'<span class='golden-text'>articles</span>/new' #show new <span class='golden-text'>articles</span> view\n\nend\n"
	},
	{
		"type" : "POST",

		"path" : "'/<span class='golden-text'>articles</span>'",

		"viewFile" : "--",

		"description" : "create a new <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\npost '/<span class='golden-text'>articles</span>' do\n\n  #your code here\n\nend\n",

		"suggested" : "\npost '/<span class='golden-text'>articles</span>' do\n\n  #below works with properly formatted params in HTML form\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.new(params[:<span class='singular-downcase-golden-text'>article</span>]) #create new <span class='singular-downcase-golden-text'>article</span>\n\n  if @<span class='singular-downcase-golden-text'>article</span>.save #saves new <span class='singular-downcase-golden-text'>article</span> or returns false if unsuccessful\n    redirect '/<span class='golden-text'>articles</span>' #redirect back to <span class='golden-text'>articles</span> index page\n  else\n    erb :'<span class='golden-text'>articles</span>/new' # show new <span class='golden-text'>articles</span> view again(potentially displaying errors)\n  end\n\nend\n"
	},
	{
		"type" : "GET",

		"path" : "'/<span class='golden-text'>articles</span>/:id'",

		"viewFile" : "/<span class='golden-text'>articles</span>/show",

		"description" : "display a specific <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nget '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/:id' do\n\n  #gets params from url\n\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define instance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/show' #show single <span class='singular-downcase-golden-text'>article</span> view\n\nend\n"
	},
	{
		"type" : "GET",

		"path" : "'/<span class='golden-text'>articles</span>/:id/edit'",

		"viewFile" : "/<span class='golden-text'>articles</span>/edit",

		"description" : "return an HTML form for editing a <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nget '/<span class='golden-text'>articles</span>/:id/edit' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/<span class='golden-text'>articles</span>/:id/edit' do\n\n  #get params from url\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define intstance variable for view\n\n  erb :'<span class='golden-text'>articles</span>/edit' #show edit <span class='singular-downcase-golden-text'>article</span> view\n\nend\n"
	},
	{
		"type" : "PUT",

		"path" : "'/<span class='golden-text'>articles</span>/:id'",

		"viewFile" : "--",

		"description" : "update a specific <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\nput '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nput '/<span class='golden-text'>articles</span>/:id' do\n\n  #get params from url\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define variable to edit\n\n  @<span class='singular-downcase-golden-text'>article</span>.assign_attributes(params[:<span class='singular-downcase-golden-text'>article</span>]) #assign new attributes\n\n  if @<span class='singular-downcase-golden-text'>article</span>.save #saves new <span class='singular-downcase-golden-text'>article</span> or returns false if unsuccessful\n    redirect '/<span class='golden-text'>articles</span>' #redirect back to <span class='golden-text'>articles</span> index page\n  else\n    erb :'<span class='golden-text'>articles</span>/edit' #show edit <span class='singular-downcase-golden-text'>article</span> view again(potentially displaying errors)\n  end\n\nend\n"
	},
	{
		"type" : "DELETE",

  	"path" : "'/<span class='golden-text'>articles</span>/:id'",

	  "viewFile" : "--",

	  "description" : "delete a specific <span class='singular-downcase-golden-text'>article</span>",

 		"vanilla" : "\ndelete '/<span class='golden-text'>articles</span>/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\ndelete '/<span class='golden-text'>articles</span>/:id' do\n\n  #get params from url\n  @<span class='singular-downcase-golden-text'>article</span> = <span class='singular-golden-text'>Article</span>.find(params[:id]) #define <span class='singular-downcase-golden-text'>article</span> to delete\n\n  @<span class='singular-downcase-golden-text'>article</span>.destroy #delete <span class='singular-downcase-golden-text'>article</span>\n\n  redirect '/<span class='golden-text'>articles</span>' #redirect back to <span class='golden-text'>articles</span> index page\n\nend\n"
	},
]

// 'teas' = <span class='golden-text'></span>
// 'tea' = <span class='singular-downcase-golden-text'></span>
// 'Tea' = <span class='singular-golden-text'></span>

// 'comments' = <span class='nested-text'></span>
// 'comment' = <span class='singular-downcase-nested-text'></span>
// 'Comment' = <span class='singular-nested-text'></span>

var nestedRoutes = [
  {
    "type" : "GET",

    "path" : "'/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>'",

    "viewFile" : "<span class='nested-text'></span>/index",

    "description" : "display a list of all <span class='nested-text'></span> for a specific <span class='singular-downcase-golden-text'></span>",

    "vanilla" : "\nget '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>' do \n\n  @<span class='singular-downcase-golden-text'></span> = <span class='singular-golden-text'></span>.find(params[:<span class='singular-downcase-golden-text'></span>_id])\n\n  @<span class='nested-text'></span> = @<span class='singular-downcase-golden-text'></span>.<span class='nested-text'></span>\n\n  erb :'<span class='nested-text'></span>/index'\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/new'",

    "viewFile" : "<span class='nested-text'></span>/new",

    "description" : "return an HTML form for creating a new <span class='singular-downcase-nested-text'></span> belonging to a specific <span class='singular-downcase-golden-text'></span>",

    "vanilla" : "\nget '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/new' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/new' do \n\n  @<span class='singular-downcase-golden-text'></span> = <span class='singular-golden-text'></span>.find(params[:<span class='singular-downcase-golden-text'></span>_id])\n\n  erb :'<span class='nested-text'></span>/new'\n\nend"
  },
  {
    "type" : "POST",

    "path" : "'/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>'",

    "viewFile" : "--",

    "description" : "create a new <span class='singular-downcase-nested-text'></span> belonging to a specific <span class='singular-downcase-golden-text'></span>",

    "vanilla" : "\npost '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>' do\n\n  #your code here\n\nend\n",

    "suggested" : "post '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>' do \n\n  @<span class='singular-downcase-golden-text'></span> = <span class='singular-golden-text'></span>.find(params[:<span class='singular-downcase-golden-text'></span>_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @<span class='singular-downcase-golden-text'></span>.<span class='nested-text'></span>.new(params[:<span class='singular-downcase-nested-text'></span>])\n\n  if @<span class='singular-downcase-nested-text'></span>.save\n    redirect \"/<span class='golden-text'></span>/#{@<span class='singular-downcase-golden-text'></span>.id}/<span class='nested-text'></span>\"\n  else\n    erb :'<span class='nested-text'></span>/new' #show new <span class='nested-text'></span> view again(potentially displaying errors)\n  end\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id'",

    "viewFile" : "<span class='nested-text'></span>/show",

    "description" : "display a specific <span class='singular-downcase-nested-text'></span> belonging to a specific <span class='singular-downcase-golden-text'></span>",

    "vanilla" : "\nget '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id' do \n\n  @<span class='singular-downcase-golden-text'></span> = <span class='singular-golden-text'></span>.find(params[:<span class='singular-downcase-golden-text'></span>_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @<span class='singular-downcase-golden-text'></span>.<span class='nested-text'></span>.find(params[:id])\n\n  erb :'<span class='nested-text'></span>/show'\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id/edit'",

    "viewFile" : "<span class='nested-text'></span>/edit",

    "description" : "return an HTML form for editing an <span class='singular-downcase-nested-text'></span> belonging to a specific <span class='singular-downcase-golden-text'></span>",

    "vanilla" : "\n get '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id/edit' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id/edit' do\n\n  @<span class='singular-downcase-golden-text'></span> = <span class='singular-golden-text'></span>.find(params[:<span class='singular-downcase-golden-text'></span>_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @<span class='singular-downcase-golden-text'></span>.<span class='nested-text'></span>.find(params[:id])\n\n  erb :'<span class='nested-text'></span>/edit'\n\nend"
  },
  {
    "type" : "PUT",

    "path" : "'/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id'",

    "viewFile" : "--",

    "description" : "update a specific <span class='singular-downcase-nested-text'></span> belonging to a specific <span class='singular-downcase-golden-text'></span>",

    "vanilla" : "\n put '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "put '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id' do\n\n  @<span class='singular-downcase-golden-text'></span> = <span class='singular-golden-text'></span>.find(params[:<span class='singular-downcase-golden-text'></span>_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @<span class='singular-downcase-golden-text'></span>.<span class='nested-text'></span>.find(params[:id])\n\n  if @<span class='singular-downcase-nested-text'></span>.update_attributes(params[:<span class='singular-downcase-nested-text'></span>])\n    redirect \"/<span class='golden-text'></span>/#{@<span class='singular-downcase-golden-text'></span>.id}/<span class='nested-text'></span>\"\n  else \n    erb :'<span class='nested-text'></span>/edit' #show edit <span class='nested-text'></span> view again(potentially displaying errors)\n  end\n\nend"
  },
  {
    "type" : "DELETE",

    "path" : "'/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id'",

    "viewFile" : "--",

    "description" : "delete a specific <span class='singular-downcase-nested-text'></span> belonging to a specific <span class='singular-downcase-golden-text'></span>",

    "vanilla" : "delete '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "delete '/<span class='golden-text'></span>/:<span class='singular-downcase-golden-text'></span>_id/<span class='nested-text'></span>/:id' do \n\n  @<span class='singular-downcase-golden-text'></span> = <span class='singular-golden-text'></span>.find(params[:<span class='singular-downcase-golden-text'></span>_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @<span class='singular-downcase-golden-text'></span>.<span class='nested-text'></span>.find(params[:id])\n\n  @<span class='singular-downcase-nested-text'></span>.destroy\n\n  redirect \"/<span class='golden-text'></span>/#{@<span class='singular-downcase-golden-text'></span>.id}/<span class='nested-text'></span>\"\n\nend"
  }
]

