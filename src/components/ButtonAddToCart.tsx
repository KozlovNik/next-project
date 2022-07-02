/* eslint-disable @typescript-eslint/ban-types */
import { useRouter } from "next/router";
import Button from "./Button";

interface ButtonAddToCartProps {
  inCart: boolean;
  handleAddToCart: () => {};
}

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({
  inCart,
  handleAddToCart,
}) => {
  const router = useRouter();
  return inCart ? (
    <Button onClick={() => router.push("/cart")}>Перейти в корзину</Button>
  ) : (
    <Button onClick={handleAddToCart}>Добавить</Button>
  );
};

export default ButtonAddToCart;
