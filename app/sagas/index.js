/**
 * Created by flyjennyetn on 2016-10-26.
 */
import global from './global'

export default function* rootSaga() {
	yield* global()
}