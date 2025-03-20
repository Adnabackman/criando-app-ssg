import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ServerRoute, RenderMode } from '@angular/ssr';
import { provideRouter } from '@angular/router';

const routes: ServerRoute[] = [
  {
    path: 'user/:userId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: (): Promise<Record<string, string>[]> => {
      return new Promise((resolve) => {
        const fs = require('fs');
        const routesFileContent = fs.readFileSync('route.txt', 'utf-8');
        const routesArray = routesFileContent.split('\n');
        const params = routesArray
          .filter((route: string) => route.startsWith('/user/'))
          .map((route: string) => {
            const userId = route.split('/')[2];
            return { userId: userId };
          });
        resolve(params);
      });
    },
  },
];

export const config: ApplicationConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering(),
    provideRouter(routes)
  ],
});