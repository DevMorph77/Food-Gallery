import React from 'react';
import './App.css';
import FoodCard from './components/FoodCard';
import FoodDetails from "./components/FoodDetails";
import Header from './components/Header';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const data = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish with rich tomato and meat sauce.",
      image_url: "https://cdn.pixabay.com/photo/2016/07/06/13/25/spaghetti-1500483_1280.jpg",
      article: "Spaghetti Bolognese is a staple of Italian cuisine, originating from the Emilia-Romagna region. This dish is known for its rich, meaty tomato sauce that simmers slowly to develop deep flavors. Traditionally served with spaghetti pasta, it's a popular choice in Italian restaurants around the world.",
      facts: [
        "Originates from Bologna, Italy.",
        "The sauce is made with ground beef, tomatoes, onions, and spices.",
        "Often served with Parmesan cheese on top."
      ]
    },
    {
      id: 2,
      title: "Sushi Platter",
      description: "An assortment of fresh sushi rolls, sashimi, and nigiri.",
      image_url: "https://cdn.pixabay.com/photo/2015/11/16/13/12/modern-cuisine-1045690_640.jpg",
      article: "Sushi is a Japanese dish that consists of vinegared rice, often accompanied by raw fish, vegetables, and other ingredients. Sushi platters are popular in Japanese cuisine and are often enjoyed with soy sauce, wasabi, and pickled ginger.",
      facts: [
        "Sushi originated in Japan over 1000 years ago.",
        "The word 'sushi' refers to the rice, not the fish.",
        "Common types of sushi include nigiri, sashimi, and maki rolls."
      ]
    },
    {
      id: 3,
      title: "Cheeseburger",
      description: "A juicy beef patty with melted cheese, lettuce, tomato, and pickles.",
      image_url: "https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_640.jpg",
      article: "The cheeseburger is an American classic, typically made with a grilled beef patty topped with cheese and served in a bun with various toppings. It originated in the 1920s and has become a symbol of American fast food.",
      facts: [
        "The first cheeseburger was invented in California in 1926.",
        "Cheeseburgers are often served with a variety of toppings, including lettuce, tomato, and pickles.",
        "They are a popular menu item at fast food restaurants around the world."
      ]
    },
    {
      id: 4,
      title: "Caesar Salad",
      description: "A fresh salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      image_url: "https://cdn.pixabay.com/photo/2022/05/20/08/55/pasta-7209002_640.jpg",
      article: "Caesar Salad is a popular salad that was created in Mexico in the 1920s. It is known for its creamy Caesar dressing made from eggs, Parmesan cheese, anchovies, garlic, and lemon juice. The salad is typically topped with croutons and grated Parmesan cheese.",
      facts: [
        "Caesar Salad was invented by Italian-American restaurateur Caesar Cardini.",
        "The original recipe did not include anchovies.",
        "The salad is named after Caesar Cardini, not Julius Caesar."
      ]
    },
    {
      id: 5,
      title: "Margherita Pizza",
      description: "A traditional pizza with fresh tomatoes, mozzarella cheese, and basil.",
      image_url: "https://cdn.pixabay.com/photo/2023/11/22/08/22/pizza-8404974_640.jpg",
      article: "Margherita Pizza is a classic Italian pizza made with tomatoes, mozzarella cheese, and fresh basil. It is named after Queen Margherita of Savoy, who visited Naples in 1889. The pizza's colors are meant to represent the Italian flag.",
      facts: [
        "The Margherita pizza was named after Queen Margherita of Savoy.",
        "The pizza features the colors of the Italian flag: red tomatoes, white mozzarella, and green basil.",
        "It is one of the most popular types of pizza worldwide."
      ]
    },
    {
      id: 6,
      title: "Grilled Chicken",
      description: "Tender grilled chicken breast served with a side of vegetables.",
      image_url: "https://cdn.pixabay.com/photo/2016/11/08/10/39/chicken-1807883_640.jpg",
      article: "Grilled chicken is a healthy and versatile dish that is often enjoyed as a main course. It is typically marinated and cooked on a grill to enhance its flavor. It can be served with a variety of sides, including vegetables, rice, or salads.",
      facts: [
        "Grilling is a popular cooking method that adds a smoky flavor to chicken.",
        "Marinating chicken before grilling can enhance its flavor and tenderness.",
        "Grilled chicken is a common dish in many cuisines around the world."
      ]
    },
    {
      id: 7,
      title: "Pancakes",
      description: "Fluffy pancakes topped with butter and maple syrup.",
      image_url: "https://cdn.pixabay.com/photo/2021/07/12/18/30/pancake-6416439_640.jpg",
      article: "Pancakes are a popular breakfast food made from a batter of flour, eggs, milk, and baking powder. They are cooked on a griddle or frying pan and are typically served with butter and syrup. Variations include adding fruits or chocolate chips to the batter.",
      facts: [
        "Pancakes are enjoyed in many cultures with various toppings.",
        "The largest pancake ever made was over 49 feet in diameter.",
        "Pancakes can be made using different types of flour and flavorings."
      ]
    },
    {
      id: 8,
      title: "Fruit Smoothie",
      description: "A refreshing smoothie made with a blend of fresh fruits.",
      image_url: "https://cdn.pixabay.com/photo/2021/11/01/15/53/smoothie-6760874_640.jpg",
      article: "Fruit smoothies are a nutritious and delicious beverage made from blending fresh fruits, yogurt, or milk. They can be customized with a variety of fruits and additional ingredients like honey, protein powder, or spinach for added nutrition.",
      facts: [
        "Smoothies are a great way to consume a variety of fruits and vegetables.",
        "They can be made with either fresh or frozen fruits.",
        "Adding greens like spinach or kale can boost the nutritional value of a smoothie."
      ]
    },
    {
      id: 9,
      title: "Chocolate Cake",
      description: "A rich and moist chocolate cake topped with creamy frosting.",
      image_url: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
      article: "Chocolate cake is a beloved dessert made with cocoa powder or melted chocolate. It is often layered and frosted with chocolate or cream cheese frosting. The cake is a favorite for birthdays and special occasions.",
      facts: [
        "Chocolate cake has been enjoyed since the 18th century.",
        "The first chocolate cake recipe was published in 1886.",
        "It is one of the most popular dessert choices in the world."
      ]
    },
    {
      id: 10,
      title: "Avocado Toast",
      description: "Whole grain toast topped with mashed avocado, cherry tomatoes, and a sprinkle of chili flakes.",
      image_url: "https://cdn.pixabay.com/photo/2017/08/23/18/02/food-2673724_640.jpg",
      article: "Avocado toast is a trendy and healthy dish that features mashed avocado spread on toasted bread. It is often garnished with various toppings such as cherry tomatoes, radishes, or a poached egg. It's a popular choice for breakfast or brunch.",
      facts: [
        "Avocado toast became popular in the 2010s.",
        "Avocados are a good source of healthy fats and nutrients.",
        "It can be customized with a variety of toppings and seasonings."
      ]
    }
  ];
  

  return (
    <Router>
      <div>
        <Nav />
       
        <div className='w-3/4 m-auto'>
          <Routes>
            <Route path="/" element={<FoodCard data={data} />} />
            <Route path="/food/:id" element={<FoodDetails data={data} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
