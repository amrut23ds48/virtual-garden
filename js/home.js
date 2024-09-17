// JavaScript for Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            tabLinks.forEach(item => item.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

// SearchBar
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('plant-search');
    const plantCards = document.querySelectorAll('.plant-card');

    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        plantCards.forEach(card => {
            const plantName = card.textContent.toLowerCase();
            if (plantName.includes(filter)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});