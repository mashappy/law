import axios form 'axios'

const host ="http://localhost:8080"
let fns = {
	async TmList(){
		let page = 2;
		let httpUrl = `${host}/api/rtimu/?page=${page}`
		let res = await axios.get(httpUrl);
		return res.data
	}
}

export default fns;