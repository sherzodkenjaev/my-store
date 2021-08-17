const initialState = [
  // {
  //   title: "HP Pavilion Gaming GTX 1650",
  //   id: 3,
  //   description:
  //     "Karoche this is is amazing using it almost a week and this laptop fully covers my demand lorem porem korem what else i dnot know come on say something.",
  //   price: 780,
  //   rating: 5,
  //   category: "laptop",
  // },
];

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_USER":
    //   return {
    //     ...state,
    //     user: action.user,
    //   };

    case "ADD_ITEMS":
      state = [...state, action.payload];
      return state;

    case "REMOVE_ITEMS":
      const filterItems = state.filter((item) => item.id !== action.id && item);
      state = filterItems;
      return state;

    case "REMOVE_FROM_BASKET":
      const filterBasketItems = state.filter(
        (item) => item.ids !== action.ids && item
      );
      state = filterBasketItems;
      return state;

    default:
      return state;
  }
};

export default cardReducer;
