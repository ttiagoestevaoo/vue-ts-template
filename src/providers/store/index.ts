import { createStore } from 'vuex'
import { ExampleModule } from '@providers/store/example'

const store = createStore({
    modules: {
		example: ExampleModule,
	},
})

export default store