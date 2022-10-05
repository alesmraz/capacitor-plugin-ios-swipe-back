import { registerPlugin } from '@capacitor/core';
import { IosSwipeBackPlugin } from './definitions';

const IosSwipeBackPlugin = registerPlugin<IosSwipeBackPlugin>(
  'IosSwipeBackPlugin',
  {
    web: () => import('./web').then((m) => new m.IosSwipeBackPlugin()),
  }
);

export * from './definitions';
export { IosSwipeBackPlugin };
