import service from "../service/service";

export function get_data(params){
    return service({
        method:"GET",
        url:"/api/branch/query",
        params,
        // timestamp: new Date().getTime()
    })
}   