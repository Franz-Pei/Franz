'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index_cjs = require('@fullcalendar/core/index.cjs');
var internal_cjs = require('@fullcalendar/core/internal.cjs');

const OPTION_IS_COMPLEX = {
    headerToolbar: true,
    footerToolbar: true,
    events: true,
    eventSources: true,
    resources: true
};

const FullCalendar = vue.defineComponent({
    props: {
        options: Object
    },
    data() {
        return {
            renderId: 0,
            customRenderingMap: new Map()
        };
    },
    methods: {
        getApi() {
            return getSecret(this).calendar;
        },
        buildOptions(suppliedOptions) {
            return {
                ...suppliedOptions,
                customRenderingMetaMap: kebabToCamelKeys(this.$slots),
                handleCustomRendering: getSecret(this).handleCustomRendering,
            };
        },
    },
    render() {
        const customRenderingNodes = [];
        for (const customRendering of this.customRenderingMap.values()) {
            customRenderingNodes.push(vue.h(CustomRenderingComponent, {
                key: customRendering.id,
                customRendering,
            }));
        }
        return vue.h('div', {
            // when renderId is changed, Vue will trigger a real-DOM async rerender, calling beforeUpdate/updated
            attrs: { 'data-fc-render-id': this.renderId }
        }, vue.h(vue.Fragment, customRenderingNodes)); // for containing CustomRendering keys
    },
    mounted() {
        const customRenderingStore = new internal_cjs.CustomRenderingStore();
        getSecret(this).handleCustomRendering = customRenderingStore.handle.bind(customRenderingStore);
        const calendarOptions = this.buildOptions(this.options);
        const calendar = new index_cjs.Calendar(this.$el, calendarOptions);
        getSecret(this).calendar = calendar;
        calendar.render();
        customRenderingStore.subscribe((customRenderingMap) => {
            this.customRenderingMap = customRenderingMap; // likely same reference, so won't rerender
            this.renderId++; // force rerender
            getSecret(this).needCustomRenderingResize = true;
        });
    },
    beforeUpdate() {
        this.getApi().resumeRendering(); // the watcher handlers paused it
    },
    updated() {
        if (getSecret(this).needCustomRenderingResize) {
            getSecret(this).needCustomRenderingResize = false;
            this.getApi().updateSize();
        }
    },
    beforeUnmount() {
        this.getApi().destroy();
    },
    watch: buildWatchers()
});
// Custom Rendering
// -------------------------------------------------------------------------------------------------
const CustomRenderingComponent = vue.defineComponent({
    props: {
        customRendering: Object
    },
    render() {
        const customRendering = this.customRendering;
        const innerContent = typeof customRendering.generatorMeta === 'function' ?
            customRendering.generatorMeta(customRendering.renderProps) : // vue-normalized slot function
            customRendering.generatorMeta; // probably a vue JSX node returned from content-inject func
        return vue.h(vue.Teleport, { to: customRendering.containerEl }, innerContent);
    }
});
// storing internal state:
// https://github.com/vuejs/vue/issues/1988#issuecomment-163013818
function getSecret(inst) {
    return inst;
}
function buildWatchers() {
    let watchers = {
        // watches changes of ALL options and their nested objects,
        // but this is only a means to be notified of top-level non-complex options changes.
        options: {
            deep: true,
            handler(options) {
                let calendar = this.getApi();
                calendar.pauseRendering();
                let calendarOptions = this.buildOptions(options);
                calendar.resetOptions(calendarOptions);
                this.renderId++; // will queue a rerender
            }
        }
    };
    for (let complexOptionName in OPTION_IS_COMPLEX) {
        // handlers called when nested objects change
        watchers[`options.${complexOptionName}`] = {
            deep: true,
            handler(val) {
                // unfortunately the handler is called with undefined if new props were set, but the complex one wasn't ever set
                if (val !== undefined) {
                    let calendar = this.getApi();
                    calendar.pauseRendering();
                    calendar.resetOptions({
                        [complexOptionName]: val
                    }, [complexOptionName]);
                    this.renderId++; // will queue a rerender
                }
            }
        };
    }
    return watchers;
}
// General Utils
// -------------------------------------------------------------------------------------------------
function kebabToCamelKeys(map) {
    const newMap = {};
    for (const key in map) {
        newMap[kebabToCamel(key)] = map[key];
    }
    return newMap;
}
function kebabToCamel(s) {
    return s
        .split('-')
        .map((word, index) => index ? capitalize(word) : word)
        .join('');
}
function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

exports["default"] = FullCalendar;
