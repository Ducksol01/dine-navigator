import { Restaurant } from "../types/restaurant";

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Bella Italia",
    description: "Authentic Italian cuisine with a modern twist",
    image: "/placeholder.svg",
    rating: 4.8,
    deliveryTime: "25-35",
    menu: [
      {
        id: "1",
        name: "Margherita Pizza",
        description: "Fresh tomatoes, mozzarella, basil, and olive oil",
        price: 14.99,
        image: "/placeholder.svg",
        category: "Pizza",
      },
      {
        id: "2",
        name: "Pasta Carbonara",
        description: "Creamy sauce with pancetta and parmesan",
        price: 16.99,
        image: "/placeholder.svg",
        category: "Pasta",
      },
    ],
  },
  {
    id: "2",
    name: "Sushi Master",
    description: "Premium sushi and Japanese specialties",
    image: "/placeholder.svg",
    rating: 4.9,
    deliveryTime: "30-45",
    menu: [
      {
        id: "3",
        name: "California Roll",
        description: "Crab, avocado, and cucumber",
        price: 12.99,
        image: "/placeholder.svg",
        category: "Rolls",
      },
      {
        id: "4",
        name: "Salmon Nigiri",
        description: "Fresh salmon over pressed rice",
        price: 8.99,
        image: "/placeholder.svg",
        category: "Nigiri",
      },
    ],
  },
];