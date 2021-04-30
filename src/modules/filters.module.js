import VGLogger from "./logger.module.js";

export class FiltersModule {
  constructor(wrapper) {
    const newNode = document.createElement('nav');
    const timelineWrapper = wrapper.appendChild(newNode);
    timelineWrapper.classList.add('filters-wrapper');
    this.wrapper = timelineWrapper;
    VGLogger.log(`VGrid | Filters initiated!`, 'info');
  }
}
