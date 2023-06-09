import service from "../service/service";

export function Get_data(params){
    return service({
        url:"/api/video/get",
        method:"GET",
        params,
        // timestamp: new Date().getTime()
    })
}   