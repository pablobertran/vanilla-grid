import VGLogger from "./logger.module.js";

export class TimelineModule {
    constructor(wrapper) {
        const newNode = document.createElement('article');
        const timelineWrapper = wrapper.appendChild(newNode);
        timelineWrapper.classList.add('timeline-wrapper');
        this.wrapper = timelineWrapper;
        VGLogger.log(`VGrid | Timeline initiated!`, 'info');
    }

    createTimelineView(params) {
        const detailTemplate = `<div class="row-detail"></div>`;
        const cellTemplate = `<div class="row-cel"></div>`;


    }
}
