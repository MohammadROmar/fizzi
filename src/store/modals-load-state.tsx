'use client';

import { createContext, useState, type PropsWithChildren } from 'react';

type ModelsLoadStateValue = {
  loaded: boolean;
  setLoaded(loaded: boolean): void;
};

const ModelsLoadStateContext = createContext<ModelsLoadStateValue | null>(null);

function ModelsLoadStateContextProvider({ children }: PropsWithChildren) {
  const [loaded, setLoaded] = useState(false);

  const contextState: ModelsLoadStateValue = { loaded, setLoaded };

  return (
    <ModelsLoadStateContext.Provider value={contextState}>
      {children}
    </ModelsLoadStateContext.Provider>
  );
}

export { ModelsLoadStateContext };
export default ModelsLoadStateContextProvider;
