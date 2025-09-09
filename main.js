const loadCatagories = () => {
   fetch("https://openapi.programming-hero.com/api/categories")  
   .then((res) => res.json())
   .then((data) => displayCatagories(data.categories))
} 

const loadImg = (id) => { 
   loadSpiner(true)
   fetch(`https://openapi.programming-hero.com/api/category/${id}`) 
   .then((res) => res.json())
   .then((data) => {
        displayImg(data.plants) 
        loadSpiner(false) 
   })
} 


