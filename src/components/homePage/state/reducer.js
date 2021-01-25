import {INCREASE_ANIMATION_COUNTER} from './actions/actionType'

const initState = {
	homeOverlayAnimationCounter: 0, 
	homeIntroAnimationCounter:0,
}

export default (state=initState,action)=>{

	switch(action.type){
		case INCREASE_ANIMATION_COUNTER:{
			return {
				...state,
				homeOverlayAnimationCounter:action.data
			}
		}
	}

	return state
}