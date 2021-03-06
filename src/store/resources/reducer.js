const initialState = [
  { id: 1, name: "React", type: "library", tags: ["ui", "jsx", "virtual-dom"] },
  { id: 2, name: "Alpine", type: "library", tags: ["ui", "vanilla-js", "new"] },
  { id: 3, name: "Zdog", type: "library", tags: ["3d", "svg", "graphics"] },
  { id: 4, name: "AST explorer", type: "tool", tags: ["babel", "online"] },
  {
    id: 5,
    name: "Observable",
    type: "website",
    tags: ["d3", "community", "notebooks"],
  },
  {
    id: 6,
    name: "unDraw",
    type: "resource",
    tags: ["sketches", "svg", "graphics"],
  },
];

export default function resourcesSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
