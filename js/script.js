const clickedImg = document.querySelectorAll(".thumb");
const bigImg = document.querySelector(".bigimg");

clickedImg.forEach(item =>{
        item.addEventListener('click', ()=>{
            console.log(`Source: ${item.src}, Alt: ${item.alt}`); 
            bigImg.src =  item.src;
            bigImg.alt = item.alt;
    })
})