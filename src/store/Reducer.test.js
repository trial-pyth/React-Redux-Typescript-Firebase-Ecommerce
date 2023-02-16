import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";

describe("cartReducer", () => {
  const mockInitialState = {
    isCartOpen: false,
    cartItems: [],
  };

  it("should return initial state", () => {
    expect(cartReducer(undefined, {})).toEqual({
      isCartOpen: false,
      cartItems: [],
    });
  });

  it("should handle SET_IS_CART_OPEN", () => {
    expect(
      cartReducer(mockInitialState, {
        type: "SET_IS_CART_OPEN",
        payload: true,
      })
    ).toEqual({
      isCartOpen: true,
      cartItems: [],
    });
  });
});

describe("fetch categories", () => {
  const mockCategoriesState = {
    isLoading: true,
  };
  it("should start to fetch categories", () => {
    expect(
      categoriesReducer(mockCategoriesState, {
        type: "FETCH_CATEGORIES_START",
      })
    ).toEqual({
      isLoading: true,
    });
  });
});
