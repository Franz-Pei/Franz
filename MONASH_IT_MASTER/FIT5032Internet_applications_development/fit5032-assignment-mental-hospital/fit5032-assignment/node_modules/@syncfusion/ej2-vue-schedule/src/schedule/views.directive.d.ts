import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { ViewsModel } from '@syncfusion/ej2-schedule';
export declare let ViewsDirective: any;
export declare const ViewsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-views` directive represent a view of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
export declare let ViewDirective: DefineVueDirective<ViewsModel>;
export declare const ViewPlugin: {
    name: string;
    install(Vue: any): void;
};
