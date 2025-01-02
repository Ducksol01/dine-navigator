import { restaurants } from "@/data/restaurants";
import { RestaurantCard } from "@/components/RestaurantCard";
import { MenuItem } from "@/components/MenuItem";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  // For demo purposes, we'll show the menu of the first restaurant
  const featuredRestaurant = restaurants[0];

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">FoodieHub</h1>
            <Cart />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Featured Restaurants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">
              {featuredRestaurant.name}'s Menu
            </h2>
            <div className="grid gap-4">
              {featuredRestaurant.menu.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;