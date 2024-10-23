import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';

import styles from '../../../Screens/styles/formStyles';

// import errorChecker from '../formUtils/errorChecker';
import useErrorChecker from '../formUtils/useErrorChecker';

const filterValues = (items, itemValue) => {
  return items.find((item) => item.value === parseInt(itemValue, 10));
};

const SelectComponent = ({
  items,
  title,
  setFormValues,
  name,
  selectedOptions = null,
  setSelectedOptions = null,
  formValues,
  required,
}) => {
  const [selectedValue, setSelectedValue] = useState({
    value: '',
    label: `Choissisez ${title.toLowerCase()}`,
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (name in formValues && formValues[name]) {
      setSelectedValue(formValues[name]);
    } else {
      setSelectedValue({
        value: '',
        label: `Choissisez ${title.toLowerCase()}`,
      });
    }
  }, [formValues, name]);

  useErrorChecker(formValues, name, setError);

  const onSelectChange = (itemValue, itemIndex) => {
    const parsedValue = parseInt(itemValue, 10);
    const item = filterValues(items, itemValue);
    setSelectedValue(item);
    setFormValues((formValues) => ({
      ...formValues,
      [name]: isNaN(parsedValue) ? (required ? '' : null) : parsedValue, // it was ? null
      // [name]: parseInt(itemValue, 10),
    }));

    setSelectedOptions &&
      setSelectedOptions((preValues) => ({
        ...preValues,
        [name]: item,
      }));
  };

  return (
    <View style={styles.row}>
      <View style={styles.rowHorizont}>
        <Text style={styles.label}>{title}</Text>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
      <Picker
        style={styles.dropdown}
        selectedValue={selectedValue}
        onValueChange={onSelectChange}
        itemStyle={styles.dropdownItem}>
        <Picker.Item
          label={selectedValue?.label || ''}
          value={selectedValue?.value || `Choissisez ${title.toLowerCase()}`}
        />
        {items.map((item) => {
          return (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default SelectComponent;
