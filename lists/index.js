function(head, req) {
  // !json templates.index
  // !code vendor/couchapp/path.js
  // !code vendor/couchapp/date.js
  // !code vendor/couchapp/template.js
  
  var indexPath = listPath('index', 'recent-bookmarks', { descending:true, limit: 5 });
  
  // The provides function serves the format the client requests.
  // The first matching format is sent, so reordering functions changes 
  // thier priority. In this case HTML is the preferred format, so it comes first.
  provides("html", function() {
    // redner the html head using a template
    send(template(templates.index.head, {
      title: "foo",
      index: indexPath,
      assets: assetPath(),
      show: showPath()
    }));
    
    // loop over view rows, rendering one at a time
    var row, key;
    while (row = getRow()) {
      // see sofa's lists/index.js
    }
    
    // render the html tail template
    return template(templates.index.tail, {
      assets: assetPath()
    });
  });
}