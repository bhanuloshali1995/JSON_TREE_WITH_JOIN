import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from "lodash";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      colors:["#000000","#000080","#454545","#CD5C5C","#784212"],
      colorIndex:0
    }
    this.id = 0;
  }

  getColor(){
    let index=this.state.colorIndex
    if(index==5){
      index=0
    }
    //this.setState({colorIndex:index+1})
    return this.state.colors[index]
  }

  // TBR - To be resolved
  resolveData(dataTBR,dataTBRFrom,field){
    let resolvedData = []
    dataTBRFrom.forEach((obj)=>{
      if(dataTBR.includes(obj[field])){
        resolvedData.push(obj);
      }
    })
    return resolvedData
  } 

  resolve2(resolve,obj,key){
    let resolvedData=this.resolveData(obj[key],this.props.data[resolve.from.name],resolve.from.field)
    let skipFields =  resolve.skipFields || []
    let labelFieldValue = key
    let returnData = resolvedData.map((obj,index)=>{
      const labelFieldValue = resolve.labelField? obj[resolve.labelField] : ""
      return this.renderDataInUI(obj,skipFields,labelFieldValue)
    })
    return this.generateJSX(returnData,labelFieldValue)
  }

  generateJSX(innerJSX,labelFieldValue){
    this.id++;
    const color= this.getColor()
    return (<li style={{color}}><input type="checkbox" id={this.id} />
    <label className="tree_label" htmlFor={this.id}>{labelFieldValue.toUpperCase()}</label><ul>{innerJSX}</ul></li>)
  }

  renderDataInUI(obj,skipFields,labelFieldValue){
    const objData=[]
    for(const key in obj){
      let data = null
      if(skipFields.length!=0 && skipFields.includes(key)){
        continue
      }
      if(this.props.config.resolve[key]){
        data=this.resolve2(this.props.config.resolve[key],obj,key)
      }
      else if(_.isObjectLike(obj[key]) && !_.isArray(obj[key])){
        data = this.renderDataInUI(obj[key],[],key)
      }  
      else{
        data = <li><span className={"tree_label"}>{`${key} : ${obj[key]}`}</span></li>
      }    
      objData.push(data)
    } 
    return this.generateJSX(objData,labelFieldValue)
  }

  render() {
    const configParent = this.props.config.parent
    const parent = this.props.data[configParent.name]
    const skipFields = configParent.skipFields
    return(
      <React.Fragment>{
        parent.map((obj,index)=>{
          const labelFieldValue = configParent.labelField? obj[configParent.labelField] : ""
          return <ul className="tree">{this.renderDataInUI(obj,skipFields,labelFieldValue,index)}</ul>
        }) 
      }
    </React.Fragment>
    )
  }
}

export default App;
