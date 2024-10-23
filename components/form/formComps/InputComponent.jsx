import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

import styles from '../../../Screens/styles/formStyles';

import useErrorChecker from '../formUtils/useErrorChecker';

const InputComponent = ({
  label,
  name,
  setFormValues,
  secureTextEntry = false,
  placeholder,
  inputMode = 'default',

  formValues,
}) => {
  const [error, setError] = useState('');

  useErrorChecker(formValues, name, setError);
  const handleInputChange = (text) => {
    setFormValues((formValues) => ({ ...formValues, [name]: text }));
  };
  return (
    <>
      {label && (
        <View style={styles.rowHorizont}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleInputChange}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

export default InputComponent;
