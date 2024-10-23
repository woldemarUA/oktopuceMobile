const errorChecker = (formValues, name, setError) => {
  if (formValues[name] === '') {
    setError(`* requis`);
  } else {
    setError(null);
  }
};

export default errorChecker;
