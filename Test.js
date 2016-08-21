"use strict"

let Test= (state={}) => {
	state._beforeEach= null;

	state.beforeEach= (fun) => {
		state._beforeEach= fun;
	}

	state.spec= (description) => {
		if(state._beforeEach !== null)
			state._beforeEach();
	}
}

module.exports= Test
