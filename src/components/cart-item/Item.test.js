import { shallow, mount, render } from "enzyme";
import CartItem from "./cart-item.component";

it("expect to render CartItem component", () => {
  const mockItem = [
    {
      name: "foo",
      quantity: 1,
      imageUrl: "https://i.ibb.co/hgZPQR2/fcb-away.webp",
      price: 32,
    },
  ];
  expect(shallow(<CartItem cartItem={mockItem} />)).toMatchSnapshot();
});
