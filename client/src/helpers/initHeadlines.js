import axios from 'axios';

const init_Headlines = async () => {
    let config = {
        headers : {
            'X-Api-Key': process.env.REACT_APP_API_KEY,
        }
    }
    const headlines = await 
    axios.get(`https://newsapi.org/v2/top-headlines/sources?country=us`, config)
    .then(data => {
        if (data.status !== 200) {
            return {message: "Error fetching headlines"};
        } else {
            // console.log(data);
            return data.data.sources;
        }
    })
    .catch(error => {
        return error;
    });
    // console.log(headlines);
};

export default init_Headlines;