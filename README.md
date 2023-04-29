# myTube

Этот проект - **видео-платформа**, по примеру ютюба. Здесь пользователи могут загружать видео, ставить лайки, подписываться и оставлять комментарии.
У данного проекта есть как **backend**, так и **frontend** часть.

## Фукнционал проекта

- Любой постеитель может **смотерть и искать видео**
- Каждый зарегестрированый пользователь может **добавлять видео**, **оставлять комментарии**, **лайкать видео**, **подписываться на других пользователей**
- Пользователь может **удалять и редактировать свои видео**
-  Есть вкладка тренды, где любой пользователь может посмотреть **самые популярные видео**
- На главной странице выводится **самое поплуярное и случайное видео**

## Технологии проекта

### Frontend

1.  **Typescript и Next.js** - главная связка данного проекта. 
2. CSS стили писались при помощи **Tailwind CSS** и **SCSS**, что значительно ускорило скорость верстки.
3. Стили импортировались при помощи **SCSS модулей**, что позволило отойти от БЭМ.
4. Для хранения данных и запросов в основном используется **Redux toolkit**
5. Валидация форм происходит благодаря библиотеке **react hook form**.
6. Для того что бы код был в едином формате использовался **prettier** и **prettier tailwindcss**.
7. Так же использовались и другие библиотеки, такие как: **toastr**, **headlessui/react**, **axios** и т.д.

### Backend

1. Backend разработан на фреймворке **NestJS**.
2. В качестве БД выбран **PostgreSQL**.

## Какие функции планируются в будущем?

1. Ближайшее, что я планирую добавить, это - **адаптивная верстка**. На данный момент проект адаптирован **только под декстоп** версию с разрешением 1920x1080
2. **Добавить уведомления о новых видео**, на данный момент существует только кнопка-заглушка
3. **Сделать корректно длительность видео**, сейчас при загрузке видео, длительность стандатная - 0 и не изменяется. 
4. Доработать страницу **моих подписок**, сейчас там просто отображаются пользователи. В будущем планирую добавить там видео от этих пользователей.

## Что мне нравится в этом проекте?

- Реализация **кастомного видео плеера** получилась очень крутой. Для взаимодействия с видео **можно использовать горячие клавиши, либо мышку**. При наведении на видео либо при паузе появляется меню, видео можно перематывать мышкой, а сколько прошло от начала видео покажет прогресс бар, прямо как на ютюбе.
- Мне нравится каким в итоге получился **дизайн и интерфейс**. Он отзывчивый и понятный. Реализовано много разнообразных ховеров для каждого элемента.
- Структура проекта очень удобная, все разбито на компоненты, страницы, ui-элементы, сервисы и интерфейсы. Это позволяло **без проблем переиспользовать компоненты** и не писать лишний код
- Вынесены отдельно **кастомные хуки** и **сервисы**
- Многие **роуты защищены  как на бэкенде**, так **и на фронтенде**
- Есть **небольшой кастомный конфиг** для tailwind, в котором выделены основные цвета проекта
- В отличии от моего предыдущего проекта, нет ошибок тайпскрипта, хотя еще есть куда расти
- Благодаря библиотеке toastr **появляются уведомления об ошибках, либо же наоброт о успешных запросах на сервер**, что улушчает взаимодействие пользователя с сайтом
- В данном проекте поработал с новыми фреймворками **NestJS и NextJS**, попробовал использовать все их достоинства, а так же использовал много новых для себя библиотек.
- У каждой страницы есть **свой заголовок**.
- **При загрузке любой страницы есть прогресс бар**, который использует один из основных цветов проекта.

## [Видео работы проекта](https://www.youtube.com/watch?v=0Xl7lzVo330)

### Поиск видео

![screen-gif](./gifs/search.gif)

###
Рефернсы для дизайна:
[1](https://dribbble.com/shots/20351033-Movie-Video-Multimedia-Player-Stream) 
[2](https://www.figma.com/file/VL2SvIImIog5pldYsA7F8d/YouTube-Redesign-(Community)?type=design&node-id=0-1&t=yiYSTUUxay0k9X34-0)
