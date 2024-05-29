import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      FormsModule,
      InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
    ),
    provideRouter(routes),
  ],
};
