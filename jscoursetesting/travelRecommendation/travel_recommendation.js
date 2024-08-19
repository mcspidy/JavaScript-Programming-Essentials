document.getElementById('nav-toggle').addEventListener('click', function() {
    var links = document.querySelectorAll('.nav-link, #search-bar, #search-button, #reset-button');
    for (var i = 0; i < links.length; i++) {
        if (links[i].style.display === 'block') {
            links[i].style.display = 'none';
        } else {
            links[i].style.display = 'block';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const resetButton = document.getElementById('reset-button');
    const searchInput = document.getElementById('search-bar');

    let travelData = [];
    let data = [];

    fetchData().then(data => {
        travelData = data;
    });

    searchButton.addEventListener('click', () => {
        const keyword = searchInput.value;
        handleSearch(travelData, keyword);
    });

    resetButton.addEventListener('click', () => {
        const resultsContainer = document.getElementById('result');
        resultsContainer.innerHTML = ''; // Clear results
        searchInput.value = ''; // Clear search input
    });
});


async function fetchData() {
    const response = await fetch('https://raw.githubusercontent.com/mcspidy/JavaScript-Programming-Essentials-Final/coursera/travelRecommendation/travel_recommendation_api.json');
    const data = await response.json();
        return data;
};

function handleSearch(data, keyword) {
    const normalizedKeyword = keyword.toLowerCase();
    Object.keys(data).forEach(key => {
        //console.log(`${key}: ${data[key]}`);
        
        if (key === 'countries') {
            const results = data[key].filter(item => {
                const name = item.name.toLowerCase();
                if (name === normalizedKeyword || normalizedKeyword.startsWith('count', 0)) {
                    displayResults(item.cities);
                };
            });
        } else {
            if (key === "beaches") {
                if (key === normalizedKeyword || normalizedKeyword.startsWith('beach', 0)) {
                    displayResults(data[key]);
                };
            } else {
                if (key === "temples") {
                    if (key === normalizedKeyword || normalizedKeyword.startsWith('temp', 0)) {
                        displayResults(data[key]);
                    };
                }
            }
        }

    });
}

function displayResults(results) {
    const resultsContainer = document.getElementById('result');
    resultsContainer.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const img = document.createElement('img');
        img.src = result.imageUrl; // Replace with your own images
        img.alt = result.name;

        const name = document.createElement('h3');
        name.textContent = result.name;

        const description = document.createElement('p');
        description.textContent = result.description;

        resultItem.appendChild(img);
        resultItem.appendChild(name);
        resultItem.appendChild(description);

        resultsContainer.appendChild(resultItem);
   });
}


function booknow() {
    alert('Thank you for Booking with us!')
}
