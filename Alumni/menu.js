
      document.addEventListener("DOMContentLoaded", function () {
        const sidebarLinks = document.querySelectorAll(".sidebar ul li p");
        const contentArea = document.getElementById("content-area");

        const content = {
          portal: `
           <div class="slider-container">
        <div class="navigation">
            <button id="prev"><i class="ri-arrow-left-s-line"></i></button>
            <button id="next"><i class="ri-arrow-right-s-line"></i></button>
        </div>
        <div class="slides-wrapper">
            <img class="slide" src="./DSC_0291.jpg" alt="Image 1">
            <img class="slide" src="./DSC_2299.JPG" alt="Image 2">
            <img class="slide" src="./_DSC2825.JPG" alt="Image 3">
            <img class="slide" src="./DSC_2335.JPG" alt="Image 4">
            <img class="slide" src="./DSC_9772.JPG" alt="Image 5">
        </div>
    </div>
    <div class="alumni-info">
        <div>
            <h2>25000+</h2>
            <p>Alumni</p>
        </div>
        <div>
            <h2>16</h2>
            <p>Discipline</p>
        </div>
        <div>
            <h2>50+</h2>
            <p>Department</p>
        </div>
        <div>
            <h2>2000+</h2>
            <p>International Students</p>
        </div>
        <div>
            <h2>16</h2>
            <p>Countries Alumni</p>
        </div>
    </div>
    <!-- Video Section -->
    <div class="video-container">
        <video id="video1" class="video" width="800" height="360" controls>
            <source src="https://videos.pexels.com/video-files/9559153/9559153-uhd_2732_1440_25fps.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <h2>Media is the fourth pillar of democracy</h2>
        
    </div>

    <div class="video-container">
        <video id="video2" class="video" width="800" height="360" controls>
            <source src="https://videos.pexels.com/video-files/9697774/9697774-uhd_2560_1440_25fps.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <h2>Message Director ITM Gwalior,
          <br> Dr. Meenakshi Mazumdar to Alumni</h2>
       
    </div>

 <!-- Creative Image Collage -->
    <div class="collage-container">
        <div class="collage-item1">
            <img src="https://via.placeholder.com/400x400" alt="Image 1">
        </div>
        <div class="collage-item2">
            <img src="https://via.placeholder.com/200x200" alt="Image 2">
        </div>
        <div class="collage-item3">
            <img src="https://via.placeholder.com/400x600" alt="Image 3">
        </div>
        <div class="collage-item4">
            <img src="https://via.placeholder.com/200x200" alt="Image 4">
        </div>
        <div class="collage-item5">
            <img src="https://via.placeholder.com/400x200" alt="Image 5">
        </div>
        <div class="collage-item6">
            <img src="https://via.placeholder.com/200x200" alt="Image 6">
        </div>
        <div class="collage-item7">
            <img src="https://via.placeholder.com/200x200" alt="Image 7">
        </div>
        <div class="collage-item8">
            <img src="https://via.placeholder.com/400x200" alt="Image 8">
        </div>
    </div>
             
               `,
          demo: `
             
          `,
          mentor: `
           
          `,
          testimonials: `
        
       
        `,
          alumni: `
          
          `,
          chapter: `
   
    

   

    `,

          speaks: `
           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>
             <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>           <div class="card-container-speak">
  <div class="card-speak">
    <div class="card-content-speak">
      <h2>Rishabh Khandelwal</h2>
      <p>CS - ITM (Placed in INFOSYS)</p>
      <p>Why we choose college? For good training, exposure of industries and yes company visiting to our campus. That what is about itm Tap cell heart of our institution. Training on most updated technology enhancing our technical skills.</p>
      <!-- Add more details as needed -->
    </div>
    <img src="https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Person Image">
  </div>
  </div>
            `,
        };

        sidebarLinks.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault();
            sidebarLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");

            const selectedContent = this.getAttribute("data-content");
            contentArea.innerHTML = content[selectedContent];
          });
        });
      });



      // script.js

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function initSlider() {
  // Show the first slide immediately
  slides[currentSlide].style.display = "block";

  // Hide all other slides
  slides.forEach((slide, index) => {
    if (index !== currentSlide) {
      slide.style.display = "none";
    }
  });
}

function showNextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";

  // Animate the coming slide from the right
  const comingSlide = slides[currentSlide];
  const animationDuration = 700; // Adjust as needed

  comingSlide.style.animation = `slideInFromRight ${animationDuration}ms`;
}

function showPrevSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";

  // Animate the coming slide from the left
  const comingSlide = slides[currentSlide];
  const animationDuration = 700; // Adjust as needed

  comingSlide.style.animation = `slideInFromLeft ${animationDuration}ms`;
}

function autoPlay() {
  setInterval(showNextSlide, 4000); // Change slide every 3 seconds
}

// Initial setup
initSlider();

// Event listeners
prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

// Start autoplay
autoPlay();

// Toggle play/pause function
function togglePlayPause(videoId) {
  var video = document.getElementById(videoId);
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Enter full-screen mode
function enterFullscreen(videoId) {
  var video = document.getElementById(videoId);
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    // Firefox
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    // Chrome and Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    // IE/Edge
    video.msRequestFullscreen();
  }
}
