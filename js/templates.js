var singularRoutes = [
	{ 
  	"type" : "GET",

  	"path" : "'/{{ pluralDowncaseResource }}'",

  	"viewFile" : "/{{ pluralDowncaseResource }}/index",

  	"description" : "display a list of all {{ pluralDowncaseResource }}",

	 	"vanilla" : "\nget {{ pluralDowncaseResource }} do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget {{ pluralDowncaseResource }} do\n\n  @{{ pluralDowncaseResource }} = {{ singularDowncaseResource }}.all #define instance variable for view\n\n  erb :'{{ pluralDowncaseResource }}/index' #show all {{ pluralDowncaseResource }} view (index)\n\nend\n"
	},
	{
		"type" : "GET",

		"path" : "'/{{ pluralDowncaseResource }}/new'",

		"viewFile" : "/{{ pluralDowncaseResource }}/new",

		"description" : "return an HTML form for creating a new {{ singularPropercaseResource }}",

 		"vanilla" : "\nget'/{{ pluralDowncaseResource }}/new' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/{{ pluralDowncaseResource }}/new' do\n\n  erb :'{{ pluralDowncaseResource }}/new' #show new {{ pluralDowncaseResource }} view\n\nend\n"
	},
	{
		"type" : "POST",

		"path" : "'/{{ pluralDowncaseResource }}'",

		"viewFile" : "--",

		"description" : "create a new {{ singularPropercaseResource }}",

 		"vanilla" : "\npost {{ pluralDowncaseResource }} do\n\n  #your code here\n\nend\n",

		"suggested" : "\npost {{ pluralDowncaseResource }} do\n\n  #below works with properly formatted params in HTML form\n  @{{ singularPropercaseResource }} = {{ singularDowncaseResource }}.new(params[:{{ singularPropercaseResource }}]) #create new {{ singularPropercaseResource }}\n\n  if @{{ singularPropercaseResource }}.save #saves new {{ singularPropercaseResource }} or returns false if unsuccessful\n    redirect {{ pluralDowncaseResource }} #redirect back to {{ pluralDowncaseResource }} index page\n  else\n    erb :'{{ pluralDowncaseResource }}/new' # show new {{ pluralDowncaseResource }} view again(potentially displaying errors)\n  end\n\nend\n"
	},
	{
		"type" : "GET",

		"path" : "'/{{ pluralDowncaseResource }}/:id'",

		"viewFile" : "/{{ pluralDowncaseResource }}/show",

		"description" : "display a specific {{ singularPropercaseResource }}",

 		"vanilla" : "\nget '/{{ pluralDowncaseResource }}/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/{{ pluralDowncaseResource }}/:id' do\n\n  #gets params from url\n\n  @{{ singularPropercaseResource }} = {{ singularDowncaseResource }}.find(params[:id]) #define instance variable for view\n\n  erb :'{{ pluralDowncaseResource }}/show' #show single {{ singularPropercaseResource }} view\n\nend\n"
	},
	{
		"type" : "GET",

		"path" : "'/{{ pluralDowncaseResource }}/:id/edit'",

		"viewFile" : "/{{ pluralDowncaseResource }}/edit",

		"description" : "return an HTML form for editing a {{ singularPropercaseResource }}",

 		"vanilla" : "\nget '/{{ pluralDowncaseResource }}/:id/edit' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nget '/{{ pluralDowncaseResource }}/:id/edit' do\n\n  #get params from url\n  @{{ singularPropercaseResource }} = {{ singularDowncaseResource }}.find(params[:id]) #define intstance variable for view\n\n  erb :'{{ pluralDowncaseResource }}/edit' #show edit {{ singularPropercaseResource }} view\n\nend\n"
	},
	{
		"type" : "PUT",

		"path" : "'/{{ pluralDowncaseResource }}/:id'",

		"viewFile" : "--",

		"description" : "update a specific {{ singularPropercaseResource }}",

 		"vanilla" : "\nput '/{{ pluralDowncaseResource }}/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\nput '/{{ pluralDowncaseResource }}/:id' do\n\n  #get params from url\n  @{{ singularPropercaseResource }} = {{ singularDowncaseResource }}.find(params[:id]) #define variable to edit\n\n  @{{ singularPropercaseResource }}.assign_attributes(params[:{{ singularPropercaseResource }}]) #assign new attributes\n\n  if @{{ singularPropercaseResource }}.save #saves new {{ singularPropercaseResource }} or returns false if unsuccessful\n    redirect {{ pluralDowncaseResource }} #redirect back to {{ pluralDowncaseResource }} index page\n  else\n    erb :'{{ pluralDowncaseResource }}/edit' #show edit {{ singularPropercaseResource }} view again(potentially displaying errors)\n  end\n\nend\n"
	},
	{
		"type" : "DELETE",

  	"path" : "'/{{ pluralDowncaseResource }}/:id'",

	  "viewFile" : "--",

	  "description" : "delete a specific {{ singularPropercaseResource }}",

 		"vanilla" : "\ndelete '/{{ pluralDowncaseResource }}/:id' do\n\n  #your code here\n\nend\n",

		"suggested" : "\ndelete '/{{ pluralDowncaseResource }}/:id' do\n\n  #get params from url\n  @{{ singularPropercaseResource }} = {{ singularDowncaseResource }}.find(params[:id]) #define {{ singularPropercaseResource }} to delete\n\n  @{{ singularPropercaseResource }}.destroy #delete {{ singularPropercaseResource }}\n\n  redirect {{ pluralDowncaseResource }} #redirect back to {{ pluralDowncaseResource }} index page\n\nend\n"
	},
]

           
// singular downcase resource : {{ singularDowncaseResource }}
// singular propercase resource : {{ singularPropercaseResource }}
// plurarl downcase resource : {{ pluralDowncaseResource }}

