import { Component } from '@angular/core';

type MessengerIcon = 'max' | 'instagram' | 'telegram';

interface MessengerLink {
  id: string;
  name: string;
  subtitle: string;
  url: string;
  color: string;
  icon: MessengerIcon;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly title = 'Студия джаз вокала Рэгтайм';
  readonly subtitle = 'Выберите мессенджер, чтобы присоединиться';

  readonly links: readonly MessengerLink[] = [
    {
      id: 'max',
      name: 'MAX',
      subtitle: 'Присоединиться к каналу',
      url: 'https://max.ru/join/IrZZDhsZZSYq55BRj9a9rCH7-z78oJOKn2kN4wIaBok',
      color: '#6E3BFF',
      icon: 'max',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      subtitle: 'Присоединиться к каналу',
      url: 'https://instagram.com/ВАШ_КАНАЛ',
      color: '#E1306C',
      icon: 'instagram',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      subtitle: 'Присоединиться к каналу',
      url: 'https://t.me/jazzragtime',
      color: '#229ED9',
      icon: 'telegram',
    },
  ];

  readonly instagramNote = '* Instagram запрещён на территории РФ.';

  readonly disclaimer =
    '* Деятельность Meta Platforms Inc. (социальные сети Facebook и Instagram) ' +
    'признана экстремистской и запрещена на территории Российской Федерации.';

  readonly year = new Date().getFullYear();
}