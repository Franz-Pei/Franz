import { PropType } from 'vue';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import { CustomRendering } from '@fullcalendar/core/internal';
declare const FullCalendar: import("vue").DefineComponent<{
    options: PropType<CalendarOptions>;
}, unknown, {
    renderId: number;
    customRenderingMap: Map<string, CustomRendering<any>>;
}, {}, {
    getApi(): Calendar;
    buildOptions(suppliedOptions: CalendarOptions | undefined): CalendarOptions;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: PropType<CalendarOptions>;
}>>, {}>;
export default FullCalendar;
