import { WebPlugin } from '@capacitor/core';
import { IosSwipeBackPlugin } from './definitions';

export class IosSwipeBackWeb extends WebPlugin implements IosSwipeBackPlugin {
  enable(options: { error: number }): Promise<{ error: number }> {
    return new Promise(() => {
      return {
        error: 0,
      };
    });
  }

  disable(options: { error: number }): Promise<{ error: number }> {
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
