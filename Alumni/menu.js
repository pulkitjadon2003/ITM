document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar ul li p");
  const contentArea = document.getElementById("content-area");

  const content = {
    portal: `
       <p class="para">
         <b>Alumni of ITM Gwalior</b>
        <br> <br>

The alumni of ITM Gwalior represent a strong and dynamic community, spread across various industries and regions around the world. These former students have carried forward the institute’s legacy of excellence, making significant contributions to their respective fields, whether in engineering, management, entrepreneurship, or the public sector. They are known not only for their professional achievements but also for their commitment to giving back to the society and staying connected with the institution.
<br><br>
ITM Gwalior maintains a close relationship with its alumni, organizing regular events, meetups, and professional networking opportunities. Alumni play a vital role in mentoring current students, offering career guidance, and providing valuable industry insights. Their success stories serve as an inspiration to the student body, fostering a culture of ambition, innovation, and social responsibility.
<br><br>
The institute’s alumni network is one of its strongest assets, creating a bond between the past, present, and future students. Their continued engagement ensures that the ITM community grows stronger, helping to uphold the institute’s reputation as a premier center for education and research.
      </p>

  
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

<!-- Creative Image Collage -->
<div class="collage-container">
  <div class="collage-item1">
      <img src="./_DSC2825.JPG" alt="Image 1">
  </div>
  <div class="collage-item2">
      <img src="./DSC_0291.jpg" alt="Image 2">
  </div>
  <div class="collage-item3">
      <img src="./DSC_2299.JPG" alt="Image 3">
  </div>
  <div class="collage-item4">
      <img src="./DSC_2335.JPG" alt="Image 4">
  </div>
  <div class="collage-item5">
      <img src="./DSC_9772.JPG" alt="Image 5">
  </div>
  <div class="collage-item6">
      <img src="./alumin4.png" alt="Image 6">
  </div>
  <div class="collage-item7">
      <img src="./alumni2.png" alt="Image 7">
  </div>
  <div class="collage-item8">
      <img src="./alumni3.png" alt="Image 8">
  </div>
</div>
<div class="site-link">
<h2>For more details: </h2>
<a href="https://www.itmalumni.in">Click Here</a>
</div>

       
         `,

    mentor: `
     <div class="chapters">
  <h2>Alumni Meet Chapters</h2>
  <div class="links">
   <table>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Alumini Stories</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td>
                      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Mentorship%20Program/SACHIIN%20GUPTA.mp4">Mr. Sachiin Gupta, Engineering Manager, veritas Technologies Pune</a>
                      
                      </td>
                  </tr>
                    <tr>
                      <td>2.</td>
                      <td>
                      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Mentorship%20Program/KUNAL%20BHALLA.mp4" >Mr. Kunal Bhalla, Enterprise Daata Architect, Natwest Group</a>

                      </td>
                  </tr>
                    <tr>
                      <td>3.</td>
                      <td>
                      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Mentorship%20Program/JATIN%20SHRIVASTAVA.mp4">Mr. Jatin Shrivastava, Sr. Product Manager, Waisi Limited</a>
                      
                      </td>
                  </tr>
                
              </tbody>
          </table>

  </div>
</div>
    `,
    testimonials: `
    
     <div class="chapters">
  <h2>Alumni life Membership Video Testimonial</h2>
  <p>The Role of ITM Support in My Membership Decision:Alumini Stories</p>
  <table>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Alumini Stories</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td>
                      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/Ms%20Deepika%20Sharma.mp4">Ms. Deepika Sharma</a></td>
                  </tr>
                    <tr>
                      <td>2.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/Ms%20Deepika%20Sharma.mp4" >Mr. Abhishek Kumar</a>

                      </td>
                  </tr>
                    <tr>
                      <td>3.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/satyam%20gupta.mp4" >Mr. Satyam Gupta</a>
                      
                      </td>
                  </tr>
                  <tr>
                      <td>4.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Association%20Membership/kumar%20sanket.mp4" >Mr. Kumar Sanket</a>
      
                      
                      </td>
                  </tr>
              </tbody>
          </table>
</div>
 
  `,

    chapter: `

   
<div class="chapters">
  <h2>Alumni Meet Chapters</h2>
  <table>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Chapters</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1.</td>
                      <td><a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Meet%20All%20Three%20Chapter/Alumni%20Meet%202024%20Pune%20Chapter.mp4">Alumni Meet 2024 (Pune Chapter)</a></td>
                  </tr>
                    <tr>
                      <td>2.</td>
                      <td>
      <a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Meet%20All%20Three%20Chapter/Alumni%20Meet%202020%20Banglore%20Chapter.mp4" >Alumni Meet 2020 (Banglore Chapter)</a>
                      </td>
                  </tr>
                    <tr>
                      <td>3.</td>
                      <td><a href="https://www.itmgoi.in/alumni/Videos/Alumni%20Meet%20All%20Three%20Chapter/Alumni%20Meet%202019%20Delhi%20Chapter.mp4">Alumni Meet 2019 (Delhi Chapter)</a></td>
                  </tr>
              </tbody>
          </table>
</div>



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