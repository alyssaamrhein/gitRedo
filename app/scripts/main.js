var API_URL = 'https://api.github.com/users/alyssaamrhein';
// calling the url
var withAjax = function () {
  $.ajax({url: API_URL}).done(function (data) {
    // calls ajax and uses done method
    $('.info').text(JSON.stringify(data));
    // turns whatever is returned into a string
    setProfileInfo(data);
    $('#sidebar').html(_.template($('#sidebarTemplate').html())(data));

  }).fail(function (data) {

    $('.error').removeClass('fade').text(data.responseJSON.message);

    setTimeout(function () {
      $('.error').addClass('fade');
    }, 1000);

  });
};


var API_URL2 = 'https://api.github.com/users/alyssaamrhein/repos';
// calling the url
var gettinRepo = function () {
  $.ajax({url: API_URL2}).done(function (data) {

    $('.info2').text(JSON.stringify(data));

    setRepoInfo(data);


  }).fail(function (data) {

    $('.error').removeClass('fade').text(data.responseJSON.message);

    setTimeout(function () {
      $('.error').addClass('fade');
    }, 1000);

  });
};



var setProfileInfo = function (profileData) {
  $('#name').text(profileData.name);
  $('#login').text(profileData.login);
  $('#created_at').text(profileData.created_at);
  $('#avatar').html("<img src='" + profileData.avatar_url + "'/>");
  $('#location').text(profileData.location);

  $('#link').prop('href', profileData.html_url);

  $('#blog').html("<a href='" + profileData.blog + "'>" + profileData.blog + "</a>");
  $('#email').text(profileData.email);
};

var setRepoInfo = function (data) {
  _.each(data, function (repo) {
    var repoTemplateString = $('#tabTemplate').html();
    var repoTemplate = _.template(repoTemplateString);
    var finishedRepoTemplate = repoTemplate(repo);
    $('#popRop').append(finishedRepoTemplate);
  });
};



withAjax();
gettinRepo();


/* Tab JS */

$('li').on('click', function (event) {
  var targetID = '#' + $(this).data('target');
  $(this).add(targetID)
         .addClass('active')
         .siblings()
         .removeClass('active');
});

/* End of Tab JS */
