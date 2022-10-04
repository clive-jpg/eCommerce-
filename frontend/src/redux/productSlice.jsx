import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  products:[],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct: (state, action) => {
        state.products = action.payload;
  
    },
    addProduct: (state,action) => {
        state.todos.push(action.payload);
    },
    deleteProduct: (state,action)=>{
      let index = state.todos.findIndex((i)=> i.id === action.payload.id)
      state.todos.splice(index,1)
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { getProduct,addProduct,deleteProduct } = productSlice.actions

export default productSlice.reducer;

export const getProductThunk = () => async (dispatch) =>{
  const token = localStorage.getItem("Token");
    const response = await axios(`${process.env.REACT_APP_BACKEND}/profile/show_product`,{
      headers: {
        Authorization:`Bearer ${token}`,
      }
    });
    console.log(response.data)
    dispatch(getProduct(response.data))
};

// export const addTodosThunk = (todo) => async (dispatch) =>{
//   const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/todo`, {todo});
 
//   dispatch(addTodos(response.data))
//   console.log(response.data)
// }

// export const deleteTodosThunk = (id) => async (dispatch) =>{
//   const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/todos/${id}`);
//   console.log(response.data)
//   dispatch(deleteTodos(response.data))
// }