'use client';

import { Provider } from 'react-redux';
import { rootStore } from '@/app/store';

type ReduxProviderProps = React.PropsWithChildren;

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }: ReduxProviderProps) => (
  <Provider store={rootStore}>{children}</Provider>
);

export default ReduxProvider;
