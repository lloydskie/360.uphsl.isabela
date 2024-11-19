const imageMapContainer = document.querySelector('.image-map-container');
const image = imageMapContainer.querySelector('img');
const areas = imageMapContainer.querySelectorAll('area');
const overlay = imageMapContainer.querySelector('svg');

// Adjust SVG to match the image's dimensions
const resizeOverlay = () => {
    overlay.style.width = ${ image.offsetWidth } px;
    overlay.style.height = ${ image.offsetHeight } px;
    overlay.setAttribute('viewBox', 0 0 ${ image.naturalWidth } ${ image.naturalHeight });
};

// Resize overlay when the image is loaded or resized
if (image.complete) {
    resizeOverlay();
} else {
    image.addEventListener('load', resizeOverlay);
}
window.addEventListener('resize', resizeOverlay);

// Create polygons for each area
areas.forEach((area) => {
    const coords = area.getAttribute('coords');
    const points = coords.split(',').join(' ');

    // Create a polygon
    const polygon = document.createElementNS('(link unavailable)', 'polygon');
    polygon.setAttribute('points', points);
    overlay.appendChild(polygon);

    // Add hover effects
    area.addEventListener('mouseover', () => {
        polygon.classList.add('active');
    });
    area.addEventListener('mouseout', () => {
        polygon.classList.remove('active');
    });
});
