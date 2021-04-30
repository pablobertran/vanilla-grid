"use strict";

import {TimelineModule} from "./modules/timeline.module.js";
import {NavigationModule} from './modules/navigation.module.js';
import {FiltersModule} from "./modules/filters.module.js";
import VGLogger from "./modules/logger.module.js";
import {DataSourcesModule} from "./modules/data-sources.module.js";
import {EventsModule} from "./modules/events.module.js";


export default class extends EventsModule {
    constructor(params = null) {
        super();
        this.gridTimeline = null;
        this.gridNavigation = null;
        this.gridFilters = null;
        this.dataSources = new DataSourcesModule();
        this.uniqueID = (((1+Math.random())*0x10000)|0).toString(16).substring(1);

        this.settings.gridSettings = {
            ...this.settings.gridSettings,
            ...params
        };

        VGLogger.log(`New VanillaGrid Instance Created!`, `log`);
    }

    create(gridDOMIdentifier) {
        this.#setWrapper(gridDOMIdentifier);
        this.#renderNavigation();
        this.#renderFilters();
        this.#renderTimeline();
        this.initMainEvents();
    }

    #renderTimeline() {
        this.gridTimeline = new TimelineModule(this.gridWrapper, this);
    }

    #renderNavigation() {
        this.gridNavigation = new NavigationModule(this.gridWrapper, this.getSettingValue('navigation'));
    }

    #renderFilters() {
        this.gridFilters = new FiltersModule(this.gridWrapper);
    }

    #setWrapper(wrapper) {
        this.gridWrapper = document.querySelector(wrapper);
        const wrapperClass = this.getSettingValue('wrapperClass');
        this.gridWrapper.classList.add(`${wrapperClass}`);
        this.gridWrapper.classList.add(`vg-${this.uniqueID}`);
    }
}