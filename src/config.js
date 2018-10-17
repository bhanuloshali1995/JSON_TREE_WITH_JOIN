export const config={
    parent:{name:"parentData",skipFields:["_id","__v","updatedDate","createdDate","version"],labelField:"productState"},
    resolve:{
        issues:{type:"Array",from:{name:"nestedData",field:"_id"},labelField:"label",skipFields:["_id","updatedDate","createdDate","version"]},
        nestedIssues:{type:"Array",from:{name:"nestedData",field:"_id"},labelField:"label",skipFields:["_id","updatedDate","createdDate","version"]},
    }
}

export const data={
    nestedData:[{"_id":"5ba2612f75c8fa0b77418439","label":"Dummy Label 1","type":"Link","LINK":{"url":"dummy://dummy"},"updatedDate":"2018-09-26T18:30:13.437Z","createdDate":"2018-09-26T18:30:13.437Z","version":1},{"_id":"5ba261ab75c8fa0b7741843b","label":"Dummy Label 2","type":"URL","nestedIssueParams":{"nestedIssues":["5ba2612f75c8fa0b77418439"]},"updatedDate":"2018-09-26T18:30:13.437Z","createdDate":"2018-09-26T18:30:13.437Z","version":1}],
    parentData:[{"_id":"5bab66898096e260c175de7c","productState":"Not Working","__v":0,"updatedDate":"2018-09-26T10:59:48.239Z","createdDate":"2018-09-26T10:59:21.094Z","version":2,"issues":["5ba2612f75c8fa0b77418439","5ba261ab75c8fa0b7741843b"]},{"_id":"5bab66ca8096e260c175de7d","productState":"Working","__v":0,"updatedDate":"2018-09-26T11:00:26.841Z","createdDate":"2018-09-26T11:00:26.841Z","version":1,"issues":["5ba261ab75c8fa0b7741843b"]},]
}
