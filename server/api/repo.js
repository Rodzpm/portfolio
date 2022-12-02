import axios from "axios";

export default defineEventHandler(async (event) => {

    const token = process.env.GH_TOKEN
    const { data } = await axios({
        method: 'get',
        url: 'https://api.github.com/users/rodzpm/repos',
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
            'Accept-Encoding': 'identity',
        },
    })
    return data;
});