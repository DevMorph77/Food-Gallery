# Food-Gallery

**Food-Gallery** is a React-based web application that allows users to browse a collection of foods. Users can view food items in a gallery and click on individual items to see more detailed information. The project uses **React Router** for navigation and fetches food data from an external API.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Displays a list of food items in a card format.
- Detailed view of each food item with additional information.
- Error handling and loading states for fetching data.
- Clean and responsive UI using TailwindCSS (or similar styling if used).
- Routing between different views using **React Router**.

---

## Project Structure with relevant parts

```
.
├── public/                 # Static assets
├── src/                    # Source files
│   ├── components/         # Reusable components
│   │   ├── FoodCard.js     # Component to display food items in a card layout
│   │   ├── FoodDetails.js  # Component to display detailed information about a selected food item
│   │   └── Nav.js          # Navigation bar component
│   ├── service/            # API services for fetching data
│   │   └── index.js        # Contains fetchFoods and fetchFoodById functions
│   ├── App.js              # Main application component with routing logic
│   ├── index.js            # Entry point for the React app
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

---

## Installation

### Prerequisites

- **Node.js** and **npm** installed.

### Clone the Repository

```bash
git clone https://github.com/yourusername/food-gallery.git
cd food-gallery
```

### Install Dependencies

```bash
npm install
```

---

## Usage

### Running the App

To start the development server:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Components Overview

### **FoodCard Component**

- Displays a list of foods fetched from the API in a grid of cards.
- Each card shows minimal information like the food name and an image (if available).

### **FoodDetails Component**

- Displays detailed information about a specific food item.
- Accessed by clicking on a food card, routed via `food/:id`.
- Fetches additional information from the local state or API if necessary.

### **Nav Component**

- A simple navigation bar that could include links to the home page or other sections of the site.

---

## API Integration

### Fetching Data

The application fetches food data from an external service using the functions `fetchFoods` and `fetchFoodById`, which are located in the `service/` directory.

- **`fetchFoods()`**: Retrieves a list of food items.
- **`fetchFoodById(id)`**: Fetches detailed information for a specific food item based on its ID.

### Error Handling

- If data fetching fails, an error message is displayed to the user.
- The app includes loading states while the data is being fetched.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

