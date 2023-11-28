import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f6e6d375832f45e2beec12166141fc17",
    }
})