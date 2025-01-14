import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useClothing } from "@/contexts/clothing";
import { Plus } from "lucide-react";
import { addIfUnique } from "@/lib/utils";
import { useRouter } from "next/router";

export default function ClothingModal({ brand, type, item, children }) {
  const { setTops, setPants, setHats } = useClothing();

  const handleAddToCart = () => {
    switch (type) {
      case "Tops":
        setTops((prev) => addIfUnique(prev, item));
        break;
      case "Pants":
        setPants((prev) => addIfUnique(prev, item));
        break;
      case "Hats":
        setHats((prev) => addIfUnique(prev, item));
        break;
      default:
        break;
    }
  };

  return (
    <Dialog className="">
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{brand}</DialogTitle>
          <DialogDescription>{type}</DialogDescription>
        </DialogHeader>

        <img
          src={item.url}
          alt="Image"
          className="w-full h-60 object-contain rounded-md transform transition-transform duration-300 group-hover/item:scale-105"
        />

        <DialogClose asChild>
          <Button
            className="w-full mt-4 shadow-2xl font-semibold p-2"
            onClick={handleAddToCart}
          >
            <Plus />
            Add to basket
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
