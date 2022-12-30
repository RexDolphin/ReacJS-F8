import { useContext } from 'react';
import Context from './Context';

export const useHookCustom = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
  }