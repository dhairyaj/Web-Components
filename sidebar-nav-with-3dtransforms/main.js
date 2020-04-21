//Create a function to select the elements
const selectElement = (element) => document.querySelector(element);

//Call selectElement  function 
const header = selectElement('header');
const mainContent = selectElement('main');

//Click event on hamburger menu to trigger the change
selectElement('.ham').addEventListener('click',() =>{
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
});

//Close sidebar when clicking outside
window.onclick = (event)=> {
    if(event.target.matches('.active')){
     
        if(header.classList.contains('active')){
            header.classList.remove('active');
            mainContent.classList.remove('active');
        }
    }
};