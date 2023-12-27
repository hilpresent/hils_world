document.getElementById('name').addEventListener('mouseover', function() {
    this.style.fontSize = '3em'; //enlarged font size
});

document.getElementById('name').addEventListener('mouseout', function() {
    this.style.fontSize = '2em'; //original font size
});