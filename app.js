let Contentshower = document.querySelector(".Contentshower");


//content shower
let number;
let imagearr = [];
for (let i = 1; i < 19; i++) {
    imagearr.push("Wallpapers/" + i + ".png")
    number = i;
}

imagearr.forEach(element => {
    let div = document.createElement("div");
    div.classList.add("Mainbox")
    div.innerHTML =
        `
    <figure class="wallpaper" id="${element.match(/\d+/)}">
    <img src="./${element}" alt="${element}" loading="lazy" >
    <figcaption>
        <h4>${"#Wallpaper_" + element.match(/\d+/) }</h4>
        <a class="buttondownload" href="${element}" download><i class="fas fa-download"></i></a>
    </figcaption>
    </figure>
    `
    Contentshower.appendChild(div);
});


let figure = document.querySelectorAll("figure");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");
let all = document.querySelector(".all");
let elementid;



light.addEventListener("click", () => {

    figure.forEach(element => {
        elementid = element.id % 2;
        // console.log(elementid);
        element.className="wallpaper";
        if (elementid == 1) {
            element.classList.toggle("hide");
        }
    });
})


dark.addEventListener("click", () => {

    figure.forEach(element => {
        elementid = element.id % 2;
        element.className="wallpaper";
        element.parentElement.className="Mainbox";
        if (elementid == 0) {
            element.classList.toggle("hide");
            element.parentElement.classList.toggle("hide");
            dark.classList.add("activebuttonsselecter")
            light.classList.remove("activebuttonsselecter")
            all.classList.remove("activebuttonsselecter")
        }
    });
})

light.addEventListener("click", () => {

    figure.forEach(element => {
        elementid = element.id % 2;
        element.className="wallpaper";
        element.parentElement.className="Mainbox";
        if (elementid == 1) {
            element.classList.toggle("hide");
            element.parentElement.classList.toggle("hide");
            light.classList.add("activebuttonsselecter")
            dark.classList.remove("activebuttonsselecter")
            all.classList.remove("activebuttonsselecter")
            
        }
    });
})

all.classList.add("activebuttonsselecter")
all.addEventListener("click", () => {

    figure.forEach(element => {
       element.classList.remove("hide");
       element.parentElement.classList.remove("hide");
       all.classList.add("activebuttonsselecter")
       dark.classList.remove("activebuttonsselecter")
       light.classList.remove("activebuttonsselecter")
    });
})


//loading screen
 let loading = document.querySelector(".loadingscreen");

 setInterval(() => {
   loading.style.display = "none";
 }, 2000);




