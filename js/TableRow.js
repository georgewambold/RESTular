TableRow = function(object) {
  this.type = object["type"];
  this.path = object["path"];
  this.viewFile = object["viewFile"];
  this.description = object["description"];
  this.vanilla = object["vanilla"];
  this.suggested = object["suggested"];
}

TableRow.prototype.createSingularRows = function () {
  
}

TableRow.prototype.createNestedRows = function () {

}


TableRow.prototype.createRows = function() {

  var html = "<tr class='route'><td>" + this.type + "</td><td>" + this.path + "</td><td>" + this.viewFile + "</td><td>" + this.description + "</td></tr><tr class='route-info'><td colspan='2'><span class='temp-header'>Path Template:</span><pre class='route-pre'>" + this.vanilla + "</pre><div class='copy-prompt'>^click to copy^</div></td><td colspan='2'><span class='temp-header'>Suggestions:</span><span class='header-caption'> (to be taken with a grain of salt)</span><pre class='route-pre'>" + this.suggested + "</pre><div class='copy-prompt'>^click to copy^</div></td></tr>"

  return html
}
