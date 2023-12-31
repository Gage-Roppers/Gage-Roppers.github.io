document.addEventListener('DOMContentLoaded', function() {
  // Add an onClick event to the image with the new ID
  const usCyberGamesImage = document.getElementById('usCyberGamesImage');
  
  usCyberGamesImage.addEventListener('click', function() {
    alert('Image clicked!'); // Display an alert when the image is clicked
  });
});
