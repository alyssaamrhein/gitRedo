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

var withJustJS = function () {

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/users/alyssaamrhein', true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400){
      var data = JSON.parse(this.response);
      document.querySelector('.info').innerHTML = JSON.stringify(data);
      setProfileInfo(data);
    } else {
      // We reached our target server, but it returned an error
      document.querySelector('.error').innerHTML = 'OMG ERROR: ';
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();
};

var setProfileInfo = function (profileData) {
  $('#name').text(profileData.login);
  $('#avatar').html("<img src='" + profileData.avatar_url + "'/>");
  $('#location').text(profileData.location);

  $('#link').prop('href', profileData.html_url);

  $('#blog').html("<a href='" + profileData.blog + "'>" + profileData.blog + "</a>");
  $('#email').text(profileData.email);
}
