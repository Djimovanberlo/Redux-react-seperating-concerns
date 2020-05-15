const initialState = [
  { id: 1, name: "Kelley", favorites: [2, 3, 4, 5] },
  { id: 2, name: "Djimo", favorites: [1, 3, 6] },
  { id: 3, name: "Lady", favorites: [1, 2, 3, 6] },
];

export default function userSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
