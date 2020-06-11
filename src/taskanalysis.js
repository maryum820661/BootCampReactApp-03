import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tasks(props)
{

    const task=props.tasks.map((task)=>
    {
        return(
        <div className="m-4">
        <h4>Task Name:{task.name}</h4>
        <p><h5>Task Description:</h5>{task.description}</p>
        <h5>Task Assigned To:{task.assigned}</h5>
        <hr />
        </div>
        );
    })
        return(

            <div className="container">

                <div className="row">
                <div className="col-7 ml-1">
                    <h1>Task Analysis</h1>
                </div>
                <div className="row m-4">
                    <div className="col-12">
                    {task}
                    </div>
                   
                </div>
                </div>
            </div>
        );

    }



export default Tasks;
