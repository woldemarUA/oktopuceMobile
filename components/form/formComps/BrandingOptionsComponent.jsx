import React from 'react';
import { View } from 'react-native';

import SelectComponent from './SelectComponent';
import InputComponent from './InputComponent';

import { equipmentLabels } from '../formUtils/equipmentLabels';

import { useForms } from '../../../context/FormProvider';
import styles from '../../../Screens/styles/formStyles';

const BrandingOptionsComponent = ({
  formValues,
  setFormValues,
  formConfig,
}) => {
  const { brandOptions } = useForms();

  return (
    <>
      {brandOptions && (
        <SelectComponent
          items={brandOptions}
          title={equipmentLabels.equipment_brand_id}
          setFormValues={setFormValues}
          name='equipment_brand_id'
          // selectedOptions?: null | undefined;
          // setSelectedOptions?: null | undefined;
          formValues={formValues}
          required={formConfig.equipment_brand_id === ''}
        />
      )}
      {formValues.equipment_brand_id && (
        <View style={styles.row}>
          <InputComponent
            name={'equipment_model'}
            label={equipmentLabels.equipment_model}
            formConfig={formConfig}
            setFormValues={setFormValues}
            formValues={formValues}
            placeholder={equipmentLabels.equipment_model}
          />
        </View>
      )}
      {formValues.equipment_model && (
        <View style={styles.row}>
          <InputComponent
            name={'serial_number'}
            label={equipmentLabels.serial_number}
            formConfig={formConfig}
            setFormValues={setFormValues}
            placeholder={equipmentLabels.serial_number}
            formValues={formValues}
          />
        </View>
      )}
      {formValues.serial_number && (
        <View style={styles.row}>
          <InputComponent
            name={'remote_control_number'}
            label={equipmentLabels.remote_control_number}
            formConfig={formConfig}
            setFormValues={setFormValues}
            placeholder={equipmentLabels.applicable}
            formValues={formValues}
          />
        </View>
      )}
    </>
  );
};

export default BrandingOptionsComponent;
