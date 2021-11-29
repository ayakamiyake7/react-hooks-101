import React, {} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <>
        <div className="container-fluid">
            <h4>Form for Events</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="formEventTitle">Title</label>
                    <input className="form-control" id="formEventTitle" />
                </div>
                <div className="form-group">
                    <label htmlFor="formEventBody">Body</label>
                    <textarea className="form-control" id="formEventBody" />
                </div>
                <button class="btn btn-primary">Create an event</button>
                <button class="btn btn-danger">Delete all events</button>

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
                    </tbody>
                </table>
            </form>
        </div>
        </>
    )
}

export default App
