"use strict";

import VGLogger from "./logger.module";

export class DataSourcesModule {
  constructor() {
    this.dataSources = {};
  }

  add(name, dataSource) {
    if(this.dataSources.hasOwnProperty(name)){
      throw Error(`DataSource ${name} already exists!`);
    }

    VGLogger.log(`VanillaGrid | Added dataSource "${name}"`, 'log');
    this.dataSources[name] = dataSource;
  }

  remove(name) {
    delete this.dataSources[name];
  }

  exists(name) {
    return !!this.dataSources.hasOwnProperty(name);
  }
}
