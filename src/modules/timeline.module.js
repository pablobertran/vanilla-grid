import VGLogger from "./logger.module.js";
import {htmlToElements} from "../utils/utils";

export class TimelineModule {
    constructor(wrapper, events) {
        const newNode = document.createElement('div');
        const timelineWrapper = wrapper.appendChild(newNode);
        timelineWrapper.classList.add('timeline-wrapper');
        this.wrapper = timelineWrapper;
        this.parent = events;
        VGLogger.log(`VGrid | Timeline initiated!`, 'info');
    }

    render(params = []) {
        params.map( row => {
            const rowElement = this.#getRow(row);
            this.wrapper.append(rowElement);
        });
    }

    #getRow(row) {
        const rowElement = document.createElement('article');
        rowElement.classList.add('timeline-row');
        rowElement.classList.add(`timeline-row_id_${row.id}`);
        rowElement.insertAdjacentHTML('beforeend', `<div class="row-detail" [data-row-id]="${row.id}">${row.label}</div>`);
        this.parent.setCustomEvent(row.id, row.callback, rowElement);

        row.cells.map( cell => {
            const detailsCell = this.#getCell(cell, rowElement);
            row.append( detailsCell );
        });

        return rowElement;
    }

    #getCell(cell = {}, row) {
        let template = `<div class="row-cel"></div>`;
        let detailsCell = htmlToElements(template);

        if(cell.id) {
            template = `<div class="row-cel timeline_${cell.id}"></div>`;
            detailsCell = htmlToElements(template);
            this.parent.setCustomEvent(cell.id, cell.callback, htmlToElements(detailsCell));
        }

        return detailsCell;
    }
}
