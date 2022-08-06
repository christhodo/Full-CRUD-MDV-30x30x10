import { NgModule, ModuleWithProviders } from '@angular/core';
import { BustEnvironment } from './busts.model';
import { BUST_ENVIRONMENT } from './busts.token';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: BustEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: BUST_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
