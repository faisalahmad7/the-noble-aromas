# The Noble Aromas

A modern frontend e-commerce demo for **The Noble Aromas**, built using React and Vite.

🌐 **Live Website:** https://thenoblearomaswebsite.vercel.app/

This project is a frontend-only implementation designed to showcase a perfume/fragrance shopping experience. It includes product browsing, product details, wishlist, shopping bag, and a demo login flow.

> **Note:** This is currently a frontend demo. There is no backend, database, real authentication, payment gateway, or real order processing.

## Tech Stack

* React
* Vite
* JavaScript
* HTML5
* CSS3

## Features

### Product Catalog

* 24 fragrance products
* 3 product combos
* Product categories and scent information
* Different available sizes
* Product pricing
* Product detail pages

### Shopping Bag

* Add products to bag
* Manage products stored in the browser
* Bag state persists locally in the browser

### Wishlist

* Add/remove products from wishlist
* Wishlist is stored locally in the browser

### Login

* Frontend-only login experience
* Login state is stored in the browser
* No real authentication or user accounts

### Product Pages

* Individual product pages
* Product information
* Scent notes
* Available sizes
* Pricing
* Add-to-bag functionality

### Checkout Demo

* Frontend checkout flow
* No real payments
* No real order creation
* No backend processing

### Responsive Design

* Designed for desktop and mobile screen sizes
* Section-based component structure
* Custom CSS styling

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Open the project in VS Code

Open the project folder in Visual Studio Code:

**File → Open Folder**

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open the displayed URL in your browser.

## Production Build

Create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
The-Noble-Aromas/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── logo.webp
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── data/
│   │   └── ...
│   │
│   ├── styles/
│   │   └── ...
│   │
│   ├── main.jsx
│   └── ...
│
├── dist/
├── package.json
├── package-lock.json
├── vite.config.js
├── wrangler.jsonc
└── README.md
```

## Data

The project currently contains frontend/demo data including:

* 24 products
* 3 product combos
* Fragrance/scent notes
* Product sizes
* Product constants
* Placeholder prices

The product data is located inside:

```text
src/data/
```

## Routing

The application uses hash-based routing.

Examples:

```text
#/                  Home
#shop               Shop
#/product/ID        Product details
```

## Browser Storage

Because this is a frontend-only demo, certain application states are stored locally in the user's browser:

* Shopping bag
* Wishlist
* Login state

No backend database is currently connected.

Clearing the browser's local storage may remove this locally stored information.

## Checkout

The checkout functionality is currently a demonstration only.

There is currently:

* No payment gateway
* No real payment processing
* No order database
* No backend order processing
* No real order confirmation system

## Deployment

The project is deployed as a live frontend website:

**Live Website:** https://thenoblearomaswebsite.vercel.app/

For a production build:

```bash
npm run build
```

The generated production files are located in:

```text
dist/
```

The project also contains a `wrangler.jsonc` configuration for Cloudflare deployment.

## Important Notes

The following information is currently placeholder/demo content:

* Product prices
* Shipping information
* Return policy
* Cash on Delivery information
* Other store policies

Before using the website for a real business, replace the placeholder information with the actual business policies.

## Future Improvements

Possible future improvements include:

* Backend integration
* Database integration
* Real user authentication
* Persistent user accounts
* Real order management
* Payment gateway integration
* Admin dashboard
* Inventory management
* Customer order history
* Product search and filtering
* Real shipping integration
* Email/order notifications

## Project Status

**Frontend Demo**

The project currently focuses on the frontend shopping experience and does not include backend or payment functionality.

## License

This project is currently intended for demonstration and development purposes.
