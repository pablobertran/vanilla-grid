import {ConfigModule} from "../config/config.module.js";
import VGLogger from "./logger.module.js";

export class EventsModule extends ConfigModule {
    constructor() {
        super();
    }

    initEvents() {
        this.#setListeners();
    }

    #setListeners() {
        const events = Object.keys(this.eventHandlers);
        const wrapper = document.querySelector(`.${this.settings.gridSettings.wrapperClass}`);
        events.forEach( function assignEventHandlers(eventName) {
            wrapper.addEventListener(eventName, this.eventHandlers[eventName]);
        }, this);
    }

    eventHandlers = {
        nav_period: function navPeriodEventHandler(e) {
            VGLogger.log(`Period Changed to: ${e.path[0].dataset.period}`, 'info');
        },
        nav_today: function navPeriodNavToday(e) {
            VGLogger.log(`Navigate to current date!`, 'info');
        },
        nav_to: function navPeriodNavTo(e) {
            VGLogger.log(`Navigate ${e.path[0].dataset.to}`, 'info');
        }
    }
}
