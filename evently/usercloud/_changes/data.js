function(resp) {
  var users = resp.rows.map(function(r) {
    return {
      user : r.key,
      user_uri : encodeURIComponent(r.key),
      count : (r.value * 4) + 10
    }
  });
  return {users:users};
}