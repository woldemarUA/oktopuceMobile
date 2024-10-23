import React from 'react';

import { View } from 'react-native';

import SelectComponent from './SelectComponent';
import SwitchComponent from './SwitchComponent';
import InputComponent from './InputComponent';

import { equipmentLabels } from '../formUtils/equipmentLabels';

import { useForms } from '../../../context/FormProvider';
import styles from '../../../Screens/styles/formStyles';

const LocationComponent = ({
  setFormValues,
  title,
  formValues,
  formConfig,
}) => {
  const { locationOptions } = useForms();

  return (
    <View style={styles.containerBordered}>
      {locationOptions && (
        <SelectComponent
          items={locationOptions}
          name={'location_id'}
          title={title}
          setFormValues={setFormValues}
          formValues={formValues}
          required={formConfig.location_id === ''}
        />
      )}
      <View style={styles.row}>
        <SwitchComponent
          label={equipmentLabels.location_precision}
          setFormValues={setFormValues}
          name='location_precision'
        />
      </View>
      {formValues.location_precision && (
        <View style={styles.row}>
          <InputComponent
            label=''
            name='location_precision'
            setFormValues={setFormValues}
            placeholder={equipmentLabels.applicable}
            formConfig={formConfig}
            formValues={formValues}
          />
        </View>
      )}
    </View>
  );
};

export default LocationComponent;
