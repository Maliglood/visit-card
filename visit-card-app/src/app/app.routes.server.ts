// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender // Страница-визитка будет сгенерирована статически при сборке
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Все остальные страницы (если появятся) тоже
  }
];