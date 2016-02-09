TableRows = function(singularRoutes, nestedRoutes) {
  this.singular_rows = singularRoutes
  this.nested_rows = nestedRoutes
  this.singular = true
  // this.type = object["type"];
  // this.path = object["path"];
  // this.viewFile = object["viewFile"];
  // this.description = object["description"];
  // this.vanilla = object["vanilla"];
  // this.suggested = object["suggested"];
}


// for (var i = 0; i < singularRoutes.length; i++) {
//   var row = new TableRow(singularRoutes[i])
//   $("#route-body").append(row.createRows())
// }

TableRows.prototype.appendSingularRows = function() { 
  this.singular = true
  $("#route-body").empty()
  for (var i = 0; i < this.singular_rows.length; i++) {
    $("#route-body").append(this.createRows(this.singular_rows[i]))
  }
}

TableRows.prototype.appendNestedRows = function() { 
  this.singular = false
  $("#route-body").empty()
  for (var i = 0; i < this.nested_rows.length; i++) {
    $("#route-body").append(this.createRows(this.nested_rows[i]))
  }
}



TableRows.prototype.createRows = function(object) {
  
  var html = "<tr class='route'><td>" + object.type + "</td><td>" + object.path + "</td><td>" + object.viewFile + "</td><td>" + object.description + "</td></tr><tr class='route-info'><td colspan='2'><span class='temp-header'>Path Template:</span><pre class='route-pre'>" + object.vanilla + "</pre><div class='copy-prompt'>^click to copy^</div></td><td colspan='2'><span class='temp-header'>Suggestions:</span><span class='header-caption'> (to be taken with a grain of salt)</span><pre class='route-pre'>" + object.suggested + "</pre><div class='copy-prompt'>^click to copy^</div></td></tr>"

  return html
}
