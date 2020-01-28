function onHover(i) {
  const array = ["nav-stories", "nav-that", "nav-create", "nav-connections"];
  const strings = ["MY CODING STORY", "LANGUAGES THAT I KNOW", "PROJECTS I CREATED", "MY CONNTACT INFO"];
  const bckgUrls = ["url('images/bckgy.png", "url('images/bckglb.png')", "url('images/bckgp.png')", "url('images/bckgo.png')"];
  var idvar = document.getElementById(array[i]);
  idvar.innerHTML = `${strings[i]}`;
	document.getElementById("bckgimg").style.backgroundImage = `${bckgUrls[i]}`;
 }
 
function outHover(i) {
  const array = ["nav-stories", "nav-that", "nav-create", "nav-connections"];
  const strings = ["STORIES", "THAT", "CREATE", "CONNECTIONS"];
  var idvar = document.getElementById(array[i]);
  idvar.innerHTML = `${strings[i]}`;
	document.getElementById("bckgimg").style.backgroundImage = "url('images/bckg.png')";
 }