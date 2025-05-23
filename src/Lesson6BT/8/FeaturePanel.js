import React, {useState} from 'react';
import FeatureToggle from './FeatutreToggle';

function FeaturePanel() {
    const [features, setFeatures] = useState({
        'WiFi': false,
        'Bluetooth': false,
        'Dark Mode': false
    });

    const handleToggle = (name) => {
        setFeatures((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    return (
        <div>
            <h2>Quản lý tính năng</h2>
            {Object.keys(features).map((name) => (
                <FeatureToggle
                    key={name}
                    name={name}
                    isOn={features[name]}
                    onToggle={handleToggle}
                />
            ))}
        </div>
    );
}

export default FeaturePanel;