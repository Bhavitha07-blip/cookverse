// 1. Contact Form Submission Logic
function submitForm() {
    const name = document.getElementById('name').value;
    const form = document.getElementById('contactForm');
    const successBox = document.getElementById('successMessage');
    const sound = document.getElementById('popupSound');

    // Hide the form and show the "Thank You" message
    form.style.display = "none";
    successBox.style.display = "block";
    
    // Play success sound
    if(sound) {
        sound.play();
    }

    console.log("Form successfully submitted by: " + name);
    return false; // Prevents page from refreshing
}

// 2. Recipe Search Filtering Logic
function searchRecipe() {
    let input = document.getElementById('recipeSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('recipe-card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        
        if (title.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// 3. Recipe Popup (Modal) Logic
function openPopup(id) {
    const modal = document.getElementById('recipeModal');
    const body = document.getElementById('popupBody');
    const data = document.getElementById(id);
    const sound = document.getElementById('popupSound');

    if(data) {
        body.innerHTML = data.innerHTML;
        modal.style.display = "flex";
        if(sound) sound.play();
    }
}

function closePopup() {
    document.getElementById('recipeModal').style.display = "none";
}

// Close Modal if user clicks outside the box
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Welcome log
window.onload = function() {
    console.log("CookVerse is live! Happy Cooking.");
};


