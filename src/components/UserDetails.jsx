import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


class UserDetails extends Component {
    state = {
        data: []
    };
    posts = (e) => {
        e.preventDefault();
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                this.setState({
                    data: data.data.slice(-5)
                });
            })
            .catch((err) => {
                swal("Error", `${err.message}`);
            })
    }
    render() {
        if (this.props.user) {
            return (
                <>
                    <div className='userDetails'>
                        <Link to='/'><div className='returnArrow'></div></Link>
                        <p><b>Name:</b> {this.props.user.name}</p>
                        <p><b>Username:</b> {this.props.user.username}</p>
                        <p><b>Email:</b> {this.props.user.email}</p>
                        <p><b>Phone:</b> {this.props.user.phone}</p>
                        <p><b>Website:</b> {this.props.user.website}</p>
                        <a href='' onClick={this.posts}>Last post</a>
                    </div>
                    <div className="card-group m-5">
                    {this.state.data.length ? this.state.data.map(item => {
                        return (
                            <div className="card userDatails" style={{width: 18 + 'rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.body}</p>
                                </div>
                            </div>
                        )
                    }) : null}
                    </div>
                </>
            )
        }
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const user = state.resultGet.find(item => item.id === +id);
    return {
        user: user
    }
}

export default connect(mapStateToProps)(UserDetails);

