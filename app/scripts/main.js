var API_URL = 'https://api.github.com/users/alyssaamrhein';
// calling the url
var withAjax = function () {
  $.ajax({url: API_URL}).done(function (data) {

    $('.info').text(JSON.stringify(data));

    setProfileInfo(data);

  }).fail(function (data) {

    $('.error').removeClass('fade').text(data.responseJSON.message);

    setTimeout(function () {
      $('.error').addClass('fade');
    }, 1000);

  });
};


var setProfileInfo = function (profileData) {
  $('.name').text(profileData.name);
  $('.login').text(profileData.login);
  $('#created_at').text(profileData.created_at);
  $('#avatar').html("<img src='" + profileData.avatar_url + "'/>");
  $('#location').text(profileData.location);

  $('#link').prop('href', profileData.html_url);

  $('#blog').html("<a href='" + profileData.blog + "'>" + profileData.blog + "</a>");
  $('#email').text(profileData.email);
};

withAjax();

/*
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
*/


$('#nameContainer').html(
  _.template($('#nameTemplate').html())(results)
);

$('#loginContainer').html(
  _.template($('#loginTemplate').html())(results)
);

$('#createdContainer').html(
  _.template($('#createdTemplate').html())(results)
);

/* Tab JS */

$('li').on('click', function (event) {
  var targetID = '#' + $(this).data('target');
  $(this).add(targetID)
         .addClass('active')
         .siblings()
         .removeClass('active');
});

/* End of Tab JS */
