import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var HeaderRowsDirective = vueDefineComponent({
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
            return 'e-header-rows';
        }
    }
});
export var HeaderRowsPlugin = {
    name: 'e-header-rows',
    install: function (Vue) {
        Vue.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
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
export var HeaderRowDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-header-row';
        }
    }
});
export var HeaderRowPlugin = {
    name: 'e-header-row',
    install: function (Vue) {
        Vue.component(HeaderRowPlugin.name, HeaderRowDirective);
    }
};
