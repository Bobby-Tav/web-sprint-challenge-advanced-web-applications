import axiosWithAuth from '../helpers/axiosWithAuth';


export const editColorService = (endpoint,item,callback) =>{
    axiosWithAuth().put(endpoint,item).then(res=>{
        callback(res)
    })
}

export const deleteColorService = (endpoint,callback) =>{
    axiosWithAuth().delete(endpoint).then(res=>{
        callback(res)
    })
}