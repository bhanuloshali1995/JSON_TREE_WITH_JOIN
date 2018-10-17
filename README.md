# JSON_TREE_WITH_JOIN
Are you stuck in representing your data to the client? 
Is your data dependent on some other fields and you can't represent it?

This repository shows JSON data in a tree format and fetches the data for dependent fields and shows them too recursively in a tree format.It can go upto any level


Pass the config file to the code as input as shown below






//----------------------------------------------- Inputs ----------------------------------------------





const config={
    parent:{name:"parentData",skipFields:["_id","__v","updatedDate","createdDate","version"],labelField:"productState"},
    resolve:{
        issues:{type:"Array",from:{name:"nestedData",field:"_id"},labelField:"label",skipFields:["_id","updatedDate","createdDate","version"]},
        nestedIssues:{type:"Array",from:{name:"nestedData",field:"_id"},labelField:"label",skipFields:["_id","updatedDate","createdDate","version"]},
    }
}


 const data={
    nestedData:[{"_id":"5ba2612f75c8fa0b77418439","label":"Dummy Label 1","type":"Link","LINK":{"url":"dummy://dummy"},"updatedDate":"2018-09-26T15:30:13.437Z","createdDate":"2019-09-26T13:40:13.437Z","version":1},{"_id":"5ba261ab75c8fa0b7741843b","label":"Dummy Label 2","type":"URL","nestedIssueParams":{"nestedIssues":["5ba2612f75c8fa0b77418439"]},"updatedDate":"2018-09-26T18:30:13.437Z","createdDate":"2018-09-26T18:30:13.437Z","version":1}],
    parentData:[{"_id":"5bab66898096e260c175de7c","productState":"Not Working","__v":0,"updatedDate":"2018-09-26T10:59:48.239Z","createdDate":"2018-09-26T10:59:21.094Z","version":2,"issues":["5ba2612f75c8fa0b77418439","5ba261ab75c8fa0b7741843b"]},{"_id":"5bab66ca8096e260c175de7d","productState":"Working","__v":0,"updatedDate":"2018-09-26T11:00:26.841Z","createdDate":"2018-09-26T11:00:26.841Z","version":1,"issues":["5ba261ab75c8fa0b7741843b"]},]
}




//-------------------------------------------------------------------------------------------------------








//--------------------------------- Description of fields in config file --------------------------------



parent:{     // Parent data field
name: - Name of the parent field you want to render
skipFields : Array// Fields you don't want user to see
labelField : Label of your data
}



resolve:{
 nameofthefieldtoberesolvedfromparentdata : { from : { name:'name of field in child data', field:'field of child data on which join has to be performed'}, labelField:'Label of child data to be shown '}
}



//-------------------------------------------------------------------------------------------------------
