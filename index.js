//navigation smoother
function scrollToDiv(divId) {
    const element = document.getElementById(divId);
    if (element) {
        const yOffset = -50; // Offset to adjust for any fixed headers
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
function clubmeet(){
    window.location="https://spiffy-ganache-f29920.netlify.app";
}
function grow(){
    window.location="https://www.figma.com/file/lV8B8bUITsTAsA66H2PhBQ/Untitled?type=design&node-id=0-1&mode=design&t=uKjTsce5tPGS9IOm-0";
}
function videot(){
    window.location="https://youtu.be/6vOGbey0bJo";
}
function selectImage(imageId) {
    // Remove the class from the previously selected image
    var prevSelectedImageId = document.getElementById('navi1').textContent;
    if (prevSelectedImageId) {
      document.getElementById(prevSelectedImageId).classList.remove('navcolor');
    }

    // Add the class to the newly selected image
    var selectedImageDiv = document.getElementById('navi1');
    selectedImageDiv.textContent = imageId;
    var selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('navcolor');


}
function twit(){
    window.location="https://twitter.com/RishavRoy009";
}
function git(){
    window.location="https://github.com/rishavroy009";
}
function linked(){
    window.location="https://www.linkedin.com/in/rishavkrroy/";
}
function insta(){
    window.location="https://instagram.com/rishavroy009?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D";
}
//toggle dark and light
function toggleTheme() {
    var body = document.body;
var them=document.querySelector(".themei");
var car=document.querySelector(".card");
var maop=document.querySelector(".mail");
var spac=document.querySelector(".copy1");
var soc=document.querySelector(".social");
    // Toggle the class on the body element
    //body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    them.classList.toggle('themebuttonl');
    car.classList.toggle('cardshad');
    maop.classList.toggle('mailcolor');
    spac.classList.toggle('copy1light');
    soc.classList.toggle('sociallight');
  }
var loader=document.getElementById("preloader");
window. addEventListener ("load", function () {
    loader.style.display = "none"
    ;
})