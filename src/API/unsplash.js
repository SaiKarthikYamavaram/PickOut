//Configuration of Unsplash API

import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization: "Client-ID jyj0jF2JBMq8IvBGME1XlunNj4Akg7m9Tbcj_rUeZdY",
	},
});
