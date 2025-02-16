
import { useParams } from "react-router-dom";
import { restaurants } from "@/data/restaurants";
import { MenuItem } from "@/components/MenuItem";
import { AuthButtons } from "@/components/AuthButtons";
import { Cart } from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";
import { ArrowLeft, MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Restaurant() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <ArrowLeft className="w-5 h-5" />
              Back
            </Link>
            <div className="flex items-center gap-4">
              <AuthButtons />
              <Cart />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
              <p className="text-gray-600 mb-4">{restaurant.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{restaurant.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{restaurant.deliveryTime} min</span>
                </div>
              </div>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <div className="grid gap-4">
              {restaurant.menu.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </CartProvider>
  );
}
