const arr=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": true,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const foodName=document.getElementById("name");
const rAbove=document.getElementById("ratingFourAbove");
const rBelow=document.getElementById("ratingFourBelow");

const searchBar=document.getElementById("searchBar");

const recipee=document.getElementById("recipe");

function renderJS(){
for(let i=0;i<arr.length;i++){
    let a=arr[i];
    const card=document.createElement("div");
    card.setAttribute("class","card");
    card.setAttribute("id",`${i}`);
    if(a.isLiked){
        card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="liked" id="likeMe" onclick="likeLe(event)"><img  src="./images/liked.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
    }
    else{
        card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="notliked" onclick="likeLe(event)"  id="unlikeMe"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
    }
    
    recipee.append(card);
}



}

renderJS();

function likeLe(event){
    
    const curr=event.target;
    const par=curr.parentElement;
    const newr=par.firstChild;
    const x=par.parentElement;
    const currcard=x.parentElement.parentElement.parentElement;
 
    let i=currcard.id;
    if(arr[i].isLiked){
        newr.setAttribute("src","./images/like.svg");
    }
    else{
        newr.setAttribute("src","./images/liked.svg");
    }
    arr[i].isLiked=!arr[i].isLiked;
   
}

// const likeChange=document.getElementById("likeMe");
// const likeChangeagain=document.getElementById("unlikeMe")
// likeChange.addEventListener("click",(event)=>{

//     console.log(event.target,"liked!");
// });
// likeChangeagain.addEventListener("click",(event)=>{
//     console.log(event.target,"unliked");
// });





searchBar.addEventListener("input",function(){

    let searchItem=searchBar.value.toLowerCase();
    let x=searchItem;

    while(recipee.firstChild){
        recipee.removeChild(recipee.firstChild);
    }


    for(let i=0;i<arr.length;i++){
        if(arr[i].name.toLowerCase().includes(x.toLowerCase())){

        
            let a=arr[i];
            const card=document.createElement("div");
            card.setAttribute("class","card");
            card.setAttribute("id",`${i}`);
            if(a.isLiked){
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="liked" id="likeMe" onclick="likeLe(event)"><img  src="./images/liked.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            else{
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="notliked" onclick="likeLe(event)"  id="unlikeMe"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            
            recipee.append(card);
    }
    }


});


//for liking




// for(button :likeButtons){
// likeButtons.addEventListener("click",function(){
//     console.log("clicke");
// });
// }


// for button click of search

function searchMe(){
    console.log(searchBar.value);
    let x=searchBar.value;

    while(recipee.firstChild){
        recipee.removeChild(recipee.firstChild);
    }
    console.log(recipee);

    for(let i=0;i<arr.length;i++){
        if(arr[i].name.toLowerCase().includes(x.toLowerCase())){
        
        
            let a=arr[i];
            const card=document.createElement("div");
            card.setAttribute("class","card");
            card.setAttribute("id",`${i}`);
            if(a.isLiked){
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="liked" id="likeMe" onclick="likeLe(event)"><img  src="./images/liked.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            else{
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="notliked" onclick="likeLe(event)"  id="unlikeMe"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            
            recipee.append(card);
    
    }
    console.log(recipee);
}
}


function onlyVeg(){

        while(recipee.firstChild){
                recipee.removeChild(recipee.firstChild);
            }
        
        for(let i=0;i<arr.length;i++){
            let a=arr[i];
            const card=document.createElement("div");
            card.setAttribute("class","card");
            card.setAttribute("id",`${i}`);
            if(a.isLiked){
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="liked" id="likeMe" onclick="likeLe(event)"><img  src="./images/liked.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            else{
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="notliked" onclick="likeLe(event)"  id="unlikeMe"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            
            recipee.append(card);
        }
}
function onlyNonVeg(){
    while(recipee.firstChild){
        recipee.removeChild(recipee.firstChild);
    }
    let x="non";
        for(let i=0;i<arr.length;i++){
            if(arr[i].type.toLowerCase().includes(x)){
            
            
                let a=arr[i];
                const card=document.createElement("div");
                card.setAttribute("class","card");
                card.setAttribute("id",`${i}`);
                if(a.isLiked){
                    card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="liked" id="likeMe" onclick="likeLe(event)"><img  src="./images/liked.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
                }
                else{
                    card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="notliked" onclick="likeLe(event)"  id="unlikeMe"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
                }
                
                recipee.append(card);
        }
        }
}





function showAll(){
    while(recipee.firstChild){
        recipee.removeChild(recipee.firstChild);
    }
   
        for(let i=0;i<arr.length;i++){
            let a=arr[i];
            let ze;
            
            if(a.isLiked)ze==true;
            
            const card=document.createElement("div");
            card.setAttribute("class","card");
            card.setAttribute("id",`${i}`);
            if(a.isLiked){
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="liked" id="likeMe" onclick="likeLe(event)"><img  src="./images/liked.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            else{
                card.innerHTML=`<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><button class="notliked" onclick="likeLe(event)"  id="unlikeMe"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></button></div></div></div>`
            }
            
            recipee.append(card);
        }
        }


//  checking raing toggel

rAbove.addEventListener("change",filterRecipesAbove);

rBelow.addEventListener("change",filterRecipesBelow);


function filterRecipesAbove() {
    console.log(this.checked);
    while (recipee.firstChild) {
      recipee.removeChild(recipee.firstChild);
    }
    if(this.checked){   
         for (let i = 0; i < arr.length; i++) {
      const a = arr[i];
      const rating =a.rating;
  
      if (this.checked && rating>=4) {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></div></div></div>`;
        recipee.append(card);
      }
      
        }
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            const a = arr[i];
            const rating =a.rating;
        
            if (this.checked && rating<4) {
              const card = document.createElement("div");
              card.setAttribute("class", "card");
              card.innerHTML = `<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></div></div></div>`;
              recipee.append(card);
            }
            
              }
    }
  }

 function filterRecipesBelow(){
    console.log(this.checked);
    while (recipee.firstChild) {
        recipee.removeChild(recipee.firstChild);
      }
      if(this.checked){
      for (let i = 0; i < arr.length; i++) {
        const a = arr[i];
        const rating =a.rating;
    
        if (this.checked && rating<4.0) {
          const card = document.createElement("div");
          card.setAttribute("class", "card");
          card.innerHTML = `<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></div></div></div>`;
          recipee.append(card);
        }
        
      }
    }
    else{
        for (let i = 0; i < arr.length; i++) {
            const a = arr[i];
            const rating =a.rating;
        
            if (this.checked && rating<4.0) {
              const card = document.createElement("div");
              card.setAttribute("class", "card");
              card.innerHTML = `<img src=${a.imageSrc} alt=""><div class="cardBody"><p class="vegornon">${a.type}</p><div class="c1"><h1 id="name">${a.name}</h1> <div class="c11"><img src="./images/Star.svg" alt=""><p id="ratings">${a.rating}</p></div></div><div class="c2"><h1 id="time">${a.time}</h1> <div style="display: flex;flex-direction: row; gap:10px"><img src="./images/like.svg" alt=""> <img src="./images/comments.svg" alt=""></div></div></div>`;
              recipee.append(card);
            }
            
          }
    }


 }
