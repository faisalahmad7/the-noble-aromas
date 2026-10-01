# The Noble Aromas — Perfume Store

A modern, responsive e-commerce frontend for **The Noble Aromas**, a perfume and fragrance brand. Built with React and Vite, the website provides a smooth shopping experience with product browsing, product details, wishlist, shopping bag, and a demo checkout flow.

## 🌐 Live Website

Visit the live website: [**The Noble Aromas**](https://thenoblearomaswebsite.vercel.app/)

## ✨ Features

* **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
* **Product Catalog:** Browse a collection of perfumes and fragrance products.
* **Product Details:** Dedicated pages with product information, scent notes, sizes, and pricing.
* **Product Combos:** Dedicated fragrance combo offerings.
* **Shopping Bag:** Add products, manage quantities, and view selected items.
* **Wishlist:** Save favorite products for later.
* **Frontend Login:** Demo login functionality handled entirely in the browser.
* **Demo Checkout:** Frontend checkout experience for demonstration purposes.
* **Hash-Based Routing:** Lightweight routing without requiring a backend router.
* **Reusable Components:** Modular React components for easier maintenance and development.
* **Local Browser Storage:** Bag, wishlist, and login state are stored locally in the browser.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Build Tool:** Vite
* **Language:** JavaScript
* **Styling:** CSS
* **Routing:** Custom hash-based routing
* **Package Manager:** npm
* **Development:** VS Code, Git, GitHub
* **Deployment:** Vercel

## 📁 Project Structure

```text
The-Noble-Aromas/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.webp
│   ├── components/       # Reusable UI components
│   ├── data/             # Products, combos, scent notes and constants
│   ├── styles/           # Section-based CSS files
│   └── main.jsx          # Application entry point
├── package.json
├── package-lock.json
├── vite.config.js
├── wrangler.jsonc
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git
* Visual Studio Code

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd The-Noble-Aromas
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   ```text
   http://localhost:5173
   ```

## ⚙️ Customization

The project is organized into reusable components and centralized data files to make future updates easier.

* **Products & Combos:** Update files inside `src/data/`.
* **Product Information:** Modify product names, descriptions, scent notes, sizes, and pricing in the relevant data files.
* **Components:** Modify or add reusable components inside `src/components/`.
* **Styling:** Update the CSS files inside `src/styles/`.
* **Logo & Assets:** Manage visual assets inside `src/assets/`.
* **Application Entry:** `src/main.jsx` handles the main application setup.

## 🛍️ Product Catalog

The current demo includes:

* **24 perfume/fragrance products**
* **3 fragrance combos**
* Scent notes and fragrance information
* Multiple product sizes
* Product pricing
* Individual product pages

The current product information and prices are for demonstration purposes.

## 🧭 Routing

The website uses lightweight hash-based routing.

Examples:

```text
#/                    Home
#shop                 Shop
#/product/ID          Product Details
```

This approach allows the frontend to handle multiple views without requiring a separate backend routing system.

## 💾 Browser Storage

This project currently uses browser storage for frontend functionality.

The following information is stored locally:

* Shopping bag
* Wishlist
* Login state

No user accounts or server-side database are currently connected.

Clearing the browser's local storage may remove this information.

## 💳 Checkout

The checkout functionality is currently a frontend demonstration.

The project does not currently include:

* Real payment processing
* Payment gateway integration
* Backend order processing
* Order database
* Real order confirmation
* Customer account management

These features can be integrated in a future backend implementation.

## 📦 Production Build

To generate an optimized production build, run:

```bash
npm run build
```

The production-ready files will be generated in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

The website is currently deployed on **Vercel**.

Live website:

[**https://thenoblearomaswebsite.vercel.app/**](https://thenoblearomaswebsite.vercel.app/)

The project also includes a `wrangler.jsonc` configuration for Cloudflare deployment.

## ⚠️ Important Notes

This project is currently a **frontend demo**.

The following information may contain placeholder/demo content:

* Product prices
* Shipping information
* Return policies
* Cash on Delivery information
* Other store policies

Actual business policies should be confirmed and updated before using the website for a production e-commerce store.

## 🔮 Future Improvements

Potential future improvements include:

* Backend integration
* Database integration
* Real user authentication
* Customer accounts
* Persistent order history
* Payment gateway integration
* Order management
* Admin dashboard
* Inventory management
* Product search and filtering
* Shipping integration
* Email notifications
* Customer reviews and ratings

## 📄 License

This project was developed as a frontend demonstration for **The Noble Aromas**.

Contact the repository owner for information regarding reuse, modification, or distribution.

