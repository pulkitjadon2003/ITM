let main = document.querySelector('.content')

let content = [
    {heading:'DIGITAL COMMUNICATION LAB/ ANALOG COMMUNICATION LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture2.jpg'},
    {heading:'DIGITAL SIGNAL PROCESSING LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture1.jpg'},
    {heading:'ELECTRONICS CIRCUITS LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture2.jpg'},
    {heading:'ANALOG CIRCUITS LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture8.jpg'},
    {heading:'MINI PROJECT LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture3.jpg'},
    {heading:'OPTICAL COMMUNICATION LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture4.jpg'},
    {heading:'DIGITAL ELECTRONICS LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture7.jpg'},
    {heading:'MICROPROCESSOR AND MICRO CONTROLLER LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture.jpg'},
    {heading:'MICROWAVE & ANTENNA ENGINEERING LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture5.jpg'},
    {heading:'VLSI LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture6.jpg'},
    {heading:'ELECTRONIC MEASUREMENT & INSTRUMENTATION LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:''},
    {heading:'PCB DESIGN LAB',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Picture9.jpg'},

]

let data = ''
content.forEach((elem)=>{
    data += `<div class="card">
                <div class="card-content">
                    <h2 class="card-heading">${elem.heading}</h2>
                    <p class="card-paragraph">${elem.description}</p>
                </div>
                <div class="card-image">
                    <img src= '${elem.img}' alt="Card Image">
                </div>
            </div>`
})

main.innerHTML = data;