export interface DateAsStringFormatter {
  format(date: Date): string;
}

export class DateFormatBuilder {
  private _intlDateTimeFormat: Intl.DateTimeFormat;
  private _intlDateTimeOptions: Intl.DateTimeFormatOptions;

  constructor(
    private readonly _locale: string,
    defaultOptions: Intl.DateTimeFormatOptions
  ) {
    this._intlDateTimeFormat = new Intl.DateTimeFormat(_locale);
    this._intlDateTimeOptions = defaultOptions;
  }

  setOptions(options: Intl.DateTimeFormatOptions): this {
    this._setOptions(options);
    this._intlDateTimeFormat = new Intl.DateTimeFormat(
      this._locale,
      this._intlDateTimeOptions
    );
    return this;
  }

  getResolvedOptions(): Intl.DateTimeFormatOptions {
    return this._intlDateTimeFormat.resolvedOptions();
  }

  setWeekday(weekday: 'narrow' | 'short' | 'long'): this {
    const options = this._assignOptions({
      weekday,
    });
    this._setOptions(options);
    return this;
  }

  setYear(year: 'numeric' | '2-digit'): this {
    const options = this._assignOptions({
      year,
    });
    this._setOptions(options);
    return this;
  }

  setMonth(month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'): this {
    const options = this._assignOptions({
      month,
    });
    this._setOptions(options);
    return this;
  }

  setDay(day: 'numeric' | '2-digit'): this {
    const options = this._assignOptions({
      day,
    });
    this._setOptions(options);
    return this;
  }

  setHour(hour: 'numeric' | '2-digit'): this {
    const options = this._assignOptions({
      hour,
    });
    this._setOptions(options);
    return this;
  }

  setMinute(minute: 'numeric' | '2-digit'): this {
    const options = this._assignOptions({
      minute,
    });
    this._setOptions(options);
    return this;
  }

  setSecond(second: 'numeric' | '2-digit'): this {
    const options = this._assignOptions({
      second,
    });
    this._setOptions(options);
    return this;
  }

  setTimezone(timeZoneName: 'short' | 'long'): this {
    const options = this._assignOptions({
      timeZoneName,
    });
    this._setOptions(options);
    return this;
  }

  createFormatter(): DateAsStringFormatter {
    const formatFunc = this._intlDateTimeFormat.format.bind(this);
    return {
      format: (date: Date) => formatFunc(date),
    };
  }

  private _assignOptions(
    options: Partial<Intl.DateTimeFormatOptions>
  ): Intl.DateTimeFormatOptions {
    const currentOpts = this._intlDateTimeFormat.resolvedOptions();
    const updatedOpts = Object.assign({}, currentOpts, options);
    return updatedOpts;
  }

  private _setOptions(
    options: Partial<Intl.DateTimeFormatOptions>
  ): Intl.DateTimeFormatOptions {
    this._intlDateTimeOptions = options;
    return this._intlDateTimeOptions;
  }
}
