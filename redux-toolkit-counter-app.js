src --> redux --> store.js
              --> counterSlice.js

Install rtk:
-----------
npm install @reduxjs/toolkit react-redux


store.js
--------
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';

export default configureStore({
	reducer:{
		counter:counterReducer
	}
})

Create Provider in Appjs:
-------------------------
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;

Create counterSlice.js
----------------------
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name:"counter",
	initialState:{value:0},
	reducers:{
		increment:(state)=>{state.value += 1},
		decrement:(state)=>{state.value -= 1},
		incrementByValue:(state,action)=>{state.countVal+=action.payload}
		
	}
})
export const {increment,decrement,incrementByValue} = counterSlice.actions
export default counterSlice.reducer


Create Counter.js:
-----------------
  src --> components --> Counter.js

import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByValue } from '../redux/counterSlice';

const Counter = () => {
	// const [count,setCount]=useState(0);
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch()
  return (
	<div>
		<h1>{count}</h1>
		<button  onClick={() => dispatch(increment())}>Increase</button>
		<button onClick={() => dispatch(decrement())}>Decrease</button>
	        <button onClick={()=>dispatch(incrementByValue(10))}>Increase by Value</button>
	</div>
  )
}

export default Counter


