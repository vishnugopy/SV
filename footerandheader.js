//nav bar
let header = document.querySelector("header");
header.innerHTML = 
`
<nav>
<a href="index.html"><div class="flex"><i class="tapbutton fas fa-mobile"></i><span> Home</span></div></a>
<a href="About.html"><div class="flex"><i class="tapbutton far fa-user-circle"></i><span> About</span></div></a>
<a href="https://teespring.com/stores/stupid-version-studio"><div class="flex"><i class="tapbut fas fa-shopping-basket"></i><span> Shop</span></div></a>
</nav>

`

 //footer
 let footer = document.querySelector("footer");
 footer.innerHTML = 
 `
 <div>
    <a href="mailto:stupidversion@gmail.com" target="_blank"><i class="fab fa-google"></i></a>
    <a href="https://www.instagram.com/stupid_version_studio/?hl=fr" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://play.google.com/store/apps/dev?id=7891379765966516089" target="_blank"><i class="fab fa-google-play"></i></a>
</div>
   <p>&copy;Stupid_Version_studio_2020</p>
 `

 let homebutton = document.querySelector("nav a:nth-child(1)")
 let aboutbutton = document.querySelector("nav a:nth-child(2)")
 if (window.location.href.indexOf("index") > -1) {
    homebutton.classList.add("activebutton");
 } else if (window.location.href.indexOf("About") > -1){
    aboutbutton.classList.add("activebutton");
 }