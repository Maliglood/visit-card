import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-event',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './event.html',
    styleUrl: './event.scss',
})
export class Event {
    readonly event = {
        day: '18',
        month: 'окт',
        weekday: 'воскресенье',
        time: '15:00',
        title: 'День открытых дверей',
        subtitle: 'Познакомьтесь со студией и преподавателями',
        poster: '/images/event-poster.png',
        description: `
      Приглашаем всех, кто давно хотел попробовать себя в джазовом вокале!
      На дне открытых дверей вы познакомитесь с преподавателями студии,
      услышите живые выступления наших учеников, узнаете о форматах занятий
      и сможете задать любые вопросы. А ещё — небольшая разминка для голоса
      и розыгрыш пробного урока среди гостей.
    `,
        address: 'г. Томск, пр.Комсомольский, 66, 6 этаж, студия «Рэгтайм»',
        price: 'Бесплатно',
    };
}