import React from 'react';

export default class Add extends React.Component {
state={

content:''
}
    handleChange=(e)=>{
this.setState({
    [e.target.id]:e.target.value
})
}
handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.content.length){
        this.props.addItem(this.state);
        this.setState({
            content:''
        })
    }
  
    }
render(){
    return(
<form className="container" onSubmit={this.handleSubmit}>
<input placeholder="Add Todo" id="content" onChange={this.handleChange} value={this.state.content}/>
</form>


    );
}



}