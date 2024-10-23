import React, { useEffect } from 'react';

import SelectComponent from './SelectComponent';

import { useForms } from '../../../context/FormProvider';

import { equipmentLabels } from '../formUtils/equipmentLabels';

export const isOptionsRelevant = (parentValue, childValue, options) => {
  if (!parentValue || !options[parentValue]) {
    return false; // Or any other appropriate default value
  }
  return options[parentValue].find((item) => item.value === childValue);
};

const ProductEndroitEquipmentComponent = ({
  formValues,
  setFormValues,
  formConfig,
  selectedOptions,
  setSelectedOptions,
}) => {
  const { productOptions, endroitOptions, equipmentOptions } = useForms();

  useEffect(() => {
    if (
      formValues.endroit_id &&
      endroitOptions &&
      !isOptionsRelevant(
        formValues.produit_id,
        formValues.endroit_id,
        endroitOptions
      )
    ) {
      setFormValues((prevValues) => ({
        ...prevValues,
        endroit_id: '',
        equipment_type_id: '',
      }));
      setSelectedOptions((previousOptions) => ({
        ...previousOptions,
        endroit_id: '',
        equipment_type_id: '',
      }));
    }
  }, [
    formValues.produit_id,
    formValues.endroit_id,
    formValues.equipment_type_id,
  ]);
  return (
    <>
      {productOptions ? (
        <SelectComponent
          items={productOptions}
          title={equipmentLabels.produit_id}
          setFormValues={setFormValues}
          name='produit_id'
          formValues={formValues}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          required={formConfig.produit_id === ''}
        />
      ) : null}
      {endroitOptions && formValues?.produit_id ? (
        <SelectComponent
          items={endroitOptions[formValues.produit_id]}
          title={equipmentLabels.endroit_id}
          setFormValues={setFormValues}
          name='endroit_id'
          formValues={formValues}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          required={formConfig.endroit_id === ''}
        />
      ) : null}
      {equipmentOptions && formValues?.endroit_id ? (
        <SelectComponent
          items={equipmentOptions[formValues.endroit_id]}
          setFormValues={setFormValues}
          name={'equipment_type_id'}
          title={equipmentLabels.equipment_type_id}
          selectedOptions={selectedOptions}
          formValues={formValues}
          setSelectedOptions={setSelectedOptions}
          required={formConfig.equipment_type_id === ''}
        />
      ) : null}
      ;
    </>
  );
};

export default ProductEndroitEquipmentComponent;
