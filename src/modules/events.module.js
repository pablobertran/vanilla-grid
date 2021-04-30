import {ConfigModule} from "../config/config.module.js";
import VGLogger from "./logger.module.js";

export class EventsModule extends ConfigModule {
    constructor() {
        super();
    }

    initMainEvents() {
        this.#setListeners();
    }

    setCustomEvent(id = '', callback = () => {}, wrap = null, action = 'click') {
        VGLogger.log(`Creating event. ID: ${id}`, 'info');
        const wrapper = wrap ? wrap : document.querySelector(`.${this.settings.gridSettings.wrapperClass}`);
        wrapper.addEventListener(action, callback);
    }

    #setListeners() {
        const events = Object.keys(this.eventHandlers);
        events.forEach( function assignEventHandlers(eventName) {
            this.setCustomEvent(eventName, this.eventHandlers[eventName]);
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
