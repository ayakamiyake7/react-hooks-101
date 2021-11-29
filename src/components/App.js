import React, { useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event'
import reducer from '../reducers'

const App = () => {
    const [state, dispatch] = useReducer(reducer, [], )
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = e => {
        e.preventDefault()
        //dispatch
        dispatch({
            type: 'CREATE_EVENT',
            title,
            body
        })

        setTitle('')
        setBody('')
    }

    const deleteAllEvents = e => {
        e.preventDefault()
        const result = window.confirm('Are you sure you want to delete all events?')
        if (result) dispatch({ type: 'DELETE_ALL_EVENTS' })
    }

    const unCreatable = title === '' || body === ''

    return (
        <>
        <div className="container-fluid">
            <h4>Form for Events</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">Title</label>
                    <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">Body</label>
                    <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>Create an event</button>
                <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>Delete all events</button>

                <h4>Event Menu</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))
                        }
                    </tbody>
                </table>
            </form>
        </div>
        </>
    )
}

export default App
