document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');

  checkPageButton.addEventListener('click', function() {

      alert("popup-button");

      $(location).attr('href', 'https://www.youtube.com');

    });

  }, false);