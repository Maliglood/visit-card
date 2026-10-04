import { Component } from '@angular/core';

interface Group {
    id: string;
    name: string;
    days: string[];
    time?: string;
    note?: string;
    color: string;   // акцентный цвет группы
    solo?: boolean;  // особая карточка «по запросу»
}

@Component({
    selector: 'app-schedule',
    standalone: true,
    imports: [],
    templateUrl: './schedule.html',
    styleUrl: './schedule.scss',
})
export class Schedule {
    readonly groups: Group[] = [
        {
            id: 'baby',
            name: 'Baby',
            days: ['Вт', 'Чт'],
            time: '18:00 – 19:00',
            color: '#FF6FB5',
        },
        {
            id: 'fitness',
            name: 'Fitness',
            days: ['Вт'],
            time: '19:00 – 20:00',
            color: '#22D67C',
        },
        {
            id: 'junior',
            name: 'Junior',
            days: ['Вт', 'Чт'],
            time: '17:00 – 18:00',
            color: '#FFA533',
        },
        {
            id: 'solo',
            name: 'Solo',
            days: [],
            note: 'Подберём удобное для вас время!',
            color: '#FFE033',
            solo: true,
        },
    ];
}