// get json from github api
// assign to variables
// 2 apis
///// ---1 is profile info
///// ---1 is repo info
// so two variables

// templates in html
// which is where data is put

//
//
//
var results = {
  "login": "alyssaamrhein",
  "id": 5555065,
  "avatar_url": "https://avatars.githubusercontent.com/u/5555065?v=2",
  "gravatar_id": "",
  "url": "https://api.github.com/users/alyssaamrhein",
  "html_url": "https://github.com/alyssaamrhein",
  "followers_url": "https://api.github.com/users/alyssaamrhein/followers",
  "following_url": "https://api.github.com/users/alyssaamrhein/following{/other_user}",
  "gists_url": "https://api.github.com/users/alyssaamrhein/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/alyssaamrhein/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/alyssaamrhein/subscriptions",
  "organizations_url": "https://api.github.com/users/alyssaamrhein/orgs",
  "repos_url": "https://api.github.com/users/alyssaamrhein/repos",
  "events_url": "https://api.github.com/users/alyssaamrhein/events{/privacy}",
  "received_events_url": "https://api.github.com/users/alyssaamrhein/received_events",
  "type": "User",
  "site_admin": false,
  "name": "alyssa",
  "company": "",
  "blog": "",
  "location": "",
  "email": "",
  "hireable": false,
  "bio": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2013-09-27T04:49:55Z",
  "updated_at": "2014-10-10T22:06:08Z"
};


var compiled = _.template("hello: <%= name %>");
compiled(results);
