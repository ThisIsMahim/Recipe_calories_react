# Recipe Discovery Website

A vibrant recipe discovery platform where users can explore, bookmark, and cook various dishes. This site offers recipe details, including ingredients, cooking time, calories, and more, making it a one-stop destination for culinary enthusiasts of all skill levels.

## Features

- **Recipe Collection:** A rich selection of recipes with cooking time, calorie count, and detailed ingredients.
- **Bookmark Recipes:** Allows users to save and revisit their favorite recipes.
- **Dark Mode:** Toggle between light and dark themes for better viewing experience.
- **Smooth Navigation:** Scroll to specific sections directly through navigation links.
  
## Tech Stack

- **Frontend:** React, React Router for routing, Tailwind CSS for styling
- **Icons:** react-icons
- **Utilities:** useRef for smooth scrolling to sections
- **Storage:** localStorage to persist user bookmarks and dark mode settings

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/recipe-discovery-site.git
   ```
   
2. **Navigate to the project directory:**
   ```bash
   cd recipe-discovery-site
   ```
   
3. **Install dependencies:**
   ```bash
   npm install
   ```
   
4. **Start the development server:**
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Folder Structure

- **src/components:** Contains reusable components like `Header`, `Hero`, `Main`, and `FoodCard`.
- **src/App.js:** Main application file that manages routing and overall layout.
- **public/watches.json:** JSON data file for sample recipes.
  
## Usage Guide

1. **Exploring Recipes:** Scroll through the recipe list on the homepage to view different dishes.
2. **Bookmarking a Recipe:** Click on "Bookmark" to save recipes to your collection, which persists in local storage.
3. **Viewing Recipe Details:** Click on a recipe card to view full ingredients, cooking time, and calories.
4. **Toggle Dark Mode:** Switch themes using the theme toggle button in the header.

## Future Enhancements

- **Search Functionality:** Add a search bar for users to filter recipes based on ingredients, cooking time, etc.
- **User Authentication:** Enable user accounts for personalized recipe collections.
- **Recipe Sharing:** Add options to share recipes on social media.
  
## Contributing

If you’d like to contribute, feel free to fork this repository, make your changes, and submit a pull request. We welcome improvements, bug fixes, and new feature ideas!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, reach out to us at [email@example.com](mailto:email@example.com)
