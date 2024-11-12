function searchListings() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const listings = document.querySelectorAll('.listing-card');

    listings.forEach(listing => {
        const title = listing.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            listing.style.display = 'block';
        } else {
            listing.style.display = 'none';
        }
    });
}
