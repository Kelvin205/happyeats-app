import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { MenuItem as MenuItemType } from "../types"; // Importing the type with an alias

type Props = {
  menuItem: MenuItemType; // Using the aliased type
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
