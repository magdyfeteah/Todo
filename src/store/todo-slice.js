import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  lists: [
    { text: "Complete online JavaScript course", id: "l1" ,completed:false},
    { text: "Jag around the park 3x", id: "l2" ,completed:false },
    { text: "10 Minutes Meditation", id: "l3" ,completed:false },
    { text: "Read for 1 hour", id: "l4" ,completed:false },
    { text: "Complete Todo App", id: "l5"  ,completed:false},
  ],
  completedTodo : []
  ,
  filter: "all"
};
const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const text = action.payload;
      state.lists.unshift({ text: text, id: Math.random().toString(),completed:false });
    },
    deleteTodo(state, action) {
      const id = action.payload;
      state.lists = state.lists.filter((todo) => todo.id !== id);
      if (state.lists.length === 0) {
        state.isEmptyList = true;
        state.isEmptyList = true
      }
    },  toggleTodoComplete(state, action) {
        const todoId = action.payload;
        const todo = state.lists.find(todo => todo.id === todoId);

        if (todo) {
          todo.completed = !todo.completed;
        }
      },
    setFilter(state,action){
        state.filter=action.payload
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
