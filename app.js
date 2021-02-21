let Contentshower = document.querySelector(".Contentshower")

//content shower
let number ;
let imagearr = [];
for (let i = 1; i < 19; i++) {
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

