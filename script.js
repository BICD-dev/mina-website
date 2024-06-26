//sidebar code
//selecting relevant elements
let btn = document.querySelector(".open");
let sidebar = document.querySelector(".sidebar");
let close = document.querySelector(".close");
//event listener 
btn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close")
    })

//intersection observer
//selecting relevant elements
let ceramic = document.querySelector(".ceramic");
let bestseller = document.querySelector(".bestseller");
let decor = document.querySelector(".decor");
let quality = document.querySelector(".quality");
let news = document.querySelector(".news");
let instagram = document.querySelector(".instagram");
let footer = document.querySelector(".footer");
//function...
const callbackFunction = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.className == "ceramic" || "bestseller" || "quality" || "decor" ||  "news" || "instagram" || "footer"){
                entry.target.classList.add("loaded")
            }
        }
    });
}
let observer = new IntersectionObserver(callbackFunction,{
    threshold:0.1
})

observer.observe(ceramic);
observer.observe(bestseller);
observer.observe(decor);
observer.observe(quality);
observer.observe(news);
observer.observe(instagram);
observer.observe(footer);
