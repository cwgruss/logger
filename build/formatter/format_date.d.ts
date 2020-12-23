export interface DateAsStringFormatter {
    format(date: Date): string;
}
export declare class DateFormatBuilder {
    private readonly _locale;
    private _intlDateTimeFormat;
    private _intlDateTimeOptions;
    constructor(_locale: string, defaultOptions: Intl.DateTimeFormatOptions);
    setOptions(options: Intl.DateTimeFormatOptions): this;
    getResolvedOptions(): Intl.DateTimeFormatOptions;
    setWeekday(weekday: 'narrow' | 'short' | 'long'): this;
    setYear(year: 'numeric' | '2-digit'): this;
    setMonth(month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'): this;
    setDay(day: 'numeric' | '2-digit'): this;
    setHour(hour: 'numeric' | '2-digit'): this;
    setMinute(minute: 'numeric' | '2-digit'): this;
    setSecond(second: 'numeric' | '2-digit'): this;
    setTimezone(timeZoneName: 'short' | 'long'): this;
    createFormatter(): DateAsStringFormatter;
    private _assignOptions;
    private _setOptions;
}
