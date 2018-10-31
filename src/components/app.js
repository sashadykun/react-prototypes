import React from 'react'
import Table from './table';

const students = [
    {
        name: 'Tony Ony',
        course: 'Biology',
        grade: 79
    },
    {
        name: 'Bony Sony',
        course: 'Diology',
        grade: 89
    },
    {
        name: 'Kony Dony',
        course: 'Triology',
        grade: 99
    }
];
export default () =>{
    return (<div className="container">
        <h1>Student Grade Table</h1>
        <Table data= {students}/>
    </div>
    )
}



