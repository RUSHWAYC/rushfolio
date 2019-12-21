function scrollDown() {
    var elmnt = document.getElementById("content");
    elmnt.scrollIntoView({block: 'start', behavior: 'smooth'});
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed!";
  }