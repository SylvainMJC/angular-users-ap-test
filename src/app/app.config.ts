import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  // PreloadAllModules,
  // withDebugTracing,
  // withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes
      // withPreloading(PreloadAllModules),
      // withDebugTracing()
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
