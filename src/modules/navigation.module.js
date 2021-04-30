import VGLogger from "./logger.module.js";

export class NavigationModule {
    constructor(wrapper, navigationSettings) {
        this.settings = navigationSettings;
        const newNode = document.createElement('header');
        const timelineWrapper = wrapper.appendChild(newNode);
        timelineWrapper.classList.add('nav-wrapper');
        this.wrapper = timelineWrapper;
        VGLogger.log(`VGrid | Navigation initiated!`, 'info');
        this.#renderNavigation();
    }

    #renderNavigation() {
        let navigationTemplate = ``;
        if (this.settings?.isMonthPeriod) navigationTemplate += `<button class="nav__period" data-period="month">Month</button>`;
        if (this.settings?.isWeekPeriod) navigationTemplate += `<button class="nav__period" data-period="week">Week</button>`;
        if (this.settings?.isDayPeriod) navigationTemplate += `<button class="nav__period" data-period="day">Day</button>`;

        navigationTemplate += `<button class="nav__today">Today</button>`;
        navigationTemplate += `<button class="nav__prev" data-to="prev"><</button>`;
        navigationTemplate += `<button class="nav__next" data-to="next">></button>`;

        this.wrapper.innerHTML = navigationTemplate;
        this.#setEvents();
    }

    #setEvents() {
        document.querySelectorAll('.vanilla-grid-wrapper .nav__period, .vanilla-grid-wrapper .nav__today, .vanilla-grid-wrapper .nav__prev, .vanilla-grid-wrapper .nav__next')
            .forEach(function setPeriodEvents(element) {
                let eventName = '';
                if (element.classList.value === 'nav__period') eventName = 'nav_period';
                if (element.classList.value === 'nav__today') eventName = 'nav_today';
                if (['nav__next', 'nav__prev'].indexOf(element.classList.value) > -1 ) eventName = 'nav_to';

                element.addEventListener('click', function navPeriod(event) {
                    const customEvent = new Event(eventName, {
                        bubbles: true,
                        composed: false,
                        cancelable: false,
                    });

                    event.target.dispatchEvent(customEvent);
                });
            });
    }
}
