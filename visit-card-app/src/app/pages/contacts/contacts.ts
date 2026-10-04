import { Component } from '@angular/core';

interface Leader {
    id: string;
    name: string;
    role: string;
    photo: string;
    bio: string;
    phone?: string;
    email?: string;
    telegram?: string;
    whatsapp?: string;
}

@Component({
    selector: 'app-contacts',
    standalone: true,
    imports: [],
    templateUrl: './contacts.html',
    styleUrl: './contacts.scss',
})
export class Contacts {
    readonly leaders: Leader[] = [
        {
            id: '1',
            name: 'Абушаева Ирина Владимировна',
            role: 'Руководитель студии',
            photo: '/images/iv.jpg',
            bio: 'Основатель студии «Рэгтайм». Опыт преподавания более 10 лет. Ведёт индивидуальные и групповые занятия по джазовому вокалу.',
            phone: '+7 (913) 858-82-28',
            email: 'aveashuba@mail.ru',

        },
        {
            id: '2',
            name: 'Козлова Светлана Владимировна',
            role: 'Руководитель студии',
            photo: '/images/sv2.jpg',
            bio: 'Основатель студии «Рэгтайм». Опыт преподавания более 10 лет. Ведёт индивидуальные и групповые занятия по джазовому вокалу.',
            phone: '+7 (906) 954-28-64',
            email: 'sv.koz.love@mail.ru',
        },
    ];

    readonly address = {
        title: 'Адрес для занятий',
        city: 'Томск',
        street: 'пр. Комсомольский, д. 66, этаж 5',
        hours: [
            { days: 'Пн–Пт', time: '10:00 – 21:00' },
            { days: 'Сб–Вс', time: '11:00 – 18:00' },
        ],
        mapUrl: 'https://yandex.ru/maps/?text=Москва, ул. Примерная, 10',
    };

    onPhotoError(event: Event): void {
        const img = event.target as HTMLImageElement;

        if (img.dataset['fallback'] === 'true') {
            return;
        }
        img.dataset['fallback'] = 'true';

        // data-URI — встроенная заглушка, не может вернуть 404
        img.src =
            'data:image/svg+xml;utf8,' +
            encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">' +
                '<rect width="100%" height="100%" fill="#2a2f3a"/>' +
                '<text x="50%" y="50%" fill="#889" font-family="Arial" font-size="12" ' +
                'text-anchor="middle" dy=".3em">нет фото</text>' +
                '</svg>'
            );
    }
}