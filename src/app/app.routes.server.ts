import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'checkout/:id',
    renderMode: RenderMode.Client, // ❌ تعطيل prerendering
  },
  {
    path: 'details/:id',
    renderMode: RenderMode.Client, // ❌ تعطيل prerendering
  },
  {
    path: 'brandDetail/:id',
    renderMode: RenderMode.Client, // ❌ تعطيل prerendering
  },
  {
    path: 'cat-details/:id',
    renderMode: RenderMode.Client, // ❌ تعطيل prerendering
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
