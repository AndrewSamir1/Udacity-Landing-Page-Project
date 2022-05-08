let sections = document.querySelectorAll("section") //Selectiong Sections
let navigationList = document.querySelector("#navbar__list") //Selectiong Navigation Bar
let listArray = []; //Creating array to store sections in navbar
let sectionHeader = document.querySelectorAll('h2'); //select all h2

for(let i = 0 ; i<sections.length ; i++)
{
        listArray[i] = document.createElement("li"); //Creating new list
        listArray[i].append(`Section ${i + 1}`); //Filling list with text coressponding to section
        listArray[i].style.color = "black"; //Making text color black to be visible
        listArray[i].style.padding = "10px 10px" //Add padding to nav items
        listArray[i].setAttribute("class" , 'navItem'); //Add class to nav item
        listArray[i].setAttribute("id" , `navSection${i+1}`); //Add ID to nav item
        navigationList.appendChild(listArray[i]); //Appending the list the the navigation bar
        listArray[i].addEventListener('click', function(){ //Adding event listener to each nav item
            sections[i].scrollIntoView({ behavior: 'smooth'}); //scrolling into coresponding section
        })
}

for(let i = 0 ; i<sections.length ; i++) //styling for hovering mouse
{
    listArray[i].addEventListener("mouseover", function(){
        listArray[i].style.backgroundColor = "rgb(71, 71, 71)";
        listArray[i].style.color= "yellow";
    })
    listArray[i].addEventListener("mouseleave", function(){
        if( isSectionActive(sections[i]) === false ) //if condition to prevent hovering from destroying the active style
        {
            listArray[i].style.backgroundColor = "white";
            listArray[i].style.color= "black";
        }
        
    })
}

let isSectionActive = function(section) //Function to check if section is active
{
    let result = section.getBoundingClientRect().top; //function that return the coordinates of Y axis
    if( result <=100 && result >= -100 ) //Range where the function is true
        return true;
    else 
        return false;
}

let activeStatus = function() //function that handles the active class
{
    for(let i = 0 ; i<sections.length ; i++){ //loop over the sections
        
            if( isSectionActive(sections[i]) === true ) //if the looped over section is active
            {
                if(sections[i].classList.contains("your-active-class") === false) // if it doesn't contain active class
        {
            sections[i].classList.add("your-active-class") //add it
            listArray[i].style.color= "yellow"; //highlight nav item
            listArray[i].style.backgroundColor = "rgb(71, 71, 71)"; //highlight nav item background
            sectionHeader[i].style.color= "yellow"; //highlight section title
        }
            }
            else
            {
                sections[i].classList.remove("your-active-class") //remove active class if section is not active
                listArray[i].style.color= "black"; //remove highlight
                listArray[i].style.backgroundColor = "white"; //remove highlight
                sectionHeader[i].style.color= "white"; //remove highlight
            }
        }
}

document.addEventListener('scroll', activeStatus); //event listener to whole document for active statuts