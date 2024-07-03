document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const searchInput = document.getElementById('search-input');
const searchCloseBtn = document.getElementById('search-close-btn');

function showSearchBar() {
    searchBar.style.display = 'block';
    searchInput.focus();
}

function hideSearchBar() {
    searchBar.style.display = 'none';
    searchInput.value = '';
}

searchIcon.addEventListener('click', showSearchBar);

searchCloseBtn.addEventListener('click', hideSearchBar);

window.addEventListener('click', function(event) {
    if (event.target !== searchIcon && event.target !== searchInput) {
        hideSearchBar();
    }
});