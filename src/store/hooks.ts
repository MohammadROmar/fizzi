import { useContext } from 'react';

import { ModelsLoadStateContext } from './modals-load-state';

export function useModelsLoadStateContext() {
  const modelsLoadStateCtx = useContext(ModelsLoadStateContext);

  if (modelsLoadStateCtx === null) {
    throw new Error('Context is null');
  }

  return modelsLoadStateCtx;
}
