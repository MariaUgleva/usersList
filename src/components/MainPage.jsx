import React, { useEffect }from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { resultGet } from '../actions/resultGetRequest';
import TableUsers from './TableUsers';
import ModalWindowEdit from './ModalWindowEdit';

const MainPage = (props) => {

        useEffect(() => {
            getData();
        }, []);
    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(data => {
                props.addGetResult(data.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }
        return (
            <>
                {props.resultGet.length ? <TableUsers /> : null}
                {props.editUser.length ? <ModalWindowEdit data={props.editUser[0]}/> : null}
            </>
        )
}

const mapStateToProps = (state) => {
    return {
        resultGet: state.resultGet,
        editUser: state.editUserReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGetResult: (usersCollection) => dispatch(resultGet(usersCollection))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);