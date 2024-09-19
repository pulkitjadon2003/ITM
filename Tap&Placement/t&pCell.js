
      document.addEventListener("DOMContentLoaded", function () {
        const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
        const contentArea = document.getElementById("content-area");

        const content = {
          about: `
              <div class="header-image">
                        <h1>TRAINING & PLACEMENT CELL</h1>
                    </div>
                    <!-- Content will be loaded here -->
                    <p>
                    ITM Gwalior has always given training, augmentation and placements an utmost priority and to implement it into action an exclusive training, augmentation and placement assistance cell (TAP) has been established with state–of-art facilities. The cell is headed by experienced professionals from Industry.
      
                    TAP Cell is responsible for conducting following activities in time bound schedules without violating the time table of university curriculum.
                  </p>
                  <h2>
                    <strong
                      >➤ Our mission</strong
                    >
                  </h2>
                  <p>
                    Our mission is to empower students by providing them with the necessary tools, resources, and guidance to secure rewarding career opportunities. We strive to foster strong relationships with industry partners and enhance our students' employability through rigorous training, workshops, and placement drives.
                  </p>
                  
                 
                  <h2>➤ Key Objectives</h2>
                 <p><strong>Career Guidance and Counselling:</strong>Offering personalized career counseling sessions to help students
                   identify their strengths, interests, and career aspirations.</p>
                   <p><strong>Skill Development Programs:</strong>Organizing workshops, seminars, and certification courses to enhance students' technical and soft skills.</p>
                    <p><strong>Industry Interaction:</strong>Facilitating regular interactions with industry experts, alumni, and recruiters to keep students updated on current industry trends and expectations.</p>
                      <p><strong>Placement Assistance:</strong>Coordinating with top companies to arrange campus recruitment drives, internships, and job placements.</p>
                        <p><strong>Resume Building and Interview Preparation:</strong> Assisting students in crafting impactful resumes and preparing for interviews through mock interview sessions and feedback.</p>
                 
      
                        <h2>➤ Services We Offer</h2>
                        <p><strong>Training Programs:</strong>Specialized training sessions focused on developing technical skills, communication abilities, and leadership qualities.</p>
                          <p><strong>Internships and Industrial Visits:</strong>Opportunities for students to gain hands-on experience and exposure to real-world industry environments.</p>
                             <p><strong>Placement Drives:</strong>Regular on-campus and off-campus recruitment drives with leading companies across various sectors.</p>
                               <p><strong>Career Counselling:</strong>One-on-one sessions with career advisors to discuss career paths, job opportunities, and further education options.</p>
                               <p><strong>Alumni Network:</strong>Leveraging our extensive alumni network to provide mentorship, networking opportunities, and career guidance to current students.</p>
                  
               `,
          policy: `
             <section class="policy-section">
                <h2>Internship Policy</h2>
                <table>
                    <thead>
                        <tr>
                            <th style='width:20%;'>Sr. No.</th>
                            <th>Internship Policy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td><a href="#" download="./placement-policy.pdf">Internship Policy and Formats</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="policy-section">
                <h2>Placement Policy</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Placement Policy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td><a href="#" download="./placement-policy.pdf">Placement Policy</a></td>
                        </tr>
                    </tbody>
                </table>
            </section>`,
          recruiters: `
           <div class="logo-grid">
                <!-- Example logo images -->
                <div class="logo-item"><img src="/images/capegmini.png" alt="Company 1"></div>
                <div class="logo-item"><img src="/images/celeb.png" alt="Company 2"></div>
                <div class="logo-item"><img src="/images/ibm.png" alt="Company 3"></div>
                <div class="logo-item"><img src="/images/icici.png" alt="Company 4"></div>
                <div class="logo-item"><img src="/images/infosys.png" alt="Company 5"></div>
                <div class="logo-item"><img src="/images/jtg.png" alt="Company 6"></div>
                <div class="logo-item"><img src="/images/juspay.png" alt="Company 7"></div>
                <div class="logo-item"><img src="/images/micron.png" alt="Company 8"></div>
                <div class="logo-item"><img src="/images/microsoft.png" alt="Company 9"></div>
                <div class="logo-item"><img src="/images/ola.png" alt="Company 10"></div>
                <div class="logo-item"><img src="/images/techout.png" alt="Company 11"></div>
                <div class="logo-item"><img src="/images/tejas.png" alt="Company 12"></div>
                <div class="logo-item"><img src="/images/thermax.png" alt="Company 13"></div>
                <div class="logo-item"><img src="/images/visa.png" alt="Company 14"></div>
                <div class="logo-item"><img src="/images/deltax.png" alt="Company 15"></div>
                <div class="logo-item"><img src="/images/vivo.png" alt="Company 16"></div>
                <div class="logo-item"><img src="/images/dxc.png" alt="Company 17"></div>
                <div class="logo-item"><img src="/images/axis.png" alt="Company 18"></div>
                <div class="logo-item"><img src="/images/genpact.png" alt="Company 19"></div>
                <!-- Add more logo items here -->
            </div>`,
          records: `
           <div class="record">
     <h2>LAST 5 YEARS PLACEMENT RECORDS & STATISTICS</h2>
            <h3>MADHAV INSTITUTE OF TECHNOLOGY & SCIENCE, GWALIOR (M.P.), INDIA</h3>
            <h4>Deemed University | NAAC ACCREDITED WITH A++ GRADE</h4>
            <table>
                <thead>
                    <tr>
                        <th>Year of Passout</th>
                        <th>Total Intake</th>
                        <th>Eligible Students</th>
                        <th>Company Visited</th>
                        <th>Total Placed</th>
                        <th>Highest Salary Offered (In Lacs per annum)</th>
                        <th>Average Salary Offered (In Lacs per annum)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2024</td>
                        <td>1200</td>
                        <td>1093</td>
                        <td>58</td>
                        <td>579**</td>
                        <td>11.0 LPA</td>
                        <td>5.31 LPA</td>
                    </tr>
                    <tr>
                        <td>2023</td>
                        <td>960</td>
                        <td>895</td>
                        <td>54</td>
                        <td>635</td>
                        <td>20.16 LPA</td>
                        <td>5.09 LPA</td>
                    </tr>
                    <tr>
                        <td>2022</td>
                        <td>990</td>
                        <td>845</td>
                        <td>55</td>
                        <td>759</td>
                        <td>1.0 Crore*</td>
                        <td>6.46 LPA</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>930</td>
                        <td>682</td>
                        <td>56</td>
                        <td>571</td>
                        <td>10.0 LPA</td>
                        <td>4.59 LPA</td>
                    </tr>
                    <tr>
                        <td>2020</td>
                        <td>930</td>
                        <td>734</td>
                        <td>43</td>
                        <td>526</td>
                        <td>14.35 LPA</td>
                        <td>5.78 LPA</td>
                    </tr>
                </tbody>
            </table>
            <div class="note">
                <p>*Highest CTC of Rs. 1.0 Cr and Rs. 40.0 LPA is not included in average salary offered.</p>
                <p>** Due to Market scenario 2024 batch placements are still going on</p>
            </div>
</div>
 <h2>LAST 3 YEARS INTERNSHIP RECORDS & STATISTICS</h2>
        <table class="internship-table">
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Year</th>
                    <th>Total No. of Student</th>
                    <th>No. of Student Done Internship</th>
                    <th>No. of Students received stipend</th>
                    <th>Highest Stipend Amount in Rs. (Per Month)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.</td>
                    <td>2024</td>
                    <td>975</td>
                    <td>873</td>
                    <td>311</td>
                    <td>1,10,000</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>2023</td>
                    <td>997</td>
                    <td>925</td>
                    <td>229</td>
                    <td>98,000</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td>2022</td>
                    <td>621</td>
                    <td>535</td>
                    <td>170</td>
                    <td>87,000</td>
                </tr>
            </tbody>
        </table>
        
        <table class="record-table">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Internship Record</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><a href="#">2021-22 Internship Report</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><a href="#">2022-23 Internship Report</a></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><a href="#">2023-24 Internship Report</a></td>
                </tr>
            </tbody>
        </table>
        `,
          alumni: `
           <section class="profiles">
        <div class="profile-card">
            <img src="profile1.jpg" alt="Profile 1">
            <div class="profile-text">
                <h2>Dr. Vijay Kumar Saraswat</h2>
                <h3>Member of NITI Aayog</h3>
                <p>Padma Shri (Prithvi Missile),<br> Padma Bhushan, Former Director-General, DRDO</p>
            </div>
        </div>
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
         <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div> 
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div> 
        <div class="profile-card">
            <img src="profile2.jpg" alt="Profile 2">
            <div class="profile-text">
                <h2>Dr. R K Shevgaonkar</h2>
                <h3>Former Director IIT Delhi</h3>
                <p>Former Vice Chancellor of University of Pune</p>
            </div>
        </div>
        <!-- Add more profile cards as needed -->
    </section>`,
          contact: `
    <div class="contact">
           <div class="contact-details">
            <img src="/images/arpit.jpeg" alt="image1">
             <div>
                 <div class="header">Mr. Arpit Singh Chauhan</div>
            <div class="sub-header">(Director TAP CELL I/C)</div>
             </div>
           </div>

                 <div class="contact-info">
    <div class="card">
              <div class="header">Address</div>
        <div class="content">Dept. of TAP, ITM, Gwalior (M.P.)</div>
    </div>

    <div class="card">
        <div class="header">Contact No:</div>
        <div class="content">+91-9691973919
        </div>
    </div>

    <div class="card">
        <div class="header">Email Id:</div>
        <div class="content">arpit.chauhan@itmuniversity.ac.in</div>
    </div>
                 </div>
        </div>
        <div class="contact">
           <div class="contact-details">
            <img src="/images/shikha.jpeg" alt="image1">
             <div>
                 <div class="header">Mrs. Shikha Sharma
                 </div>
            <div class="sub-header">(Asst. Director Placement)</div>
             </div>
           </div>

                 <div class="contact-info">
    <div class="card">
              <div class="header">Address</div>
        <div class="content">Dept. of TAP, ITM, Gwalior (M.P.)</div>
    </div>

    <div class="card">
        <div class="header">Contact No:</div>
        <div class="content"> +91-9229333335</div>
    </div>

    <div class="card">
        <div class="header">Email Id:</div>
        <div class="content">shikhasharma@itmuniversity.ac.in
        </div>
    </div>
                 </div>
        </div>
        <div class="contact">
        <div class="contact-details">
         <img src="/images/tania.jpeg" alt="image1">
          <div>
              <div class="header">Ms. Tania Das
              </div>
         <div class="sub-header">(Asst. Director Training)</div>
          </div>
        </div>

              <div class="contact-info">
 <div class="card">
           <div class="header">Address</div>
     <div class="content">Dept. of TAP, ITM, Gwalior (M.P.)</div>
 </div>

 <div class="card">
     <div class="header">Contact No:</div>
     <div class="content">  +91-9310433361
     </div>
 </div>

 <div class="card">
     <div class="header">Email Id:</div>
     <div class="content">taniadas.tap@itmuniversity.ac.in

     </div>
 </div>
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
