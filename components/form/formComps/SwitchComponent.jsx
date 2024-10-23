import React, { useState, useEffect } from 'react';

import { View, Text, Switch } from 'react-native';

import styles from '../../../Screens/styles/formStyles';

const SwitchComponent = ({ label, question, setFormValues, name }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: isEnabled }));
  }, [isEnabled]);
  return (
    <>
      <View style={{ ...styles.rowHorizont, paddingHorizontal: 0 }}>
        <Text style={styles.label}>{label}</Text>
        <Switch
          trackColor={{
            false: 'rgba(217, 35, 50, 1)',
            true: 'rgba(3, 166, 74, 1)',
          }} // Customize track colors
          thumbColor={'#f4f3f4'} // Customize thumb colors
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} // Customize thumb colors
          ios_backgroundColor='#D92332' // Background color for iOS when the switch is off
          onValueChange={toggleSwitch} // Function to call when the value changes
          value={isEnabled} // State of the switch (on/off)
        />
      </View>
    </>
  );
};

export default SwitchComponent;
