document.addEventListener('DOMContentLoaded', function () {
    fetch('../Header_folder/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
            // Load the nav.js file after the HTML is loaded
            let style = document.createElement('style')
            style.src = '../Header_folder/nav.css'
            document.body.appendChild(style)
            let script = document.createElement('script');
            script.src = '../Header_folder/nav.js';
            document.body.appendChild(script);
        });
});
document.addEventListener("DOMContentLoaded", function () {
    fetch('../Footer_folder/footer.html')  // Load the nav.html file
        .then(response => response.text()) // Get its content
        .then(data => {
            let style = document.createElement('style')
            style.src = '../Footer_folder/footer.css'
            document.body.appendChild(style)
            document.getElementById('footer-container').innerHTML = data; // Insert into the page
        });
}); 