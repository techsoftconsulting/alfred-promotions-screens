import moment from 'moment-timezone';
import timezone from 'moment-timezone';
import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';

const DateTimeUtils = {
    differenceInDays: (a: Date, b: Date): number => {
        return moment(a).diff(moment(b), 'days');
    },
    differenceInHours: (a: Date, b: Date): number => {
        return moment(a).diff(moment(b), 'hours');
    },
    addMonths: (a: Date, months: number) => {
        return moment(a).clone().add(months, 'months').toDate();
    },

    subtractMonths: (a: Date, months: number) => {
        return moment(a).clone().subtract(months, 'months').toDate();
    },

    subtractYears: (a: Date, years: number) => {
        return moment(a).clone().subtract(years, 'years').toDate();
    },
    addDays: (a: Date, days: number) => {
        return moment(a).clone().add(days, 'days').toDate();
    },
    addMinutes: (a: Date, minutes: number) => {
        return moment(a).clone().add(minutes, 'minutes').toDate();
    },
    addHours: (a: Date, hours: number) => {
        return moment(a).clone().add(hours, 'hours').toDate();
    },
    ago(date: Date) {
        return formatDistance(date, new Date(), { addSuffix: true, locale: es });
    },
    subtractDays: (a: Date, days: number) => {
        return moment(a).clone().subtract(days, 'days').toDate();
    },
    subtractWeeks: (a: Date, weeks: number) => {
        return moment(a).clone().subtract(weeks, 'weeks').toDate();
    },
    utc(a: Date) {
        return moment(a).clone().utc().toDate();
    },
    utcOffset(timezone?: string) {
        if (timezone) return moment().tz(timezone).utcOffset();
        return moment(new Date()).utcOffset();
    },
    toTimezone(date: Date, timezone: string) {
        const milis = date.getTime() + (moment().utcOffset() - moment().tz(timezone).utcOffset()) * 60000;
        return new Date(milis);
    },
    hoursOffSet(timezone: string) {
        return (DateTimeUtils.utcOffset() - DateTimeUtils.utcOffset(timezone)) / 60;
    },
    guessTimezone() {
        return moment.tz.guess();
    },
    format: (date: Date, format: string, utc: boolean = false) => {
        if (utc) return moment(date).utc().format(format);
        return moment(date).clone().format(format);
    },
    isPast: (date: Date) => {
        return moment(date).isBefore(new Date());
    },
    age: (date: Date) => {
        return moment().diff(moment(date), 'years');
    },
    fromTime(time: string, format: string | undefined = 'HH:mm') {
        return moment(time, format).toDate();
    },
    fromString(date: string, format: string | undefined = undefined, utc: boolean = false) {
        if (utc) return moment(date, format).utc().toDate();
        return moment(date, format).toDate();
    },
    isAfter(a: Date, b: Date) {
        return moment(a).isAfter(b);
    },
    getDateOnly(a: Date) {
        return moment(a).clone().set({ hours: 0, minute: 0, second: 0, millisecond: 0 }).toDate();
    },
    timezoneList() {
        return timezone.tz.names();
    },
    startOfMonth: (date: Date) => {
        return moment(date).startOf('month').toDate();
    },
    endOfMonth: (date: Date) => {
        return moment(date).endOf('month').toDate();
    },
    startOfDay: (date: Date) => {
        return moment(date).startOf('day').toDate();
    },
    endOfDay: (date: Date) => {
        return moment(date).clone().endOf('day').toDate();
    },
    startOfWeek: (date: Date) => {
        return moment(date).startOf('isoWeek').toDate();
    },
    endOfWeek: (date: Date) => {
        return moment(date).endOf('isoWeek').toDate();
    },
    timezones() {
        return timezone.tz.names();
    },
    daysRange(count: number, interval: number = 1) {
        const start = moment().subtract(count, 'days');

        return [...new Array(count)].map((_, i) => {
            const current = start.clone().add((i + 1) * interval, 'days');

            return moment(current).toDate();
        });
    },
    getNameOfDay(key: string) {
        const map = {
            'MONDAY': 'Lunes',
            'TUESDAY': 'Martes',
            'WEDNESDAY': 'Miércoles',
            'THURSDAY': 'Jueves',
            'FRIDAY': 'Viernes',
            'SATURDAY': 'Sábado',
            'SUNDAY': 'Domingo'
        };
        return map[key] ?? '';
    }
};

export default DateTimeUtils;
