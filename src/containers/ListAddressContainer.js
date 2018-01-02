import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, savePost, updatePost, deletePost } from '../redux/actions/getListAddressAction';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import validateInput from '../validations';
import classnames from 'classnames';

import ListAddress from '../components/ListAddress'

class App extends Component {
  
  constructor(props){
		super(props);
    this.state = {
      street:'',
      ward:'',
      district:'',
      city:'',
      errors: {}
    };
		this.onChange = this.onChange.bind(this);
    this.isValid = this.isValid.bind(this)
	}

  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return (
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <h2>Table</h2>
          </div>
          <div className="ibox-content">
            <div className="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Street Name</th>
                    <th>Ward</th>
                    <th>District</th>
                    <th>City</th>
                    <th>Country</th>
                  </tr>
                </thead> 
                <tbody>
                  {_.map(this.props.address, (adrs, key) => {
                    return (
                      <ListAddress
                        key={key}
                        id={key}
                        address={adrs}
                        delete={() => this.props.deletePost(key).then(this.props.dispatch(reset('NewPost')))}
                        onChange={this.onChange}
                        updateAddress={() => this.props.updatePost(key,adrs).then(this.props.dispatch(reset('NewPost')))}
                      />
                    )})
                  }
                </tbody>
              </table>
            </div>  
          </div>
        </div>
    )
    
  }

  renderField(field) {
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} className={field.class} />
    );
  }

  onChange(e){
	 this.setState({[e.target.name]:e.target.value});
  }

  onChangeValidate(e){
   this.setState({

   }) 
  }

  isValid() {
      const { errorsInput,isValidInput } = validateInput(this.state);
      if (!isValidInput) {
        this.setState({ errors: errorsInput});
      }
      else{
        this.setState({ errors: {}});
      }
      return isValidInput;
  }

  onSubmit(values) {
    if(this.isValid()){
      this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));  
    }
  }

  render() {
    const { errors } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="wrapper wrapper-content">
        <div className="row">
          <div className="col-lg-3">
            <div className="ibox float-e-margins">
              <div className="ibox-title">
               <h2>Add new Address</h2>
              </div>
              <div className="ibox-content">
                <form role="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <div className={classnames("form-group",{"has-error":errors.street})}>
                    <label>Street</label>
                    <Field
                      name="street"
                      component={this.renderField}
                      label="Street"
                      class="footer-street form-control"
                      value={this.state.street}
                      onChange={this.onChange}
                    />
                    {errors.street && <p className="error">{errors.street}</p>}
                  </div>
                  <div className={classnames("form-group",{"has-error":errors.ward})}>
                    <label>Ward</label>
                    <Field
                      name="ward"
                      component={this.renderField}
                      label="Ward"
                      class="footer-ward form-control"
                      value={this.state.ward}
                      onChange={this.onChange}
                    />
                    {errors.ward && <p className="error">{errors.ward}</p>}
                  </div>
                  <div className={classnames("form-group",{"has-error":errors.district})}>
                    <label>District</label>
                    <Field
                      name="district"
                      component={this.renderField}
                      label="District"
                      class="footer-district form-control"
                      value={this.state.district}
                      onChange={this.onChange}
                    />
                    {errors.district && <p className="error">{errors.district}</p>}
                  </div>
                  <div className={classnames("form-group",{"has-error":errors.city})}>
                    <label>City</label>
                    <Field
                      name="city"
                      component={this.renderField}
                      label="City"
                      class="footer-city form-control"
                      value={this.state.city}
                      onChange={this.onChange}
                    />
                    {errors.city && <p className="error">{errors.city}</p>}
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <Field
                      name="country"
                      component={this.renderField}
                      label="Country"
                      class="footer-country form-control"
                    />
                  </div>
                  <button type="submit" className="btn btn-success">Create</button>
                </form> 
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            {this.renderPosts()}    
          </div>
        </div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect(state => ({
    address: state.address
  }), { savePost, getPosts, updatePost, deletePost }
)(form);

export default form;