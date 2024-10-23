import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import SelectComponent from './SelectComponent';
import SwitchComponent from './SwitchComponent';
import { equipmentLabels } from '../formUtils/equipmentLabels';
import InputComponent from './InputComponent';

import { useForms } from '../../../context/FormProvider';
import styles from '../../../Screens/styles/formStyles';

export const controleEtancheite = (poids, potentiel, detection) => {
  if (!poids) return `s'il vous plait tapez le poids / choissez type de gaz `;
  const charge = (poids * potentiel) / 1000;

  if (isNaN(charge)) return `Pas assez d'information`;
  if (charge < 5) {
    return detection
      ? `pas
        d’obligation` // Avec système de détection
      : 'Une fois par an'; // Sans système de détection
  }

  if (charge >= 5 && charge <= 50) {
    return detection
      ? 'Tous les 2 ans' // Avec système de détection
      : 'Tous les 6 mois'; // Sans système de détection
  }

  if (charge > 50 && charge <= 500) {
    return detection
      ? 'Tous les ans' // Avec système de détection
      : 'Tous les 6 mois'; // Sans système de détection
  }

  // En supposant des charges supérieures à 500 t Eq. CO2
  return detection
    ? 'Tous les 6 mois' // Avec système de détection
    : 'Tous les 3 mois'; // Sans système de détection
};

const GasComponent = ({ setFormValues, formValues }) => {
  const { gasOptions } = useForms();
  const [gasControlPeriodicity, setGasControlPeriodicity] = useState(
    'entrez type de gaz et poids de gaz'
  );

  useEffect(() => {
    const selectedGas =
      formValues.gas_type_id &&
      gasOptions.find((option) => option.value === formValues.gas_type_id);

    setGasControlPeriodicity(
      controleEtancheite(
        parseInt(formValues.gas_weight, 10),
        parseInt(selectedGas?.potentiel, 10),
        formValues.has_leak_detection
      )
    );
    // setGasControlPeriodicity();
  }, [
    formValues.has_leak_detection,
    formValues.gas_type_id,
    gasControlPeriodicity,
    formValues.gas_weight,
    gasOptions,
  ]);

  useEffect(() => {
    setFormValues((formValues) => ({
      ...formValues,
      leak_detection_periodicity: gasControlPeriodicity,
    }));
  }, [gasControlPeriodicity]);

  return (
    <>
      <View style={styles.row}>
        <Text style={styles.label}>Gas parametrage</Text>
      </View>
      {gasOptions && (
        <>
          <SelectComponent
            items={gasOptions}
            title={equipmentLabels.gas_type_id}
            name='gas_type_id'
            setFormValues={setFormValues}
            formValues={formValues}
          />
          <View style={styles.row}>
            <InputComponent
              label={equipmentLabels.gas_weight}
              name='gas_weight'
              setFormValues={setFormValues}
              placeholder={equipmentLabels.applicable}
              formValues={formValues}
            />
          </View>
          <View style={styles.row}>
            <SwitchComponent
              label={equipmentLabels.has_leak_detection}
              name='has_leak_detection'
              setFormValues={setFormValues}
            />
            <Text style={styles.label}> {gasControlPeriodicity} </Text>
          </View>
        </>
      )}
    </>
  );
};

export default GasComponent;