// singular downcase nested resource : {{ singularDowncaseNestedResource }}
// singular propercase nested resource : {{ singularPropercaseNestedResource }}
// plurarl downcase nested resource : {{ pluralDowncaseNestedResource  }}


// 'tea' = {{ singularDowncaseResource }}
// 'Tea' = {{ singularPropercaseResource }}
// 'teas' = {{ pluralDowncaseResource }}

// 'comment' = <span class='singular-downcase-nested-text'></span>
// 'Comment' = <span class='singular-nested-text'></span>
// 'comments' = <span class='nested-text'></span>

var nestedRoutes = [
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>'",

    "viewFile" : "<span class='nested-text'></span>/index",

    "description" : "display a list of all <span class='nested-text'></span> for a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @<span class='nested-text'></span> = @{{ singularDowncaseResource }}.<span class='nested-text'></span>\n\n  erb :'<span class='nested-text'></span>/index'\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/new'",

    "viewFile" : "<span class='nested-text'></span>/new",

    "description" : "return an HTML form for creating a new <span class='singular-downcase-nested-text'></span> belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/new' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/new' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  erb :'<span class='nested-text'></span>/new'\n\nend"
  },
  {
    "type" : "POST",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>'",

    "viewFile" : "--",

    "description" : "create a new <span class='singular-downcase-nested-text'></span> belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\npost '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>' do\n\n  #your code here\n\nend\n",

    "suggested" : "post '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @{{ singularDowncaseResource }}.<span class='nested-text'></span>.new(params[:<span class='singular-downcase-nested-text'></span>])\n\n  if @<span class='singular-downcase-nested-text'></span>.save\n    redirect \"/{{ pluralDowncaseResource }}/#{@{{ singularDowncaseResource }}.id}/<span class='nested-text'></span>\"\n  else\n    erb :'<span class='nested-text'></span>/new' #show new <span class='nested-text'></span> view again(potentially displaying errors)\n  end\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id'",

    "viewFile" : "<span class='nested-text'></span>/show",

    "description" : "display a specific <span class='singular-downcase-nested-text'></span> belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @{{ singularDowncaseResource }}.<span class='nested-text'></span>.find(params[:id])\n\n  erb :'<span class='nested-text'></span>/show'\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id/edit'",

    "viewFile" : "<span class='nested-text'></span>/edit",

    "description" : "return an HTML form for editing an <span class='singular-downcase-nested-text'></span> belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\n get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id/edit' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id/edit' do\n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @{{ singularDowncaseResource }}.<span class='nested-text'></span>.find(params[:id])\n\n  erb :'<span class='nested-text'></span>/edit'\n\nend"
  },
  {
    "type" : "PUT",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id'",

    "viewFile" : "--",

    "description" : "update a specific <span class='singular-downcase-nested-text'></span> belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\n put '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "put '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id' do\n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @{{ singularDowncaseResource }}.<span class='nested-text'></span>.find(params[:id])\n\n  if @<span class='singular-downcase-nested-text'></span>.update_attributes(params[:<span class='singular-downcase-nested-text'></span>])\n    redirect \"/{{ pluralDowncaseResource }}/#{@{{ singularDowncaseResource }}.id}/<span class='nested-text'></span>\"\n  else \n    erb :'<span class='nested-text'></span>/edit' #show edit <span class='nested-text'></span> view again(potentially displaying errors)\n  end\n\nend"
  },
  {
    "type" : "DELETE",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id'",

    "viewFile" : "--",

    "description" : "delete a specific <span class='singular-downcase-nested-text'></span> belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "delete '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "delete '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/<span class='nested-text'></span>/:id' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @<span class='singular-downcase-nested-text'></span> = @{{ singularDowncaseResource }}.<span class='nested-text'></span>.find(params[:id])\n\n  @<span class='singular-downcase-nested-text'></span>.destroy\n\n  redirect \"/{{ pluralDowncaseResource }}/#{@{{ singularDowncaseResource }}.id}/<span class='nested-text'></span>\"\n\nend"
  }
]

