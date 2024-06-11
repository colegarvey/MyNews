import axios from 'axios';

const init_Headlines = async () => {
    let config = {
        headers : {
            'X-Api-Key': process.env.REACT_APP_API_KEY,
        }
    }
    await axios.get(`https://newsapi.org/v2/top-headlines/sources?country=us&sortBy=popularity`, config)
    .then(data => {
        if (data.status !== 200) {
            return {message: "Error fetching headlines"};
        } else {
            console.log(data.data);
            return data.data;
        }
    })
    .catch(error => {
        return error;
    });
};

export default init_Headlines;