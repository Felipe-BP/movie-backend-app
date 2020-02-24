const axios = require('axios');
const https = require('https');

module.exports = {
    async createApiObj() {
        return await axios.create({
            baseURL: `https://api.themoviedb.org/3`,
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            }),
            // headers: {
            //     'authorization': token,
            // },
            crossdomain: true
        });
    },
    async latestMovies() {
        const api = await this.createApiObj();
        const apiKey = process.env.MOVIE_DB_ACCESS_TOKEN
        const res = await api.get(`/movie/latest?api_key=${apiKey}&language=en-US`)
        return res.data;
    }
}