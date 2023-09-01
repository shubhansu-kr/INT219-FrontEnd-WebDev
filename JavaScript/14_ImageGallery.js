const imageDiv = document.querySelectorAll(".imgStyle");

const mainDiv = document.getElementById("mainImage");

const set = (e)=>{
    const src = e.target.getAttribute("src");
    mainDiv.src = src;
    console.log(src);
}

imageDiv.forEach((e)=>{
    e.addEventListener("click", set);
})