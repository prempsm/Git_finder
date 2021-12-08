import React, { Component } from 'react'

class Search extends Component {
    state={
        text:'',
    }
    onSubmit(e){
     e.preventDefault();
     this.props.searchUsers(this.state.text);
    }
    onChange = e =>{
    this.setState({text: e.target.value});
    
    };
    render() {
        return (
            <div>
                <form className="ps-form" onSubmit={this.onSubmit.bind(this)} >
                      <input type='text' 
                       name='text'
                       placeholder='Search Here'
                       value={this.state.text}
                       onChange={this.onChange}
                      />
                      <input
                      type="submit"
                      />
                </form>
            </div>
        );
    }
}

export default Search
