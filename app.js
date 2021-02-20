//nav bar
let header = document.querySelector("header");
let Contentshower = document.querySelector(".Contentshower")
header.innerHTML = 
`
<nav>
<a href="index.html"><div class="flex"><i class="tapbutton fas fa-mobile"></i><span> Home</span></div></a>
<a href="About.html"><div class="flex"><i class="tapbutton far fa-user-circle"></i><span> About</span></div></a>
<a href="https://teespring.com/stores/stupid-version-studio"><div class="flex"><i class="tapbut fas fa-shopping-basket"></i><span> Shop</span></div></a>
</nav>

`


//content shower
let number ;
let imagearr = [];
for (let i = 1; i < 15; i++) {
    imagearr.push("Wallpapers/" + i + ".png")
    number = i;
}

imagearr.forEach(element => {
    let figure = document.createElement("figure");
    figure.classList.add("wallpaper")
    figure.innerHTML =
    `
    <img src="./${element}" alt="${element}">
    <figcaption>
        <h4>${"Wallpaper_" + element.match(/\d+/)}</h4>
        <a class="buttondownload" href="${element}" download><i class="fas fa-download"></i></a>
    </figcaption>
 
    `
    Contentshower.appendChild(figure);
 });
