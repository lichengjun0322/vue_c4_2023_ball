import service from "../service";

export function getAll_branch(params){
    return service({
        method:"GET",
        url:"/api/branch/query",
        params,
        // timestamp: new Date().getTime()
    })
}   