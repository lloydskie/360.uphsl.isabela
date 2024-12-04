/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Add or remove 'show-menu' class to nav menu
        nav.classList.toggle('show-menu');
        // Add or remove 'show-icon' to toggle icon (to change hamburger to close icon)
        toggle.classList.toggle('show-icon');
    });
};

showMenu('nav-toggle', 'nav-menu');

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item');

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button'); 

    // 2. Select the dropdown button and handle click event
    dropdownButton.addEventListener('click', () => {
        // 7. Select the current show-dropdown class
        const showDropdown = document.querySelector('.show-dropdown');
        
        // 5. Call the toggleItem function to toggle current dropdown visibility
        toggleItem(item);

        // 8. Remove the show-dropdown class from other items
        if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown);
        }
    });
});

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
    // 3.1. Select the dropdown content for this item
    const dropdownContainer = item.querySelector('.dropdown__container');

    // 6. Toggle dropdown visibility
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.style.height = '0';  // Collapse dropdown
        item.classList.remove('show-dropdown');
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';  // Expand dropdown
        item.classList.add('show-dropdown');
    }
};

/*=============== DELETE DROPDOWN STYLES ON RESIZE ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainers = document.querySelectorAll('.dropdown__container');

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query matches the required size (desktop mode)
    if (mediaQuery.matches) {
        // Remove the inline height style from dropdown containers
        dropdownContainers.forEach((e) => {
            e.removeAttribute('style');
        });

        // Remove the show-dropdown class from dropdown items
        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown');
        });

        // Ensure nav menu is visible on large screens (no hamburger needed)
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }
};

// Apply the resize listener to adjust dropdowns on window resize
window.addEventListener('resize', removeStyle);

// Initially run the removeStyle function to handle any preloaded conditions
removeStyle();
