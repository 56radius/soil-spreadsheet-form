import React, { createContext, useContext } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormContext.Provider value={{}}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);