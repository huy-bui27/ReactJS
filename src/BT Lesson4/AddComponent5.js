import React from 'react';

function StudentInfoComponent() {
    const students = [
        {
            id: 1,
            name: 'John Doe',
            age: '20',
            address: 'Ha Noi',
        }
    ];
    return (
        <div>
            <h2>Danh sach sinh vien:</h2>
            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '10px'
            }}>
                <thead>
                <tr>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>ID</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Name</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Age</th>
                    <th style={{border: '1px solid #ddd', padding: '8px'}}>Address</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.id}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.name}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.age}</td>
                        <td style={{border: '1px solid #ddd', padding: '8px'}}>{student.address}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentInfoComponent;