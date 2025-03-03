// Function to calculate carbon footprint and animate the tree
function calculateFootprint() {
    // Calculate carbon footprint
    const distance = parseFloat(document.getElementById('distance').value) || 0;
    const footprint = distance * 0.1;
    document.getElementById('result').innerHTML = `Carbon Footprint: ${footprint.toFixed(2)} kg CO2`;

    // Reset all leaves
    const leaves = document.querySelectorAll('.leaf');
    leaves.forEach(leaf => {
        leaf.classList.remove('falling');
    });

    // Determine number of falling leaves based on footprint
    let numFalling;
    if (footprint < 10) {
        numFalling = 0;        // Low impact: no leaves fall
    } else if (footprint < 50) {
        numFalling = 3;        // Medium impact: 3 leaves fall
    } else {
        numFalling = 6;        // High impact: 6 leaves fall
    }

    // Make the first numFalling leaves fall with random rotation
    for (let i = 0; i < numFalling && i < leaves.length; i++) {
        const rotation = Math.random() * 180 - 90; // Random rotation between -90 and 90 degrees
        leaves[i].style.setProperty('--rotation', `${rotation}deg`);
        leaves[i].classList.add('falling');
    }
}

// Fetch and display sustainability news
fetch('https://newsapi.org/v2/everything?q=sustainability%20OR%20environment%20OR%20%22climate%20change%22&language=en&pageSize=10&apiKey=f3d8d90a61af4757a0c86708315d463e')
  .then(response => response.json())
  .then(data => {
    const headlines = data.articles.map(article => article.title).join(' • ');
    document.querySelector('.news-content').textContent = headlines;
  })
  .catch(error => {
    document.querySelector('.news-content').textContent = 'Unable to fetch news.';
  });