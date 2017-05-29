document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');

  checkPageButton.addEventListener('click', function() {

      alert("button");

      $(location).attr('href', 'http://google.com');

    });

  }, false);