const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-mug-hot'
}

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

//overlay.addEventListener('click', () => {
 //   const modals = document.querySelectorAll('.modal.active');
   // modals.forEach(modal => {
     //   closeModal(modal);
    //});
//});

function openModal(modal){
    if(modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");

    async function updateQuote() {
      // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        cite.textContent = data.author;
    } else {
        quote.textContent = "An error occured";
        console.log(data);
    }
    }

    // Attach an event listener to the button
    button.addEventListener("click", updateQuote);

    // call updateQuote once when page loads
    updateQuote();
});

var icon = document.getElementById("icon");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark_theme");
    icon.src = "images/sun.png";
} else {
    document.body.classList.remove("dark_theme");
    icon.src = "images/moon.png";
}

icon.onclick = function(){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon.src = "images/sun.png";
        localStorage.setItem("theme", "dark");
    }
    else{
        icon.src = "images/moon.png";
        localStorage.setItem("theme", "light");
    }
}