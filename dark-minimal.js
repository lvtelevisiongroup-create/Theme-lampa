(function () {
    'use strict';

    // ─── Конфиг ───────────────────────────────────────────────────────────────
    var PLUGIN_NAME = 'DarkMinimal';
    var ACCENT      = '#e63946';   // красный
    var BG_DEEP     = '#0a0a0a';
    var BG_CARD     = '#141414';
    var BG_CARD_HOV = '#1c1c1c';
    var TEXT_PRI    = '#f0f0f0';
    var TEXT_SEC    = '#707070';
    var RADIUS      = '10px';

    // ─── CSS ──────────────────────────────────────────────────────────────────
    var CSS = [

        /* Общий фон */
        'body, .body { background: ' + BG_DEEP + ' !important; }',

        /* Скроллбар */
        '::-webkit-scrollbar { width: 4px; }',
        '::-webkit-scrollbar-track { background: transparent; }',
        '::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 4px; }',

        /* Шапка */
        '.head, .head__line { background: ' + BG_DEEP + ' !important; border-bottom: 1px solid #1a1a1a !important; }',
        '.head__logo { color: ' + TEXT_PRI + ' !important; letter-spacing: 0.12em; font-weight: 300; }',
        '.menu__item { color: ' + TEXT_SEC + ' !important; font-size: .8rem; font-weight: 400; letter-spacing: .06em; transition: color .2s; }',
        '.menu__item:hover, .menu__item.focus { color: ' + TEXT_PRI + ' !important; }',
        '.menu__item.active { color: ' + ACCENT + ' !important; border-bottom: 2px solid ' + ACCENT + '; }',

        /* Карточки фильмов */
        '.card { background: ' + BG_CARD + ' !important; border-radius: ' + RADIUS + ' !important; overflow: hidden !important; transition: transform .22s ease, box-shadow .22s ease !important; border: 1px solid transparent !important; }',
        '.card.focus, .card:hover { transform: scale(1.04) !important; box-shadow: 0 0 0 2px ' + ACCENT + ', 0 8px 28px rgba(0,0,0,.7) !important; border-color: ' + ACCENT + ' !important; background: ' + BG_CARD_HOV + ' !important; }',

        /* Постер */
        '.card--poster { border-radius: ' + RADIUS + ' !important; }',
        '.card__img { border-radius: ' + RADIUS + ' ' + RADIUS + ' 0 0 !important; }',

        /* Название под карточкой */
        '.card__title { color: ' + TEXT_PRI + ' !important; font-size: .78rem !important; font-weight: 400 !important; padding: 6px 8px 2px !important; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }',
        '.card__age, .card__quality, .card__rating { font-size: .65rem !important; color: ' + TEXT_SEC + ' !important; padding: 0 8px 6px !important; }',

        /* Рейтинг: зелёный/жёлтый/красный — не трогаем, только размер */
        '.card__vote { font-size: .68rem !important; font-weight: 500 !important; border-radius: 4px !important; padding: 2px 5px !important; }',

        /* ── Страница фильма ── */
        '.full-start, .full-start__background { background: ' + BG_DEEP + ' !important; }',

        /* Фоновый арт — тусклый */
        '.full-start__background-img { opacity: .08 !important; filter: grayscale(60%) !important; }',

        /* Постер на странице */
        '.full-start__poster img { border-radius: ' + RADIUS + ' !important; box-shadow: 0 4px 24px rgba(0,0,0,.8) !important; }',

        /* Название фильма */
        '.full-start__title { font-size: 1.4rem !important; font-weight: 300 !important; color: ' + TEXT_PRI + ' !important; letter-spacing: .04em !important; margin-bottom: 4px !important; }',

        /* Год, жанр, страна — компактно */
        '.full-start__right-line { color: ' + TEXT_SEC + ' !important; font-size: .75rem !important; gap: 8px !important; }',
        '.full-start__tag { color: ' + TEXT_SEC + ' !important; font-size: .7rem !important; padding: 2px 7px !important; border: 1px solid #2a2a2a !important; border-radius: 4px !important; background: transparent !important; }',

        /* Описание */
        '.full-start__description { color: #909090 !important; font-size: .8rem !important; line-height: 1.6 !important; max-width: 520px !important; margin-top: 8px !important; }',

        /* Кнопки действий */
        '.full-start__buttons .button { background: #1e1e1e !important; color: ' + TEXT_PRI + ' !important; border: 1px solid #2a2a2a !important; border-radius: 7px !important; font-size: .78rem !important; padding: 8px 16px !important; transition: background .2s, border-color .2s !important; }',
        '.full-start__buttons .button:hover, .full-start__buttons .button.focus { background: ' + ACCENT + ' !important; border-color: ' + ACCENT + ' !important; color: #fff !important; }',

        /* Кнопка «Смотреть» — главная */
        '.full-start__buttons .button--play { background: ' + ACCENT + ' !important; border-color: ' + ACCENT + ' !important; color: #fff !important; }',
        '.full-start__buttons .button--play:hover, .full-start__buttons .button--play.focus { background: #c1121f !important; border-color: #c1121f !important; }',

        /* Оценка на странице */
        '.full-start__rate-val { font-size: 1.1rem !important; font-weight: 500 !important; color: ' + TEXT_PRI + ' !important; }',
        '.full-start__rate-name { font-size: .65rem !important; color: ' + TEXT_SEC + ' !important; }',

        /* Разделитель секций */
        '.title--small { color: ' + TEXT_SEC + ' !important; font-size: .7rem !important; font-weight: 400 !important; letter-spacing: .1em !important; text-transform: uppercase !important; border-bottom: 1px solid #1e1e1e !important; padding-bottom: 6px !important; margin-bottom: 10px !important; }',

        /* Всплывающее меню / модалка */
        '.selector, .modal { background: #111 !important; border: 1px solid #222 !important; border-radius: ' + RADIUS + ' !important; }',
        '.selector__item:hover, .selector__item.focus { background: #1e1e1e !important; color: ' + ACCENT + ' !important; }',

        /* Уведомления */
        '.notify { background: #161616 !important; border-left: 3px solid ' + ACCENT + ' !important; border-radius: 6px !important; color: ' + TEXT_PRI + ' !important; font-size: .78rem !important; }',

        /* Прогресс-бар просмотра */
        '.card__viewed-line { background: ' + ACCENT + ' !important; height: 2px !important; border-radius: 0 0 ' + RADIUS + ' ' + RADIUS + ' !important; }',

        /* Поиск */
        '.search__input { background: #141414 !important; border: 1px solid #2a2a2a !important; border-radius: 7px !important; color: ' + TEXT_PRI + ' !important; font-size: .85rem !important; }',
        '.search__input:focus { border-color: ' + ACCENT + ' !important; outline: none !important; }',

    ].join('\n');

    // ─── Inject ───────────────────────────────────────────────────────────────
    function inject() {
        var el = document.createElement('style');
        el.id  = 'dm-theme';
        el.textContent = CSS;
        document.head.appendChild(el);
        console.log('[' + PLUGIN_NAME + '] тема применена');
    }

    // ─── Регистрация плагина ──────────────────────────────────────────────────
    window.plugin_dark_minimal = function () {
        // Ждём готовности Lampa
        if (typeof Lampa === 'undefined') {
            console.warn('[' + PLUGIN_NAME + '] Lampa не найдена');
            return;
        }

        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') inject();
        });

        // На случай если app:ready уже был
        if (document.readyState !== 'loading') inject();
    };

    // Автостарт
    if (typeof Lampa !== 'undefined') {
        window.plugin_dark_minimal();
    } else {
        document.addEventListener('DOMContentLoaded', window.plugin_dark_minimal);
    }

})();
