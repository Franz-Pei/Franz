import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { HeaderRowsModel } from '@syncfusion/ej2-schedule';
export declare let HeaderRowsDirective: any;
export declare const HeaderRowsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-header-rows` directive represent a header rows of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
export declare let HeaderRowDirective: DefineVueDirective<HeaderRowsModel>;
export declare const HeaderRowPlugin: {
    name: string;
    install(Vue: any): void;
};
