document.addEventListener('DOMContentLoaded', function () {
    fetch('Header_folder/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        });
});
document.addEventListener("DOMContentLoaded", function () {
    fetch('Footer_folder/footer.html')  // Load the nav.html file
        .then(response => response.text()) // Get its content
        .then(data => {
            document.getElementById('footer-container').innerHTML = data; // Insert into the page
        });
}); 