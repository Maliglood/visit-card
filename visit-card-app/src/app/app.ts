import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  readonly navItems: readonly NavItem[] = [
    { id: 'home', name: 'Главная', icon: 'home', url: '/' },
    { id: 'about', name: 'О нас', icon: 'about', url: '/about' },
    { id: 'schedule', name: 'Расписание', icon: 'schedule', url: '#' },
    { id: 'prices', name: 'Цены', icon: 'prices', url: '#' },
    { id: 'contacts', name: 'Контакты', icon: 'contacts', url: '#' },
  ];
}