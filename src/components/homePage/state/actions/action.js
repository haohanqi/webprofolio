import { INCREASE_ANIMATION_COUNTER } from './actionType'

export const increaseAnimationCounter = (counter)=>{
	const newCounter = counter+1
	return {
		type: INCREASE_ANIMATION_COUNTER,
		data: newCounter+1
	}
}