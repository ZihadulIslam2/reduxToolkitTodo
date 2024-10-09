# redux toolkit
## create a store
- store.js
- import { configureStore } from "@reduxjs/toolkit";
- export const store = configureStore({}) [ configureStore this is a function that takes object to him self.]
## create reducer/ slice 
- both er same thing
- create a features folder
- todo folder
- todoSlice.js
- create Slice
- import { createSlice } from "@reduxjs/toolkit";
- import the nonoId, its provide the unique id
- import { createSlice,nanoid } from "@reduxjs/toolkit";
- first create a initialState
- an object 
``` 
const initialState = {
todos: [{id: 1, text:"hello world"}]
}
```
- create slice 
- what is slice big version of reducer
- what is reducer 
- a function
- export this to use it later
``` 
export const todoSlice = createSlice({

})
```
- set the slice name.
- it will show to the redux dev extension tool
- set an object
```
export const todoSlice = createSlice({
  name: 'todo',
               
})
```
- every slice has a initialState 
```
export const todoSlice = createSlice({
 name: 'todo',
initialState
})
```
- add reducers property
- what come with reducers
- property
- function
- addTodo:
- i can refer a function or create on that function.
```js
 function sayHello () {
 console.log('hell reducers')
}

export const todoSlice = createSlice({
name: 'todo',
initialState,
reducers: {
addTodo: sayHello, [ only refarance not call ]
 }
  })
```
- i can do in line:
- i can get 2 things on the function as argument.
```js
reducers: {
  addTodo: (state, action)=>{

    },
  removeTodo: (state, action) => {},
 }
```            
- state, action
- state
- state give the initailStatment access
```js
const initialState = {
todos: [{id: 1, text:"hello world"}]
}
```js
action gives some values like id
  const todo = {
  text: action.payload,
}
```
- payload is a object
- i can add more reducer
- export the functions 
```js
export const {addTodo,removeTodo} = todoSlice.actions
```
- store need to aware about all the reducers 
- it need ot maintain 
- export
```js
export default todoSlice.reducer
```
- add the todoSlice on store.js
```js
import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todo/todoSlice";
export const store = configureStore({
    reducer: todoSlice
})
 ```
- now i can get the state access on any component.
- dispatch to add something
- import { useDispatch } from "react-redux";
- use dispatch
```js
    const dispatch = useDispatch()
```
- dispatch changes the value of store using the reducer
```js
const addTodoHandler = (e) =>{
  e.preventDefault()
  dispatch(addTodo(input))
  setInput('')
 }
```
- I can get evething from store.
- use selector to to get the to dos 
- # reduxToolkitTodo
