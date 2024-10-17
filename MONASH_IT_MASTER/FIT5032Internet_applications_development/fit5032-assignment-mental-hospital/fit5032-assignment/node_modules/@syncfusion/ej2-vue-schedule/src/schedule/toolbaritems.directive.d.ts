import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { ToolbarItemModel } from '@syncfusion/ej2-schedule';
export declare let ToolbarItemsDirective: any;
export declare const ToolbarItemsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-toolbaritems` directive represent a custom toolbar items of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-toolbaritems>
 *    <e-toolbaritem name='Today'></<e-toolbaritem>
 *    <e-toolbaritem name='DateRangeText'></e-toolbaritem>
 *    <e-toolbaritem prefixIcon='e-icons e-cut' text='Cut'></e-toolbaritem>
 *   <e-toolbaritems>
 * </ejs-schedule>
 * ```
 */
export declare let ToolbarItemDirective: DefineVueDirective<ToolbarItemModel>;
export declare const ToolbarItemPlugin: {
    name: string;
    install(Vue: any): void;
};
