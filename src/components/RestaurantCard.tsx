import { Restaurant } from "@/types/restaurant";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Star } from "lucide-react";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <CardHeader className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{restaurant.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span className="text-sm">{restaurant.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-gray-600">{restaurant.description}</p>
        <p className="text-sm text-gray-500 mt-2">
          {restaurant.deliveryTime} min delivery time
        </p>
      </CardContent>
    </Card>
  );
}