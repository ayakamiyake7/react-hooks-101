import React from 'react';

const Event = ({dispatch, event}) => {
    {
        const id = event.id
            const handleClickDeleteButton = () => {
                dispatch({ type: 'DELETE_EVENT', id })
            }

            return (
            <tr>
                <td>{id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>Delete</button>
                </td>
            </tr>
            )
        // state.map((event, index) => {
            
        // })
    }
}

export default Event