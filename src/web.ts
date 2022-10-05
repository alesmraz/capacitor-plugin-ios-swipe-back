import { WebPlugin } from '@capacitor/core';
import { IosSwipeBackPlugin } from './definitions';

export class IosSwipeBackWeb extends WebPlugin implements IosSwipeBackPlugin {
  enable(_: { error: number }): Promise<{ error: number }> {
    return new Promise(() => {
      return {
        error: 0,
      };
    });
  }

  disable(_: { error: number }): Promise<{ error: number }> {
    return new Promise(() => {
      return {
        error: 0,
      };
    });
  }
}

const IosSwipeBack = new IosSwipeBackWeb();

export { IosSwipeBack };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(IosSwipeBack);
