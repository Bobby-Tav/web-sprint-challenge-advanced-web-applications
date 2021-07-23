import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (endpoint,callback) => {
    axiosWithAuth().get(endpoint)
    .then(res =>{
        callback(res.data);
    })
    .catch(err=>{
        console.log('Error',err)
    })
}

export default fetchColorService;