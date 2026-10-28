// Manipulating the hamburger menu button

const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelector('.nav_links');
navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
});

// Manipulating the Menu filter buttons

const filterButtons = document.querySelectorAll('.filter_btn');
const menuItems = document.querySelectorAll('.menu_item');
const sections = document.querySelectorAll('main section');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        menuItems.forEach(item => {
            const matches = filter === 'all' || item.getAttribute('data-category') === filter;
            item.classList.toggle('is_hidden', !matches);
        });
        sections.forEach(section => {
            const visibleItems = section.querySelectorAll('.menu_item:not(.is_hidden)');
            section.classList.toggle('is_hidden', visibleItems.length === 0);
        });    
        filterButtons.forEach(btn => {
             btn.classList.toggle('is_active', btn === button);
             btn.setAttribute('aria-pressed', btn === button);
        });   
        });
});

// Creating a lightbox for the menu images

const lightbox = document.createElement('dialog');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
<button type="button" class="lightbox_close" aria-label="Close image">&times;</button>
<img src="" alt="" />
<p class="lightbox_caption"></p>
`;
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox_caption');
document.querySelectorAll('.menu_item img, main figure img, .restaurant_space img, .favourite_dish img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.alt;
        lightbox.showModal();
    });
});
lightbox.querySelector('.lightbox_close').addEventListener('click', () => {
    lightbox.close()
})
lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        lightbox.close();
    }
});