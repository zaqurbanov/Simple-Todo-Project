


    //   Choose li element  
let listItem = document.getElementsByClassName("list-item");

    // Delete Button
let button = document.getElementsByClassName("delete");

    // list item text
let p = document.getElementsByClassName("list-item-text");

    // List container
let listContainer = document.getElementById("list-container");

// input 
let input = document.getElementById("input");

// add button
let add = document.getElementById("add")

let i = 1;





add.addEventListener("click",function(e){
    e.preventDefault()

        if(input.value=="")return;
        // create new li element and add own class 
        let liElement = document.createElement("li");
        liElement.classList.add("list-item");

        // create new p element and add own class
        let pElement = document.createElement("p");
        pElement.textContent = i+ ") "+ input.value;
        pElement.classList.add("list-item-text");

        // create new delet button and add class
        let buttonElement = document.createElement("button");
        buttonElement.textContent = "X";
        buttonElement.classList.add("delete");
       
        
        //  we added p element inside the li element
        liElement.appendChild(pElement);
        //  we added button element inside the li element
        
        liElement.appendChild(buttonElement);
        // we use insert before method
        // we added li element inside the list container 
        // we added first
        listContainer.insertBefore(liElement,listContainer.firstChild);

        i++;
        
        emptyInput();

        buttonElement.addEventListener("click",function(){
            liElement.remove();
            i--;
        })

        pElement.addEventListener("click",function(){
            pElement.classList.toggle("active");

        })

console.log(i)
})
let pArray = Array.from(p);
let buttonArray = Array.from(button);
buttonArray.forEach(item =>{
    item.addEventListener("click",function(){
        item.parentElement.remove();
        

    })

})

pArray.forEach(item=>{
    item.addEventListener("click",function(){
        item.classList.toggle("active")


    })

})  

function emptyInput(){
    input.value = ""
}
