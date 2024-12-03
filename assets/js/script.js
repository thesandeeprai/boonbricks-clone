//JavaScript for Dark Mode -->

document.getElementById('darkModeToggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('dark-mode')) {
    this.textContent = 'Light Mode';
  } else {
    this.textContent = 'Dark Mode';
  }
});




// footer

   // Show back-to-top button when scrolling
   const backToTopButton = document.getElementById('backToTop');
   window.addEventListener('scroll', () => {
       if (window.scrollY > 200) {
           backToTopButton.style.display = 'block';
       } else {
           backToTopButton.style.display = 'none';
       }
   });

   // Scroll to top functionality
   backToTopButton.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
   });
