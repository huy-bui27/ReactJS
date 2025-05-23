import React from 'react';

function PersonalInfoForm({onChange}) {
    return (
        <div>
            <input
                name="name"
                placeholder="Tên"
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <input
                name="age"
                type="number"
                placeholder="Tuổi"
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
        </div>
    );
}

export default PersonalInfoForm;