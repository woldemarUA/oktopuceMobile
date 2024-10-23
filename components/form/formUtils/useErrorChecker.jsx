import { useEffect } from 'react';

import errorChecker from './errorChecker';

const useErrorChecker = (formValues, name, setError) => {
  useEffect(() => {
    errorChecker(formValues, name, setError);
  }, [formValues, name, setError]);
};

export default useErrorChecker;
