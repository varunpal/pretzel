function pretzel (cookie) {
  cookie = cookie || '';
  var cookies = cookie.split(';');
  var jsonCookie = {};
  cookies.forEach(function (item) {
    var crumbs = item.split('=');
    if (crumbs.length > 1) {
      jsonCookie[crumbs[0].trim()] = crumbs[1].trim();
    }
  });
  return jsonCookie;
}

module.exports = pretzel;