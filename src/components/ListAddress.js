import React,{Component} from 'react'

class ListAddress extends Component{
	constructor(props){
		super(props);
		this.state = {
		 	address: this.props.address
		};

		this.Delete = this.Delete.bind(this);
		this.Change = this.Change.bind(this);
		this.Update = this.Update.bind(this);
	}

	Delete(){				
		this.props.delete(this.props.id);
	}

	Change(e){				
		var input = e.target;
		this.setState(function(prevState, props) {
			var tempAddress = prevState.address;
			tempAddress[input.name] = input.value;
			return {
		    	address: tempAddress
		  	};
		});		
	}

	Update(){
		this.props.updateAddress(this.props.id,this.state.address)
	}
	render(){
		return(
			<tr>
				<td><input type="text" value={this.state.address.street} onChange={this.Change} name='street' className="form-control"/></td>
				<td><input type="text" value={this.state.address.ward} onChange={this.Change} name='ward' className="form-control"/></td>
				<td><input type="text" value={this.state.address.district} onChange={this.Change} name='district' className="form-control"/></td>
				<td><input type="text" value={this.state.address.city} onChange={this.Change} name='city' className="form-control"/></td>
				<td><input type="text" value={this.state.address.country} onChange={this.Change} name='country' className="form-control"/></td>
				<td><button className="btn btn-primary" onClick={this.Update}>Edit</button></td>
				<td><button className="btn btn-danger" onClick={this.Delete}>Delete</button></td>
			</tr>
		)
	}
}

export default ListAddress