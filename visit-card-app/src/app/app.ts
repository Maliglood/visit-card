import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

type NavIcon = 'home' | 'about' | 'schedule' | 'prices' | 'contacts';

interface NavItem {
  id: string;
  name: string;
  icon: NavIcon;
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);

  readonly isHome = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects === '/' || e.urlAfterRedirects === ''),
    ),
    { initialValue: this.router.url === '/' }
  );

  readonly navItems: readonly NavItem[] = [
    { id: 'home', name: 'Главная', icon: 'home', url: '/' },
    { id: 'about', name: 'О нас', icon: 'about', url: '/about' },
    { id: 'schedule', name: 'Расписание', icon: 'schedule', url: '#' },
    { id: 'contacts', name: 'Контакты', icon: 'contacts', url: '/contacts' },
  ];
}