// 1
// 'articles' = {{ pluralDowncaseResource }}
// 'articles' = {{ pluralDowncaseResource }}
// plurarl downcase resource : {{ pluralDowncaseResource }}

// 2
// 'article' = {{ singularDowncaseResource }}
// 'article' = {{ singularDowncaseResource }}
// singular downcase resource : {{ singularDowncaseResource }}

// 3 
// 'Article' = {{ singularPropercaseResource }}
// 'Article' = {{ singularPropercaseResource }}
// singular propercase resource : {{ singularPropercaseResource }}


// 4
// 'comments' = {{ pluralDowncaseNestedResource  }}
// plurarl downcase nested resource : {{ pluralDowncaseNestedResource  }}


// 5
// 'comment' = {{ singularDowncaseNestedResource }}
// singular downcase nested resource : {{ singularDowncaseNestedResource }}







singularRoutes = [
  { 
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}'",

    "viewFile" : "/{{ pluralDowncaseResource }}/index",

    "description" : "display a list of all {{ pluralDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}' do\n\n  #your code here\n\nend\n",

    "suggested" : "\nget '/{{ pluralDowncaseResource }}' do\n\n  @{{ pluralDowncaseResource }} = {{ singularPropercaseResource }}.all #define instance variable for view\n\n  erb :'{{ pluralDowncaseResource }}/index' #show all {{ pluralDowncaseResource }} view (index)\n\nend\n"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/new'",

    "viewFile" : "/{{ pluralDowncaseResource }}/new",

    "description" : "return an HTML form for creating a new {{ singularDowncaseResource }}",

    "vanilla" : "\nget'/{{ pluralDowncaseResource }}/new' do\n\n  #your code here\n\nend\n",

    "suggested" : "\nget '/{{ pluralDowncaseResource }}/new' do\n\n  erb :'{{ pluralDowncaseResource }}/new' #show new {{ pluralDowncaseResource }} view\n\nend\n"
  },
  {
    "type" : "POST",

    "path" : "'/{{ pluralDowncaseResource }}'",

    "viewFile" : "--",

    "description" : "create a new {{ singularDowncaseResource }}",

    "vanilla" : "\npost '/{{ pluralDowncaseResource }}' do\n\n  #your code here\n\nend\n",

    "suggested" : "\npost '/{{ pluralDowncaseResource }}' do\n\n  #below works with properly formatted params in HTML form\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.new(params[:{{ singularDowncaseResource }}]) #create new {{ singularDowncaseResource }}\n\n  if @{{ singularDowncaseResource }}.save #saves new {{ singularDowncaseResource }} or returns false if unsuccessful\n    redirect '/{{ pluralDowncaseResource }}' #redirect back to {{ pluralDowncaseResource }} index page\n  else\n    erb :'{{ pluralDowncaseResource }}/new' # show new {{ pluralDowncaseResource }} view again(potentially displaying errors)\n  end\n\nend\n"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:id'",

    "viewFile" : "/{{ pluralDowncaseResource }}/show",

    "description" : "display a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "\nget '/{{ pluralDowncaseResource }}/:id' do\n\n  #gets params from url\n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:id]) #define instance variable for view\n\n  erb :'{{ pluralDowncaseResource }}/show' #show single {{ singularDowncaseResource }} view\n\nend\n"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:id/edit'",

    "viewFile" : "/{{ pluralDowncaseResource }}/edit",

    "description" : "return an HTML form for editing a {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:id/edit' do\n\n  #your code here\n\nend\n",

    "suggested" : "\nget '/{{ pluralDowncaseResource }}/:id/edit' do\n\n  #get params from url\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:id]) #define intstance variable for view\n\n  erb :'{{ pluralDowncaseResource }}/edit' #show edit {{ singularDowncaseResource }} view\n\nend\n"
  },
  {
    "type" : "PUT",

    "path" : "'/{{ pluralDowncaseResource }}/:id'",

    "viewFile" : "--",

    "description" : "update a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nput '/{{ pluralDowncaseResource }}/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "\nput '/{{ pluralDowncaseResource }}/:id' do\n\n  #get params from url\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:id]) #define variable to edit\n\n  @{{ singularDowncaseResource }}.assign_attributes(params[:{{ singularDowncaseResource }}]) #assign new attributes\n\n  if @{{ singularDowncaseResource }}.save #saves new {{ singularDowncaseResource }} or returns false if unsuccessful\n    redirect '/{{ pluralDowncaseResource }}' #redirect back to {{ pluralDowncaseResource }} index page\n  else\n    erb :'{{ pluralDowncaseResource }}/edit' #show edit {{ singularDowncaseResource }} view again(potentially displaying errors)\n  end\n\nend\n"
  },
  {
    "type" : "DELETE",

    "path" : "'/{{ pluralDowncaseResource }}/:id'",

    "viewFile" : "--",

    "description" : "delete a specific {{ singularDowncaseResource }}",

    "vanilla" : "\ndelete '/{{ pluralDowncaseResource }}/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "\ndelete '/{{ pluralDowncaseResource }}/:id' do\n\n  #get params from url\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:id]) #define {{ singularDowncaseResource }} to delete\n\n  @{{ singularDowncaseResource }}.destroy #delete {{ singularDowncaseResource }}\n\n  redirect '/{{ pluralDowncaseResource }}' #redirect back to {{ pluralDowncaseResource }} index page\n\nend\n"
  },
]


