const initialState = {
  cards: [
    {
      id: 1,
      name: "Mike",
      title: "Business Lawyer",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      phone: "0700000000",
      email: "mike@gmail.com",
    },
    {
      id: 2,
      name: "Sarah",
      title: "Family Lawyer",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      phone: "0711222222",
      email: "sarah.yahoo.com",
    },
    {
      id: 3,
      name: "Kyle",
      title: "Insurance Lawyer",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      phone: "074990000040",
      email: "kyle@gmail.com",
    },
  ],
  users: [],
};
export const rootReducer = (state = initialState, action) => {
  console.log("payload", action.payload);
  switch (action.type) {
    case "DELETE_CARD":
      const newCards = state.cards.filter((card) => card.id !== action.id);
      return {
        ...state,
        cards: newCards,
      };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
