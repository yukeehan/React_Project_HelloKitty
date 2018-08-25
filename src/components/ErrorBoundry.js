import React, { Component } from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super(props)
		this.state = { hasError: false }
	}

	componentDidCatch(){
		this.setState({ hasError: true});
	}

	render(){
		if( this.state.hasError === true ) 
			return(<h1>Ooops Something going wrong</h1>)
		return(this.props.children)
	}
}

export default ErrorBoundry;