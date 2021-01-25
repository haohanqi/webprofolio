import React from 'react'
import {Provider} from 'react-redux'
import { createStore } from "redux"
import rootReducer from "./reducer"

export default ({element})=>{
	const store = createStore(
		rootReducer
	)

	return <Provider store={store}>{element}</Provider>
}