import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../../../Screens/styles/formStyles';

const SubmitButton = ({ onSubmit, label, isDisabled }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        isDisabled ? styles.submitButtonDisabled : styles.submitButton,
        pressed && !isDisabled ? styles.submitButtonPressed : null, // Optional: Add pressed state style
      ]}
      onPress={onSubmit}
      disabled={isDisabled}
      role='button' // Use role instead of accessibilityRole
    >
      <Text style={styles.submitButtonText}>{label}</Text>
    </Pressable>
  );
};

export default SubmitButton;
