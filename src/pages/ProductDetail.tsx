
import { useParams, Link } from "react-router-dom";
import { restaurants } from "@/data/restaurants";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Plus } from "lucide-react";
import { CartProvider } from "@/context/CartContext";
import { AuthButtons } from "@/components/AuthButtons";
import { Cart } from "@/components/Cart";

export default function ProductDetail() {
  const { restaurantId, productId } = useParams();
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const product = restaurant?.menu.find((item) => item.id === productId);
  const { addItem } = useCart();

  if (!product || !restaurant) {
    return <div>Product not found</div>;
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to={`/restaurant/${restaurantId}`} className="flex items-center gap-2 text-primary">
              <ArrowLeft className="w-5 h-5" />
              Back to {restaurant.name}
            </Link>
            <div className="flex items-center gap-4">
              <AuthButtons />
              <Cart />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                <Button onClick={() => addItem(product)} className="bg-primary hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
