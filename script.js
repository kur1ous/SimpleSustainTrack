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