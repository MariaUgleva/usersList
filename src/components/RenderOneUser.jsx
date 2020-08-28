import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { startEditUser } from '../actions/editUserActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const RenderOneUser = (props) => {
    const { content } = props;
    const deleteUser = (e) => {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/posts/1", content).then(res => {
            swal("Succes", "Your request was processed successfully", "success");
        })
        .catch((err) => {
            swal("Error", `${err.message}`);
        });        
    }
    const editUser = (e) => {
        e.preventDefault();
        props.startEditUser(content);        
    }
    return (
        <tr key={content.id}>
            <td>{content.username}</td>
            <td>{content.id}</td>
            <td>{content.email}</td>
            <td><button type="button" className="btn  btn-light btnDeleteUser" onClick={deleteUser} id={content.username}>Delete user</button></td>
            <td><a onClick={editUser} className='linkEditUser' href='#'>Edit user</a></td>
            <td><Link to = {'/users/' + content.id}>More</Link></td>     
        </tr>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startEditUser: (userData) => dispatch(startEditUser(userData))
    }
}
export default connect(null, mapDispatchToProps)(RenderOneUser);