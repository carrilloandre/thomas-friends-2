document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('checkPage');

  checkPageButton.addEventListener('click', function() {

      alert("popup-button");

      $(location).attr('href', 'https://www.youtube.com/watch?v=b8HO6hba9ZE');

    });

  }, false);