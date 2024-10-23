import React, { createContext, useState, useContext, useEffect } from 'react';

import axios from 'axios';

const FormContext = createContext();
export const useForms = () => useContext(FormContext);
const apiUrl = process.env.EXPO_PUBLIC_API_LINK;

const FormProvider = ({ children }) => {
  const [equipmentForm, setEquipmentForm] = useState({});
  const [formConfigErr, setFormConfigErr] = useState('');
  const [parentOptions, setParentOptions] = useState([]);
  const [siteOptions, setSiteOptions] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [endroitOptions, setEndroitOptions] = useState({});
  const [equipmentOptions, setEquipmentOptions] = useState({});
  const [locationOptions, setLocationOptions] = useState([]);
  const [nfcOptions, setNfcOptions] = useState([]);
  const [gasOptions, setGasOptions] = useState([]);
  const [brandOptions, setBrandOptions] = useState([]);
  const [extTypeOptions, setExtTypeOptions] = useState([]);
  const [intTypeOptions, setIntTypeOptions] = useState([]);

  const fetchEquipmentFormConfig = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/equipment`);

      const response = Object.keys(res.data.formConf).reduce((acc, key) => {
        acc[key] = res.data.formConf[key].required ? '' : null;
        return acc;
      }, {});
      setEquipmentForm({ ...response, type: 'equipment' });
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };
  // options fetchers

  const fetchParentOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/parent`);
      setParentOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchSiteOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/sites`);
      setSiteOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };
  const fetchProductOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/products`);
      setProductOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchEndroitOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/endroits`);
      setEndroitOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchEquipmentOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/equipments`);
      setEquipmentOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchLocationOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/locations`);
      setLocationOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchNfcOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/nfc`);
      setNfcOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };
  const fetchGasOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/gas-types`);

      setGasOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchBrandOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/brands`);
      setBrandOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchExtTypeOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/ext-types`);
      setExtTypeOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  const fetchIntTypeOptions = async () => {
    try {
      const res = await axios.get(`${apiUrl}forms/options/int-types`);
      setIntTypeOptions(res.data.options);
    } catch (error) {
      console.error(error);
      setFormConfigErr(error);
    }
  };

  useEffect(() => {
    fetchEquipmentFormConfig();
    fetchParentOptions();
    fetchSiteOptions();
    fetchProductOptions();
    fetchEndroitOptions();
    fetchEquipmentOptions();
    fetchLocationOptions();
    fetchNfcOptions();
    fetchGasOptions();
    fetchBrandOptions();
    fetchExtTypeOptions();
    fetchIntTypeOptions();
  }, []);

  return (
    <FormContext.Provider
      value={{
        equipmentForm,
        parentOptions,
        siteOptions,
        productOptions,
        endroitOptions,
        equipmentOptions,
        locationOptions,
        nfcOptions,
        gasOptions,
        brandOptions,
        extTypeOptions,
        formConfigErr,
        intTypeOptions,
      }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
