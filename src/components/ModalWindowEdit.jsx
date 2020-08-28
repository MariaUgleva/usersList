import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { cancelEditUser } from '../actions/editUserActions';

class ModalWindowEdit extends Component {
    state = {
        data: this.props.data
    };
    handleChange = (e) => {
        const newObj = this.state.data;
        this.state.data[e.target.id] = e.target.value;
        this.setState({
            data: newObj
        })
    }
    handleSubmit = (e) => {
        axios.put('https://jsonplaceholder.typicode.com/posts/1', this.state.data).then(res => {
            swal("Succes", "Your request was processed successfully", "success");
        })
            .catch((err) => {
                swal("Error", `${err.message}`);

            });
    }
    handleCancel = (e) => {
        this.props.cancelEditUser();
    }
    closeModal = (e) => {
        if (e.target.id === 'modal') {
            this.props.cancelEditUser();
        }
    }
    render() {
        return (
            <div onClick={this.closeModal} id='modal'>
                <div className='modalContentBlock'>
                    <h2 className='text-center editHeader'>Edit user</h2>
                    <div className='modalInputsBox'>
                        <label>Username <input className='form-control' onChange={this.handleChange} type='text' value={this.props.data.username} id='username'></input></label>
                        <label>Email<input className='form-control' type="email" onChange={this.handleChange} value={this.props.data.email} id='email'></input></label>
                        <div className='btnEditUser'>
                            <button className='btn btn-success' onClick={this.handleSubmit}>Save changes</button>
                            <button className='btn btn-danger' onClick={this.handleCancel} >Cancel changes</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cancelEditUser: () => dispatch(cancelEditUser())
    }
}

export default connect(null, mapDispatchToProps)(ModalWindowEdit);
