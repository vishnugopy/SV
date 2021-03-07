let contents = [

    {
        "id": "1",
        "type": "Font",
        "name" : "Masal vada",
        "img" : "imgs/masalvada.jpg",
        "file": "Files/MasalVada-Regular.rar",
        "description": "This font created by stupid version studio and all character are supported",
    },
    {
        "id": "2",
        "type": "Font",
        "name" : "KABAVI",
        "img" : "imgs/kabavifont.jpg",
        "file": "Files/KABAVI FONT.zip",
        "description": "This font created by stupid version studio and only Capitale character are supported",
    },
    {
        "id": "3",
        "type": "Font",
        "name" : "Gosta",
        "img" : "imgs/gosta.jpg",
        "file": "Files/Gosta font.zip",
        "description": "This font created by stupid version studio and only Capitale character are supported",
    },
    {
        "id": "4",
        "type": "Assets",
        "name" : "Foggy Brush",
        "img" : "imgs/fogy.jpg",
        "file": "Files/Fogy Brush.zip",
        "description": "This Assets created by stupid version studio . It support Adobe PhotoShop and Adobe Illustrator",
    },
    {
        "id": "5",
        "type": "Assets",
        "name" : "Facial Hair Brush",
        "img" : "imgs/hair.jpg",
        "file": "Files/Facial Hair For Beard.zip",
        "description": "This Assets created by stupid version studio . It support Adobe PhotoShop and Adobe Illustrator",
    }



]

let explorerSection = document.querySelector(".explorersection");
let blog = "" ;

for (let k = 0; k < contents.length; k++) {
    blog += `
    <div class="assetcsofcontents ${contents[k].type}" id="${contents[k].id}" >
    <img src="${contents[k].img}" alt="${contents[k].name}">
    <h2>${contents[k].name}</h2>
    <p>${contents[k].description}</p>
    <div class="butandtag">
    <span class="tags">${contents[k].type}</span>
    <a class="buttonassects" href="${contents[k].file}" download><i class="fas fa-download"></i></a>
    </div>
    </div>
    `
}

explorerSection.innerHTML = blog ;



//button to tags
let all = document.querySelector(".all");
let fonts = document.querySelector(".font");
let Assets = document.querySelector(".assets");
let allsource = document.querySelectorAll(".assetcsofcontents");

all.addEventListener("click" , () => {
    allsource.forEach(element => {
        if (element.classList.contains("assetcsofcontents")) {
            element.style.display ="block";
        }
    });
})

fonts.addEventListener("click" , () => {
    allsource.forEach(element => {
        if (element.classList.contains("Assets")) {
            element.style.display ="none";
        }else{
            element.style.display ="block";
        }
    });
    
})

Assets.addEventListener("click" , () => {
    allsource.forEach(element => {
        if (element.classList.contains("Font")) {
            element.style.display ="none";
        }else{
            element.style.display ="block";
        }
    });
})

