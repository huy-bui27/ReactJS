import React from 'react';

function FeatureToggle({name, isOn, onToggle}) {
    return (
        <div>
            <span>{name}: {isOn ? 'ON' : 'OFF'}</span>
            <input
                type="checkbox"
                checked={isOn}
                onChange={() => onToggle(name)}
            />
        </div>
    );
}

export default FeatureToggle;