import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, KeyboardAvoidingView } from 'react-native';

import { equipmentLabels } from '../components/form/formUtils/equipmentLabels';
import ProductParametrage from '../components/form/formComps/ProductParametrage';
import SelectComponent from '../components/form/formComps/SelectComponent';
import DateMobileComponent from '../components/form/formComps/DateMobileComponent';
import SwitchComponent from '../components/form/formComps/SwitchComponent';
import BrandingOptionsComponent from '../components/form/formComps/BrandingOptionsComponent';
import SubmitButton from '../components/form/formComps/SubmitButton';

import styles from './styles/formStyles';

import { useForms } from '../context/FormProvider';

const AddEquipmentScreen = () => {
  const { equipmentForm, siteOptions, nfcOptions, parentOptions } = useForms();
  const [formValues, setFormValues] = useState({});

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (!formValues.parent_equipment_question && formValues.parent_equipment_id)
      setFormValues((prevState) => ({
        ...prevState,
        parent_equipment_id: null,
      }));
  }, [formValues]);

  useEffect(() => {
    setFormValues({ ...equipmentForm, installation_date: new Date() });
  }, [equipmentForm]);

  useEffect(() => {
    let isValid = true;
    for (const key of Object.keys(equipmentForm)) {
      if (equipmentForm[key] === '' && !formValues[key]) {
        isValid = false;
        break;
      }
    }
    setIsFormValid(isValid);
  }, [equipmentForm, formValues]);

  console.log(formValues);

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={100}
      style={{ ...styles.container, padding: 20, flex: 1, overflow: 'auto' }}>
      <ScrollView
        style={{ height: '100%', marginBottom: 20 }} // Set height to 100% of parent
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'>
        {equipmentForm.type && (
          <Text style={styles.header}>Ajoutez {equipmentForm.type}</Text>
        )}
        {siteOptions && (
          <View style={styles.containerSection}>
            <SelectComponent
              items={siteOptions}
              title={equipmentLabels.site_id}
              name='site_id'
              setFormValues={setFormValues}
              formValues={formValues}
              required={equipmentForm.site_id === ''}
            />
          </View>
        )}
        <DateMobileComponent
          name='installation_date'
          setFormValues={setFormValues}
          formValues={formValues}
        />
        {nfcOptions && (
          <View style={styles.containerSection}>
            <SelectComponent
              items={nfcOptions}
              title={equipmentLabels.nfc_tag_id}
              setFormValues={setFormValues}
              name='nfc_tag_id'
              formValues={formValues}
              required={equipmentForm.nfc_tag_id === ''}
            />
          </View>
        )}
        <View style={styles.containerSection}>
          <View style={styles.row}>
            <SwitchComponent
              question={equipmentLabels.parent_equipment_question}
              label={equipmentLabels.parent_equipment_id}
              name='parent_equipment_question'
              setFormValues={setFormValues}
            />
          </View>
        </View>
        {parentOptions && formValues.parent_equipment_question && (
          <View style={styles.containerSection}>
            <SelectComponent
              items={parentOptions}
              title={equipmentLabels.parent_equipment_question}
              name={'parent_equipment_id'}
              setFormValues={setFormValues}
              formValues={formValues}
              required={equipmentForm.parent_equipment_id === ''}
            />
          </View>
        )}

        <ProductParametrage
          formValues={formValues}
          setFormValues={setFormValues}
          formConfig={equipmentForm}
        />

        {formValues.equipment_type_id ? (
          <View style={styles.containerSection}>
            <BrandingOptionsComponent
              setFormValues={setFormValues}
              formValues={formValues}
              formConfig={equipmentForm}
            />
          </View>
        ) : null}

        <View style={styles.row}>
          <SubmitButton
            onSubmit={() => console.log(formValues)}
            label='Enregistrer'
            isDisabled={!isFormValid}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddEquipmentScreen;
