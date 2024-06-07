import axios from 'axios';

const init_Headlines = async () => {
    const akey = process.env.REACT_APP_API_KEY;
    const headlines = await 
    axios.get(`https://newsapi.org/v2/top-headlines/sources?country=usapiKey=${akey}`)
    .then(data => {
        if (data.data.status !== 'ok') {
            return {message: "Error fetching headlines"};
        }
    })
    .catch(error => {
        return error;
    });

    return  headlines;

};

export default init_Headlines;