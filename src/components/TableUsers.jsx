import React from 'react';
import { connect } from 'react-redux';
import RenderOneUser from './RenderOneUser';

const TableUsers = (props) => {
    const arrDataHeadTable = ['Username', 'Id', 'Email', 'Delete', 'Edit', 'Detail'];
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    {arrDataHeadTable.map((item, index) => <th key={index}>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.resultGet.map(item => <RenderOneUser content={item} />)}
            </tbody>
        </table>
    )
}


const mapStateToProps = (state) => {
    return {
        resultGet: state.resultGet
    }
}

export default connect(mapStateToProps)(TableUsers);