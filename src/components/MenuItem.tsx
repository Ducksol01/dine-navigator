import { MenuItem as MenuItemType } from "@/types/restaurant";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";

export function MenuItem({ item }: { item: MenuItemType }) {
  const { addItem } = useCart();

  return (
    <div className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow animate-fade-in">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold">${item.price.toFixed(2)}</span>
          <Button
            onClick={() => addItem(item)}
            size="sm"
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}