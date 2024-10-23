import React, { useState, useEffect } from 'react';
import { View, Text, Platform, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './css/customDatePicker.css';

import styles from '../../../Screens/styles/formStyles';

const DateMobileComponent = ({ name, setFormValues, formValues }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };
  const label = <Text style={styles.label}>La date d'installation</Text>;
  useEffect(() => {
    setFormValues((formValues) => ({ ...formValues, [name]: date }));
  }, [name, date]);
  const handlePress = () => {
    setShow(true);
  };
  return (
    <View style={styles.containerSection}>
      {Platform.OS == 'web' ? (
        <>
          <View style={styles.rowHorizont}>
            {label}
            {!show ? (
              <Text style={styles.dateBtnLabel}>
                {date.toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>
            ) : (
              <DatePicker
                portalId='root-portal'
                selected={date}
                onChange={(date) => {
                  setDate(date);
                  setShow(false);
                }} //only when value has changed
                className='custom-date-picker'
              />
            )}
          </View>
          {!show && (
            <View style={styles.rowHorizont}>
              <Pressable
                style={styles.dateBtn}
                onPress={handlePress}
                role='button'>
                <Text style={styles.dateBtnLabel}>appuiez pour changer</Text>
              </Pressable>
            </View>
          )}
        </>
      ) : (
        <View style={styles.row}>
          {label}
          <View style={styles.datePickerContainer}>
            <DateTimePicker
              style={styles.datePicker}
              testID='dateTimePicker'
              value={date}
              mode='date'
              is24Hour={true}
              onChange={onChange}
              display='spinner'
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default DateMobileComponent;

{
  /* <View style={Platform.OS === 'web' ? styles.rowHorizont : styles.row}>
        <Text style={styles.label}>La date d'installation</Text>
        {!show && (
          <Text style={styles.dateBtnLabel}>
            {date.toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Text>
        )}

        {show &&
          (Platform.OS === 'web' ? (
            <DatePicker
              portalId='root-portal'
              selected={date}
              onChange={(date) => {
                setDate(date);
                setShow(false);
              }} //only when value has changed
              className='custom-date-picker'
            />
          ) : (
            <View style={styles.datePickerContainer}>
              <DateTimePicker
                style={styles.datePicker}
                testID='dateTimePicker'
                value={date}
                mode='date'
                is24Hour={true}
                onChange={onChange}
                display='spinner'
              />
            </View>
          ))}
      </View> */
}
