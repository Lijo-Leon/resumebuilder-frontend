import commonAPI from "./commonAPI";
import { serverURL } from "./serverURLS";

//Add resume to the Server - POST
export const addResumeAPI = async (resumeData) => {
    return await commonAPI('POST', `${serverURL}/resumes`, resumeData)
}

//Add resume to the Server (/history) - POST - reqbody - it's called by preview component
export const addHistoryAPI = async (resumeData) => {
    return await commonAPI('POST', `${serverURL}/history`, resumeData)
}

//Get resume to the Server (/history) - GET - it's called by history component
export const getHistoryAPI = async () => {
    return await commonAPI('GET', `${serverURL}/history`, {})
}

export const deleteHistoryAPI = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/history/${id}`, {})
}

//For Edit Resume
//Get a particular resume to the Server (/history) - GET - it's called by history component
export const getResumeHistoryAPI = async (id) => {
    return await commonAPI('GET', `${serverURL}/history/${id}`, {})
}

//To update Resume 
export const updateResumeAPI = async (id, editData) => {
    return await commonAPI('PUT', `${serverURL}/history/${id}`, editData)
}
