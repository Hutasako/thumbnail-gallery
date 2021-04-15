const bigImg = document.querySelector(".bigimg");
const theGallery = document.querySelector(`.gallery`)

// const clickedImg = document.querySelectorAll(".thumb").forEach(item =>{
//         item.addEventListener('click', ()=>{
//             console.log(`Source: ${item.getAttribute('src')}, Alt: ${item.getAttribute('alt')}`); 
//             bigImg.src =  item.getAttribute('src');
//             bigImg.alt = item.getAttribute('alt');
//     })
// })

const setThumb = function (event) {

    // target refers to what was under the mouse when this event occurred
   
    const whichOne = event.target
   
   
    if(whichOne.matches(`.thumb`)){
   
        let imgSrc = whichOne.getAttribute(`src`)
   
        let imgAlt = whichOne.getAttribute(`alt`)
       
       
        // Update the big image's attributes
       
        bigImg.setAttribute(`src`, imgSrc)
       
        bigImg.setAttribute(`alt`, imgAlt)
       
    }
   }
     
   // Listen to the entire gallery for a click
   
   theGallery.addEventListener(`click`, setThumb)