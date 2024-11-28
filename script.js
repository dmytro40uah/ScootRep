/* // Select the button by its class
const toggleButton = document.querySelector ('.toggle_first');

// Add click event listener to toggle the 'open' class on the 'answering' div
toggleButton.addEventListener ('click', function () {
  // Select the div by its class
  const answeringDiv = document.querySelector ('.answ_first');

  // Toggle the 'open' class on the 'answering' div
  answeringDiv.classList.toggle ('open');
});
 */
document.addEventListener ('DOMContentLoaded', function () {
  const toggleButton = document.querySelector ('.tooglemenu');
  const navigation = document.querySelector ('.navigation');
  const Fixed = document.querySelector ('body');
  document.querySelector ('.tooglemenu').addEventListener ('click', () => {
    navigation.classList.toggle ('activeMenu');
    Fixed.classList.toggle ('FixedB');
  });
});
