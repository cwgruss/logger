"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatBuilder = void 0;
class DateFormatBuilder {
    constructor(_locale, defaultOptions) {
        this._locale = _locale;
        this._intlDateTimeFormat = new Intl.DateTimeFormat(_locale);
        this._intlDateTimeOptions = defaultOptions;
    }
    setOptions(options) {
        this._setOptions(options);
        this._intlDateTimeFormat = new Intl.DateTimeFormat(this._locale, this._intlDateTimeOptions);
        return this;
    }
    getResolvedOptions() {
        return this._intlDateTimeFormat.resolvedOptions();
    }
    setWeekday(weekday) {
        const options = this._assignOptions({
            weekday,
        });
        this._setOptions(options);
        return this;
    }
    setYear(year) {
        const options = this._assignOptions({
            year,
        });
        this._setOptions(options);
        return this;
    }
    setMonth(month) {
        const options = this._assignOptions({
            month,
        });
        this._setOptions(options);
        return this;
    }
    setDay(day) {
        const options = this._assignOptions({
            day,
        });
        this._setOptions(options);
        return this;
    }
    setHour(hour) {
        const options = this._assignOptions({
            hour,
        });
        this._setOptions(options);
        return this;
    }
    setMinute(minute) {
        const options = this._assignOptions({
            minute,
        });
        this._setOptions(options);
        return this;
    }
    setSecond(second) {
        const options = this._assignOptions({
            second,
        });
        this._setOptions(options);
        return this;
    }
    setTimezone(timeZoneName) {
        const options = this._assignOptions({
            timeZoneName,
        });
        this._setOptions(options);
        return this;
    }
    createFormatter() {
        const formatFunc = this._intlDateTimeFormat.format.bind(this);
        return {
            format: (date) => formatFunc(date),
        };
    }
    _assignOptions(options) {
        const currentOpts = this._intlDateTimeFormat.resolvedOptions();
        const updatedOpts = Object.assign({}, currentOpts, options);
        return updatedOpts;
    }
    _setOptions(options) {
        this._intlDateTimeOptions = options;
        return this._intlDateTimeOptions;
    }
}
exports.DateFormatBuilder = DateFormatBuilder;
//# sourceMappingURL=format_date.js.map