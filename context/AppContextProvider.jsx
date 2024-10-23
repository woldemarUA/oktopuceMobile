import React from 'react';

import ClientsProvider from './ClientsProvider';
import SitesProvider from './SitesProvider';
import EquipmentProvider from './EquipmentProvider';
import InterventionsProvider from './InterventionsProvider';

import FormProvider from './FormProvider';

const AppContextProvider = ({ children }) => {
  return (
    <ClientsProvider>
      <SitesProvider>
        <EquipmentProvider>
          <InterventionsProvider>
            <FormProvider>{children}</FormProvider>
          </InterventionsProvider>
        </EquipmentProvider>
      </SitesProvider>
    </ClientsProvider>
  );
};

export default AppContextProvider;
