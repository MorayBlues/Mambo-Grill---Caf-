# Mambo Grill & Café Website

A responsive, static website designed for **Mambo Grill & Café**, a local restaurant based in Ruai, Nairobi. The website showcases the menu, restaurant features, image gallery, location details, and direct ordering options via WhatsApp.

##  Project Structure

```
Mambo Grill & café/
│
├── js/
│   └── script.js          # Main JavaScript file handling interactive features
│
├── styles/
│   └── styles.css         # Main stylesheet containing layout and styling
│
├── images/                # Folder containing dish, interior, exterior, and gallery images
│   └── gallery/           # Subfolder for gallery page images
│
├── index.html             # Homepage
├── menu.html              # Interactive Menu page with category filters
├── about.html             # About Us page
├── gallery.html           # Photo gallery page
├── contacts.html          # Contact details and Google Maps integration
└── README.md              # Project documentation

```

##  Features

* **Responsive Mobile Navigation:** Hamburger menu designed for seamless browsing on smaller screens.

* **Interactive Menu Filtering:** Dynamic filtering on the `menu.html` page to easily toggle between categories (*Breakfast, Main Meals, Grill, Drinks*).

* **Lightbox Image Viewer:** Built-in modal dialog using JavaScript to enlarge food and interior photos when clicked.

* **WhatsApp Integration:** Floating WhatsApp action button and direct ordering links pre-filled with item names for effortless customer engagement.

* **Embedded Location Map:** Integrated Google Maps location on the Contact page.

* **Accessible Design:** Features keyboard navigation outlines and ARIA attributes for enhanced accessibility.

##  Built With

* **HTML5:** Semantic layout and accessible elements (e.g., `<dialog>`, `<nav>`, `<article>`, `<section>`).

* **CSS3:** Custom properties (CSS variables), CSS Grid, Flexbox, and media queries for custom styling and responsiveness.

* **JavaScript (Vanilla ES6+):** Dynamic DOM manipulation for menu filtering, navigation toggles, and modal lightboxes.

* **Font Awesome:** Icons for social media links and mobile menu triggers.

* **Google Fonts:** Custom typography (*Oswald* for headers, *Work Sans* for body text).

##  How to Run locally

1. **Clone or Download the Repository:**

   ```
   git clone https://github.com/your-username/mambo-grill-cafe.git
   
   ```

2. **Open the Project:**
   Navigate into the project folder and open `index.html` in your web browser.

3. **Using Live Server (VS Code):**

   * Install the **Live Server** extension in VS Code.

   * Right-click `index.html` and select **"Open with Live Server"**.

##  License

This project is released under the MIT License.