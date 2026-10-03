import { Component } from '@angular/core';

type MessengerIcon = 'max' | 'instagram' | 'telegram' | 'vk';
type NavIcon = 'home' | 'about' | 'schedule' | 'prices' | 'contacts';

interface MessengerLink {
  id: string;
  name: string;
  url: string;
  color: string;
  icon: MessengerIcon;
}

interface NavItem {
  id: string;
  name: string;
  icon: NavIcon;
  url: string;
  active?: boolean;
}

interface EventItem {
  day: string;
  month: string;
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly links: readonly MessengerLink[] = [
    { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/jazzragtime?stkn=YmFtcHlpbGh1c3lt', color: '#E1306C', icon: 'instagram' },
    { id: 'vk', name: 'ВКонтакте', url: 'https://vk.ru/ragtime', color: '#0077FF', icon: 'vk' },
    { id: 'max', name: 'MAX', url: 'https://max.ru/join/IrZZDhsZZSYq55BRj9a9rCH7-z78oJOKn2kN4wIaBok', color: '#6E3BFF', icon: 'max' },
    { id: 'telegram', name: 'Telegram', url: 'https://t.me/jazzragtime', color: '#229ED9', icon: 'telegram' },
  ];

  readonly navItems: readonly NavItem[] = [
    { id: 'home', name: 'Главная', icon: 'home', url: '#', active: true },
    { id: 'about', name: 'О нас', icon: 'about', url: '#' },
    { id: 'schedule', name: 'Расписание', icon: 'schedule', url: '#' },
    { id: 'prices', name: 'Цены', icon: 'prices', url: '#' },
    { id: 'contacts', name: 'Контакты', icon: 'contacts', url: '#' },
  ];

  readonly upcomingEvent: EventItem = {
    day: '18',
    month: 'окт',
    title: 'День открытых дверей',
  };
}