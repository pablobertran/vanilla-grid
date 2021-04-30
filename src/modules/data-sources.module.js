"use strict";

export class DataSourcesModule {
  constructor() {
    this.dataSources = {};
  }

  add(name, dataSource) {
    if(this.dataSources.hasOwnProperty(name)){
      throw Error(`DataSource ${name} already exists!`);
    }

    this.dataSources[name] = dataSource;
  }

  remove(name) {
    delete this.dataSources[name];
  }

  exists(name) {
    return !!this.dataSources.hasOwnProperty(name);
  }
}
