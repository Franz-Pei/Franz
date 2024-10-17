import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var ToolbarItemsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render: function (createElement) {
        if (!isExecute) {
            var h = !isExecute ? gh : createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated: function () {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag: function () {
            return 'e-toolbaritems';
        }
    }
});
export var ToolbarItemsPlugin = {
    name: 'e-toolbaritems',
    install: function (Vue) {
        Vue.component(ToolbarItemsPlugin.name, ToolbarItemsDirective);
    }
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
export var ToolbarItemDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-toolbaritem';
        }
    }
});
export var ToolbarItemPlugin = {
    name: 'e-toolbaritem',
    install: function (Vue) {
        Vue.component(ToolbarItemPlugin.name, ToolbarItemDirective);
    }
};