nestedRoutes = [
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}'",

    "viewFile" : "{{ pluralDowncaseNestedResource  }}/index",

    "description" : "display a list of all {{ pluralDowncaseNestedResource  }} for a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @{{ pluralDowncaseNestedResource  }} = @{{ singularDowncaseResource }}.{{ pluralDowncaseNestedResource  }}\n\n  erb :'{{ pluralDowncaseNestedResource  }}/index'\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/new'",

    "viewFile" : "{{ pluralDowncaseNestedResource  }}/new",

    "description" : "return an HTML form for creating a new {{ singularDowncaseNestedResource }} belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/new' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/new' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  erb :'{{ pluralDowncaseNestedResource  }}/new'\n\nend"
  },
  {
    "type" : "POST",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}'",

    "viewFile" : "--",

    "description" : "create a new {{ singularDowncaseNestedResource }} belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\npost '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}' do\n\n  #your code here\n\nend\n",

    "suggested" : "post '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @{{ singularDowncaseNestedResource }} = @{{ singularDowncaseResource }}.{{ pluralDowncaseNestedResource  }}.new(params[:{{ singularDowncaseNestedResource }}])\n\n  if @{{ singularDowncaseNestedResource }}.save\n    redirect \"/{{ pluralDowncaseResource }}/#{@{{ singularDowncaseResource }}.id}/{{ pluralDowncaseNestedResource  }}\"\n  else\n    erb :'{{ pluralDowncaseNestedResource  }}/new' #show new {{ pluralDowncaseNestedResource  }} view again(potentially displaying errors)\n  end\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id'",

    "viewFile" : "{{ pluralDowncaseNestedResource  }}/show",

    "description" : "display a specific {{ singularDowncaseNestedResource }} belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\nget '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @{{ singularDowncaseNestedResource }} = @{{ singularDowncaseResource }}.{{ pluralDowncaseNestedResource  }}.find(params[:id])\n\n  erb :'{{ pluralDowncaseNestedResource  }}/show'\n\nend"
  },
  {
    "type" : "GET",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id/edit'",

    "viewFile" : "{{ pluralDowncaseNestedResource  }}/edit",

    "description" : "return an HTML form for editing an {{ singularDowncaseNestedResource }} belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\n get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id/edit' do\n\n  #your code here\n\nend\n",

    "suggested" : "get '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id/edit' do\n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @{{ singularDowncaseNestedResource }} = @{{ singularDowncaseResource }}.{{ pluralDowncaseNestedResource  }}.find(params[:id])\n\n  erb :'{{ pluralDowncaseNestedResource  }}/edit'\n\nend"
  },
  {
    "type" : "PUT",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id'",

    "viewFile" : "--",

    "description" : "update a specific {{ singularDowncaseNestedResource }} belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "\n put '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "put '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id' do\n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @{{ singularDowncaseNestedResource }} = @{{ singularDowncaseResource }}.{{ pluralDowncaseNestedResource  }}.find(params[:id])\n\n  if @{{ singularDowncaseNestedResource }}.update_attributes(params[:{{ singularDowncaseNestedResource }}])\n    redirect \"/{{ pluralDowncaseResource }}/#{@{{ singularDowncaseResource }}.id}/{{ pluralDowncaseNestedResource  }}\"\n  else \n    erb :'{{ pluralDowncaseNestedResource  }}/edit' #show edit {{ pluralDowncaseNestedResource  }} view again(potentially displaying errors)\n  end\n\nend"
  },
  {
    "type" : "DELETE",

    "path" : "'/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id'",

    "viewFile" : "--",

    "description" : "delete a specific {{ singularDowncaseNestedResource }} belonging to a specific {{ singularDowncaseResource }}",

    "vanilla" : "delete '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id' do\n\n  #your code here\n\nend\n",

    "suggested" : "delete '/{{ pluralDowncaseResource }}/:{{ singularDowncaseResource }}_id/{{ pluralDowncaseNestedResource  }}/:id' do \n\n  @{{ singularDowncaseResource }} = {{ singularPropercaseResource }}.find(params[:{{ singularDowncaseResource }}_id])\n\n  @{{ singularDowncaseNestedResource }} = @{{ singularDowncaseResource }}.{{ pluralDowncaseNestedResource  }}.find(params[:id])\n\n  @{{ singularDowncaseNestedResource }}.destroy\n\n  redirect \"/{{ pluralDowncaseResource }}/#{@{{ singularDowncaseResource }}.id}/{{ pluralDowncaseNestedResource  }}\"\n\nend"
  }
]
