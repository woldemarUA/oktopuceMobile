import React, { useState } from 'react';

import { View } from 'react-native';

import styles from '../../../Screens/styles/formStyles';

import { equipmentLabels } from '../formUtils/equipmentLabels';
import ProductEndroitEquipmentComponent from './ProductEndroitEquipmentComponent';
import LocationComponent from './LocationComponent';
import GasComponent from './GasComponent';

const ProductParametrage = ({ formValues, setFormValues, formConfig }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  return (
    <>
      <View style={styles.containerSection}>
        <ProductEndroitEquipmentComponent
          formValues={formValues}
          setFormValues={setFormValues}
          formConfig={formConfig}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />

        {formValues?.equipment_type_id &&
        selectedOptions.endroit_id?.is_location ? (
          <LocationComponent
            title={equipmentLabels.location_id}
            setFormValues={setFormValues}
            formValues={formValues}
            formConfig={formConfig}
          />
        ) : null}
      </View>
      {formValues?.equipment_type_id &&
        selectedOptions.equipment_type_id?.is_gas && (
          <View style={styles.containerSection}>
            <GasComponent
              setFormValues={setFormValues}
              formValues={formValues}
            />
          </View>
        )}
    </>
  );
};

export default ProductParametrage;
