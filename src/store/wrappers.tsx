import type { PropsWithChildren } from 'react';

import ModelsLoadStateProvider from './modals-load-state';

export function ModelsLoadStateContextProvider({
  children,
}: PropsWithChildren) {
  return <ModelsLoadStateProvider>{children}</ModelsLoadStateProvider>;
}
