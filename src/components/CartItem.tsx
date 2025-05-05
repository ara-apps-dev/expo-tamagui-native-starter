import { View, Text } from "tamagui";

type Props = {
  name: string;
  price: number;
  quantity: number;
};

export const CartItem = ({ name, price, quantity }: Props) => (
  <View padding="$4" borderBottomWidth={1}>
    <Text>{name}</Text>
    <Text>
      ${price.toFixed(2)} x {quantity}
    </Text>
  </View>
);
