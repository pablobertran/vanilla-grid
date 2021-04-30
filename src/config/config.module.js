const config = {
    gridSettings: {
        wrapperClass: 'vanilla-grid-wrapper',
        gridType: '',
        orientation: 'horizontal',
        detailsOnCreate: false,
        detailsOnDblClick: false,
        dates: {
            from: new Date(),
            timePeriod: 'week',
        },
        navigation: {
            isEnabled: true,
            isWeekPeriod: true,
            isMonthPeriod: true,
            isDayPeriod: true,
        },
        filters: {
            isEnabled: false
        }
    }
};

export class ConfigModule {
  constructor() {
      this.settings = config;
  }

  getSettingValue(key) {
      return this.settings.gridSettings[key];
  }
}
