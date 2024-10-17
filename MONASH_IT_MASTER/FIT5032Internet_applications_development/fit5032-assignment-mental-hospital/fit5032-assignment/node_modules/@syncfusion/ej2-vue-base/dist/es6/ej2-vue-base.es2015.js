import * as Vue from 'vue';
import { getValue, isNullOrUndefined, extend, setProxyToRaw, getTemplateEngine, getUniqueID, createElement, detach, setTemplateEngine } from '@syncfusion/ej2-base';

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Clone the Vue compiler instance.
 *
 * @param {any} obj - representes the Vue compiler.
 * @returns {any} cloned object of Vue compiler.
 */
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) {
    return obj;
}
else {
    const newObj = {};
    if (obj != null) {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                newObj[`${key}`] = obj[`${key}`];
            }
        }
    }
    newObj.default = obj;
    return newObj;
} }
const curVue = _interopRequireWildcard(Vue);
const isExecute = (parseInt(curVue['version'], 10) > 2) ? false : true;
const aVue = !isExecute ? curVue : (curVue['default']['default'] ? curVue['default']['default'] : curVue['default']);
const gh = curVue['h'];
const vueDefineComponent = (options) => { return !isExecute ? aVue['defineComponent'](options) : aVue['extend'](options); };
const ComponentBase = vueDefineComponent({
    name: 'ComponentBase',
    data() {
        return {
            tagMapper: {},
            tagNameMapper: {},
            hasInjectedModules: false,
            hasChildDirective: false,
            childDirObjects: '',
            propKeys: {},
            isDecorator: false
        };
    },
    created() {
        if (this.ej2Instance) {
            this.ej2Instances = this.isVue3 ? aVue.toRaw(this.ej2Instance) : this.ej2Instance;
        }
        if (!this.propKeys) {
            return;
        }
        for (const prop of this.propKeys) {
            this.ej2Instances.addEventListener(prop, (args) => {
                this.$emit(prop, args);
            });
        }
        const injectables = getValue('$root.$options.provide', this);
        let vueInjectables = getValue('$parent.$options.provide', this);
        vueInjectables = !isNullOrUndefined(vueInjectables) ? vueInjectables : getValue('$.parent.provides', this);
        if (this.hasInjectedModules && !isExecute) {
            let prevModule = [];
            if (injectables && injectables.managed) {
                this.isDecorator = true;
                prevModule = this.getInjectedServices() || [];
            }
            else if (injectables) {
                prevModule = injectables[this.ej2Instances.getModuleName()] || [];
            }
            else if (vueInjectables) {
                prevModule = this.getInjectedServices() || [];
            }
            const curModule = this.ej2Instances.getInjectedModules() || [];
            for (const mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
    },
    mounted() {
        const cusEle = this.$el ? this.$el.querySelectorAll('div.e-directive') : null;
        if (!isExecute && cusEle) {
            for (let i = 0; i < cusEle.length; i++) {
                const cusElement = cusEle[parseInt(i.toString(), 10)];
                if (cusElement.parentElement) {
                    cusElement.parentElement.removeChild(cusElement);
                }
            }
        }
        this.ej2Instances.isVue = true;
        this.ej2Instances.isVue3 = this.isVue3;
        this.ej2Instances.vueInstance = this;
        if (this.isVue3) {
            this.ej2Instances.ej2Instances = this.ej2Instances;
            this.ej2Instances.referModels = this.models;
            this.setModelValue();
        }
        this.ej2Instances.appendTo(this.$el);
    },
    updated() {
        this.updated();
    },
    beforeDestroy() {
        this.destroyComponent();
    },
    beforeUnmount() {
        this.destroyComponent();
    },
    methods: {
        setModelValue() {
            if (!isNullOrUndefined(this.modelValue) || !isNullOrUndefined(this.$attrs.modelValue)) {
                const key = this.models.toString().match(/checked|value/) || [];
                const propKey = key[0];
                if (!isNullOrUndefined(propKey)) {
                    this.ej2Instances[`${propKey}`] = !isNullOrUndefined(this.modelValue) ? this.modelValue : this.$attrs.modelValue;
                }
            }
        },
        updated() {
            if (this.isVue3) {
                this.setModelValue();
            }
            if (this.hasChildDirective) {
                const childKey = {};
                this.fetchChildPropValues(childKey);
                const curChildDir = JSON.stringify(childKey);
                if (this.childDirObjects !== curChildDir) {
                    this.childDirObjects = curChildDir;
                    this.assignValueToWrapper(childKey, false);
                }
            }
        },
        getInjectedServices() {
            let ret = [];
            let provide;
            if (this.$root && this.isDecorator) {
                provide = getValue('$root.$options.provide', this);
            }
            else if (this.$vnode) {
                provide = getValue('$vnode.context.$options.provide', this);
            }
            else if (this.$parent) {
                provide = getValue('$parent.$options.provide', this);
            }
            if (isNullOrUndefined(provide) && !isNullOrUndefined(this.$)) {
                provide = getValue('$.parent.provides', this);
            }
            if (provide) {
                let injectables = provide;
                if (typeof provide === 'function') {
                    if (provide.managed) {
                        const pKey = provide.managed;
                        const pValue = Object.keys(pKey);
                        let key;
                        if (this.$root && this.isDecorator) {
                            key = Object.keys(this.$root);
                        }
                        else if (this.$vnode) {
                            key = Object.keys(this.$vnode.context);
                        }
                        else if (this.$parent) {
                            key = Object.keys(this.$parent);
                        }
                        for (let i = 0; i < pValue.length; i++) {
                            for (let j = 0; j < key.length; j++) {
                                if ((key[parseInt(j.toString(), 10)].indexOf(pValue[parseInt(i.toString(), 10)])) !== -1) {
                                    if (this.$root && this.isDecorator) {
                                        pKey[pValue[parseInt(j.toString(), 10)]] = this.$root[key[parseInt(i.toString(), 10)]];
                                    }
                                    else if (this.$vnode) {
                                        pKey[pValue[parseInt(i.toString(), 10)]] = this.$vnode.context[key[parseInt(j.toString(), 10)]];
                                    }
                                    else if (this.$parent) {
                                        pKey[pValue[parseInt(i.toString(), 10)]] = this.$parent[key[parseInt(j.toString(), 10)]];
                                    }
                                    injectables = pKey;
                                }
                            }
                        }
                    }
                    else if (this.$vnode) {
                        injectables = this.$vnode.context.$options.provide();
                    }
                    else if (this.$parent) {
                        injectables = this.$parent.$options.provide();
                    }
                }
                ret = injectables[this.ej2Instances.getModuleName()] || [];
            }
            this.isDecorator = false;
            return ret;
        },
        destroyComponent() {
            this.ej2Instances.destroy();
            this.$el.style.visibility = 'hidden';
            this.clearTemplate();
        },
        destroyPortals(element) {
            if (element) {
                const destroy = getValue('__vue__.$destroy', element);
                if (destroy) {
                    element.__vue__.$destroy();
                }
                else if (!isExecute && element._vnode) {
                    try {
                        aVue.render(null, element);
                    }
                    catch (e) { /* Handle error */ }
                }
                if (element.innerHTML) {
                    element.innerHTML = '';
                }
            }
        },
        bindProperties() {
            const options = {};
            for (const prop of this.propKeys) {
                if (!isNullOrUndefined(this[`${prop}`])) {
                    options[`${prop}`] = this[`${prop}`];
                }
                else if (this[0] && !isNullOrUndefined(this[0][0]) && !isNullOrUndefined(this[0][0][`${prop}`])) {
                    options[`${prop}`] = this[0][0][`${prop}`];
                }
            }
            if (this.hasChildDirective) {
                this.fetchChildPropValues(options);
            }
            if (this.hasInjectedModules) {
                const prevModule = this.getInjectedServices() || [];
                const curModule = this.ej2Instances.getInjectedModules() || [];
                for (const mod of curModule) {
                    if (prevModule.indexOf(mod) === -1) {
                        prevModule.push(mod);
                    }
                }
                this.ej2Instances.injectedModules = prevModule;
            }
            this.assignValueToWrapper(options);
        },
        assignValueToWrapper(option, silent) {
            this.ej2Instances.setProperties(extend({}, {}, option, true), isNullOrUndefined(silent) ? true : silent);
        },
        fetchChildPropValues(childOption) {
            let dirProps = {};
            if (!this.isVue3) {
                dirProps = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
            }
            else {
                let propRef;
                if (this[0] && this[0][1].slots.default) {
                    propRef = this[0][1].slots.default();
                }
                else if (this && this.$ && this.$.slots && this.$.slots.default) {
                    propRef = this.$.slots.default();
                }
                if (propRef) {
                    for (let i = 0; i < propRef.length; i++) {
                        if (propRef[parseInt(i.toString(), 10)].type.methods || propRef[parseInt(i.toString(), 10)].type === 'e-seriescollection') {
                            const key = propRef[parseInt(i.toString(), 10)].type === 'e-seriescollection' ? 'series-collection' :
                                propRef[parseInt(i.toString(), 10)].type.methods.getTag().replace('e-', '');
                            const ref = this.resolveArrayDirectives(propRef[parseInt(i.toString(), 10)].children, key);
                            const spKeys = key.split('-');
                            const controlName = this.ej2Instances.getModuleName().toLowerCase();
                            let keyRef = (spKeys.length > 1 && controlName.indexOf(spKeys[0]) > -1) ? spKeys[1] : spKeys[0];
                            keyRef = keyRef.replace(controlName, '');
                            keyRef = this.tagNameMapper['e-' + key] ? this.tagNameMapper['e-' + key].replace('e-', '') : keyRef;
                            if (controlName === 'splitter' && keyRef === 'panes') {
                                keyRef = 'paneSettings';
                            }
                            else if (controlName === 'bulletchart' && keyRef === 'range') {
                                keyRef = 'ranges';
                            }
                            else if (controlName === 'schedule' && keyRef === 'header') {
                                keyRef = 'headerRows';
                            }
                            dirProps[`${keyRef}`] = ref[`${key}`];
                        }
                    }
                }
                else {
                    return;
                }
            }
            if (!this.childDirObjects) {
                this.childDirObjects = JSON.stringify(dirProps);
            }
            for (const dirProp of Object.keys(dirProps)) {
                childOption[`${dirProp}`] = dirProps[`${dirProp}`];
            }
        },
        resolveArrayDirectives(slots, tagName) {
            let slot = [];
            let innerDirValues;
            slot = slots.default ? slots.default() : slots;
            slot = slot.flatMap((item) => Array.isArray(item.children) ? item.children : item);
            const items = {};
            items[`${tagName}`] = [];
            for (const childSlot of slot) {
                let tempObj = {};
                const tagRef = childSlot.type.methods ? childSlot.type.methods.getTag() : tagName;
                if (childSlot.children) {
                    let key;
                    innerDirValues = this.resolveComplexDirs(childSlot.children, this.tagMapper['e-' + tagName], tagRef);
                    if (innerDirValues.length) {
                        tempObj = innerDirValues;
                    }
                    else {
                        for (let i = 0; i < Object.keys(innerDirValues).length; i++) {
                            key = Object.keys(innerDirValues)[parseInt(i.toString(), 10)];
                            tempObj[`${key}`] = innerDirValues[`${key}`];
                        }
                    }
                }
                if (childSlot.props) {
                    Object.keys(childSlot.props).forEach((key) => {
                        const propName = key.replace(/-[a-z]/g, (e) => { return e[1].toUpperCase(); });
                        if (propName) {
                            tempObj[`${propName}`] = childSlot.props[`${key}`];
                        }
                    });
                }
                if (((/[s]\b/).test(tagRef) && innerDirValues) && (!(/[s]\b/).test(tagName) || innerDirValues.length)) {
                    if (Array.isArray(tempObj)) {
                        tempObj.forEach((item) => { items[`${tagName}`].push(item); });
                    }
                    else {
                        items[`${tagName}`].push(tempObj);
                    }
                }
                else if (tempObj && Object.keys(tempObj).length !== 0) {
                    items[`${tagName}`].push(tempObj);
                }
            }
            return items;
        },
        resolveComplexDirs(slots, tagObject, tagName) {
            let slot = [];
            let innerDirValues;
            slot = slots.default ? slots.default() : slots;
            let items = {};
            for (const childSlot of slot) {
                let tagRef;
                let tag;
                if (tagObject[`${tagName}`]) {
                    tagRef = Object.keys(tagObject[`${tagName}`]);
                    tag = tagRef.find((key) => tagObject[`${tagName}`][`${key}`] ===
                        childSlot.type.methods.getTag().replace(/[s]\b/, ''));
                    tag = tag ? tag : childSlot.type.methods.getTag();
                    tag = (this.tagNameMapper[`${tag}`] ? this.tagNameMapper[`${tag}`] : tag).replace('e-', '');
                    if (this.ej2Instances.getModuleName().toLowerCase() === 'diagram' && tag.indexOf('annotations') !== -1) {
                        tag = 'annotations';
                    }
                }
                if (childSlot.children) {
                    innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                    if (!items[`${tag}`]) {
                        items[`${tag}`] = [];
                    }
                    if (innerDirValues.length > 1) {
                        items[`${tag}`] = innerDirValues;
                    }
                    else {
                        items[`${tag}`].push(innerDirValues);
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1) {
                    items = Object.keys(items).length === 0 && !items.length ? [] : items;
                    if (childSlot.props) {
                        items.push(childSlot.props);
                    }
                }
                else {
                    items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        resolveComplexInnerDirs(slots, tagObject, tagName) {
            let slot = [];
            slot = slots.default ? slots.default() : slots;
            let items = slot.length > 1 ? [] : {};
            for (const childSlot of slot) {
                let innerDirValues = null;
                let tag = childSlot.type.methods.getTag();
                tag = (this.tagNameMapper[`${tag}`] ? this.tagNameMapper[`${tag}`] : tag).replace('e-', '');
                if (childSlot.children) {
                    innerDirValues = this.resolveMultilevelComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                    if ((/[s]\b/).test(tag) || slot.length > 1) {
                        if ((/[s]\b/).test(tag)) {
                            items[`${tag}`] = !items[`${tag}`] ? [] : items[`${tag}`];
                            if (innerDirValues.length) {
                                items[`${tag}`] = innerDirValues;
                            }
                            else {
                                items[`${tag}`].push(innerDirValues);
                            }
                        }
                        else if (innerDirValues && !childSlot.props) {
                            items.push(innerDirValues);
                        }
                    }
                    else {
                        items = innerDirValues ? innerDirValues : items;
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1 && childSlot.props) {
                    if (innerDirValues) {
                        innerDirValues = childSlot.props ? Object.assign(innerDirValues, childSlot.props) : innerDirValues;
                        items.push(innerDirValues);
                    }
                    else if (items.length >= 0) {
                        items.push(childSlot.props);
                    }
                    else {
                        items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                    }
                }
                else {
                    items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        resolveMultilevelComplexInnerDirs(slots, tagObject, tagName) {
            let slot = [];
            slot = slots.default ? slots.default() : slots;
            let items = slot.length > 1 ? [] : {};
            for (const childSlot of slot) {
                let innerDirValues = null;
                let tag = childSlot.type.methods.getTag();
                tag = (this.tagNameMapper[`${tag}`] ? this.tagNameMapper[`${tag}`] : tag).replace('e-', '');
                if (childSlot.children) {
                    innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if ((/[s]\b/).test(tag)) {
                    items[`${tag}`] = !items[`${tag}`] ? [] : items[`${tag}`];
                    if (innerDirValues.length) {
                        items[`${tag}`] = innerDirValues;
                    }
                    else {
                        items[`${tag}`].push(innerDirValues);
                    }
                    if (childSlot.props) {
                        items[`${tag}`].push(childSlot.props);
                    }
                }
                else {
                    items = innerDirValues;
                    items = childSlot.props ? Object.assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        getDirectiveValues(tagDirectives, tagMapper, tagNameMapper) {
            const keyTags = Object.keys(tagMapper);
            const dir = {};
            if (tagDirectives) {
                for (const tagDirective of tagDirectives) {
                    const tagCompOption = tagDirective.componentOptions;
                    if (tagCompOption && tagCompOption.children && this.getTagName(tagCompOption) ||
                        (tagDirective.tag === 'e-seriescollection' && tagDirective.children)) {
                        let dirTag = tagCompOption ? this.getTagName(tagCompOption) : tagDirective.tag;
                        dirTag = (dirTag === 'e-seriescollection') ? 'e-seriesCollection' : dirTag;
                        if (keyTags.indexOf(dirTag) !== -1) {
                            const tagName = tagNameMapper[`${dirTag}`] ? tagNameMapper[`${dirTag}`] : dirTag;
                            dir[tagName.replace('e-', '')] = [];
                            const children = tagCompOption ? tagCompOption.children : tagDirective.children;
                            for (const tagDirChild of children) {
                                const retObj = this.getVNodeValue(tagDirChild, tagMapper[`${dirTag}`], tagNameMapper);
                                if (Object.keys(retObj).length !== 0) {
                                    dir[tagName.replace('e-', '')].push(retObj);
                                }
                            }
                        }
                    }
                }
            }
            return dir;
        },
        getMultiLevelDirValue(tagDirectories, tagKey, tagNameMapper) {
            const mulObj = {};
            for (const tagDir of tagDirectories) {
                let key;
                let children;
                if (tagDir.componentOptions) {
                    key = this.getTagName(tagDir.componentOptions);
                    if (tagDir.componentOptions.children) {
                        children = tagDir.componentOptions.children;
                    }
                }
                else if ((tagDir.tag === 'e-markersettings' || tagDir.tag === 'e-markersetting') && tagDir.children) {
                    key = (tagDir.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                    children = tagDir.children;
                }
                if (key) {
                    const tagName = tagNameMapper[`${key}`] ? tagNameMapper[`${key}`] : key;
                    mulObj[tagName.replace('e-', '')] = [];
                    if (children) {
                        for (const tagDirChild of children) {
                            const mulLevObj = this.getVNodeValue(tagDirChild, tagKey[`${key}`], tagNameMapper);
                            if (Object.keys(mulLevObj).length !== 0) {
                                mulObj[tagName.replace('e-', '')].push(mulLevObj);
                            }
                        }
                    }
                }
            }
            return mulObj;
        },
        getVNodeValue(tagDirective, tagKey, tagNameMapper) {
            let ret = {};
            if (tagDirective.componentOptions || ((tagDirective.tag === 'e-markersettings' || tagDirective.tag === 'e-markersetting') && tagDirective.context)) {
                let dirTag;
                if (tagDirective.componentOptions) {
                    dirTag = this.getTagName(tagDirective.componentOptions);
                }
                else {
                    dirTag = (tagDirective.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                }
                const tagData = tagDirective.data;
                if (typeof tagKey === 'string' && dirTag === tagKey && tagData) {
                    ret = tagData.attrs ? this.getCamelCaseProps(tagData.attrs) : this.getCamelCaseProps(tagData);
                }
                else if (typeof tagKey === 'object') {
                    if (tagDirective.componentOptions.children && (Object.keys(tagKey).indexOf(dirTag) !== -1)) {
                        ret = this.getMultiLevelDirValue(tagDirective.componentOptions.children, tagKey[`${dirTag}`], tagNameMapper);
                    }
                    else if (tagDirective.children && (Object.keys(tagKey).indexOf(dirTag) !== -1) && (dirTag === 'e-markersettings' || dirTag === 'e-markersetting')) {
                        ret = this.getMultiLevelDirValue(tagDirective.children, tagKey[`${dirTag}`], tagNameMapper);
                    }
                    if (tagData && tagData.attrs) {
                        ret = extend(ret, this.getCamelCaseProps(tagData.attrs));
                    }
                }
            }
            return ret;
        },
        /**
         * convert kebab case directive props to camel case.
         *
         * @param {Object} props - Objects in kebab case directive props.
         * @returns {Object} Object converted into camel case directive props.
         */
        getCamelCaseProps(props) {
            const retProps = {};
            for (const prop of Object.keys(props)) {
                retProps[prop.replace(/-[a-z]/g, (e) => { return e[1].toUpperCase(); })] = props[`${prop}`];
            }
            return retProps;
        },
        dataBind() {
            this.ej2Instances.dataBind();
        },
        setProperties(arg, muteOnChange) {
            return this.ej2Instances.setProperties(arg, muteOnChange);
        },
        getTagName(options) {
            let tag = options.tag;
            const optCtor = options.Ctor;
            if (!tag && optCtor && optCtor.extendOptions && optCtor.extendOptions.methods && optCtor.extendOptions.methods.getTag) {
                tag = options.Ctor.extendOptions.methods.getTag();
            }
            return tag;
        }
    }
});
/**
 * Collect public property values for the Vue component.
 *
 * @param {any} options - represents props object.
 * @returns {any} array of props object and `watchobject` respectively.
 */
function getProps(options = {}) {
    if (options.props) {
        for (const prop of options.props) {
            (options.newprops || (options.newprops = {}))[`${prop}`] = {};
            (options.watch || (options.watch = {}))[`${prop}`] = function (newVal) {
                this.ej2Instances[`${prop}`] = newVal;
                if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
                    this.dataBind();
                }
            };
        }
    }
    return [options.newprops, options.watch];
}
if (!isExecute) {
    setProxyToRaw(aVue.toRaw);
}

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
const stringCompiler = getTemplateEngine();
/**
 * Compiler function that convert the template property to DOM element.
 *
 * @param {any} templateElement - represents value of the template property from the component.
 * @param {Object} helper - represents helper object to utilize on template compilation.
 * @returns {NodeList} template element that append to the component.
 */
function compile(templateElement, helper) {
    return (data, context, propName, element, root) => {
        let returnEle;
        if (context) {
            let plugins = context.vueInstance && context.vueInstance.plugins ? { plugins: context.vueInstance.plugins } : {};
            const vueInstance = context.vueInstance ? context.vueInstance :
                ((root && root.vueInstance) ? root.vueInstance : null);
            const pid = getUniqueID('templateParentDiv');
            const id = getUniqueID('templateDiv');
            const ele = createElement('div', {
                id: pid,
                innerHTML: '<div id="' + id + '"></div>'
            });
            document.body.appendChild(ele);
            if (!isExecute && (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function'))) {
                const vueSlot = getCurrentVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot) {
                    // Compilation for Vue 3 slot template
                    const app = aVue.createVNode({
                        render() {
                            return vueSlot[`${templateElement}`]({ data: data });
                        }
                    }, plugins);
                    ele.innerHTML = '';
                    // Get values for Vue 3 slot template
                    getValues(app, context.vueInstance, root);
                    aVue.render(app, ele);
                    returnEle = ele.childNodes;
                    if (vueInstance) {
                        let templateInstance = vueInstance.templateCollection;
                        if (!templateInstance) {
                            vueInstance.templateCollection = {};
                            templateInstance = vueInstance.templateCollection;
                        }
                        if (propName) {
                            if (!templateInstance[`${propName}`]) {
                                templateInstance[`${propName}`] = [];
                            }
                            templateInstance[`${propName}`].push(ele);
                        }
                    }
                    detach(ele);
                }
                else {
                    // Compilation for Vue 3 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            }
            else if (!isExecute) {
                // Compilation for Vue 3 functional template
                const tempObj = templateElement.call(this, {});
                const object = tempObj;
                const propsData = getValue('template.propsData', tempObj);
                const dataObj = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance
                };
                if (!object.template) {
                    object.template = object[Object.keys(object)[0]];
                }
                let templateCompRef;
                if (object.template.extends) {
                    templateCompRef = object.template.extends._context.components.template;
                }
                else {
                    templateCompRef = object.template._context.components[templateElement.name];
                    if (!templateCompRef) {
                        const key = Object.keys(object.template._context.components)[0];
                        templateCompRef = object.template._context.components[`${key}`];
                    }
                }
                let tempRef;
                if (propsData) {
                    if (templateCompRef.setup) {
                        tempRef = Object.assign({}, propsData);
                    }
                    else {
                        tempRef = Object.assign(templateCompRef.data(), propsData);
                    }
                }
                else {
                    if (templateCompRef.setup) {
                        tempRef = Object.assign({}, dataObj.data);
                    }
                    else {
                        tempRef = Object.assign(templateCompRef.data(), dataObj.data);
                    }
                    if (templateCompRef.components) {
                        const objkeys = Object.keys(templateCompRef.components) || [];
                        for (const objstring of objkeys) {
                            const intComponent = templateCompRef.components[`${objstring}`];
                            if (intComponent && intComponent.data) {
                                if (!intComponent.__data) {
                                    intComponent.__data = intComponent.data;
                                }
                                intComponent.data = function (proxy) {
                                    return Object.assign(intComponent.__data.call(proxy), dataObj.data);
                                };
                            }
                        }
                    }
                }
                if (templateCompRef.setup) {
                    plugins = Object.assign(plugins, data);
                }
                templateCompRef.data = function () { return tempRef; };
                const app = aVue.createVNode(templateCompRef, plugins);
                ele.innerHTML = '';
                // Get values for Vue 3 functional template
                getValues(app, context.vueInstance, root);
                aVue.render(app, ele);
                returnEle = ele.childNodes;
                dataObj.parent = null;
                if (vueInstance) {
                    let templateInstance = vueInstance.templateCollection;
                    if (!templateInstance) {
                        vueInstance.templateCollection = {};
                        templateInstance = vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance[`${propName}`]) {
                            templateInstance[`${propName}`] = [];
                        }
                        templateInstance[`${propName}`].push(ele);
                    }
                }
                detach(ele);
            }
            else if (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function')) {
                const vueSlot = getVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot) {
                    // Get provide values for Vue 2 slot template
                    let provided = {};
                    const getProvideValues = (vueinstance) => {
                        if (vueinstance['$parent']) {
                            getProvideValues(vueinstance.$parent);
                        }
                        if (vueinstance['_provided'] && Object.keys(vueinstance['_provided']).length > 0) {
                            provided = Object.assign({}, provided, vueinstance._provided);
                        }
                    };
                    const vueInstance = context.vueInstance ? context.vueInstance :
                        ((root && root.vueInstance) ? root.vueInstance : null);
                    if (vueInstance) {
                        getProvideValues(vueInstance);
                    }
                    // Compilation for Vue 2 slot template
                    const vueTemplate = new aVue({
                        provide: Object.assign({}, provided),
                        render() {
                            return vueSlot[`${templateElement}`]({ data: data });
                        }
                    });
                    vueTemplate.$mount('#' + id);
                    returnEle = ele.childNodes;
                    if (vueInstance) {
                        let templateInstance = vueInstance.templateCollection;
                        if (!templateInstance) {
                            vueInstance.templateCollection = {};
                            templateInstance = vueInstance.templateCollection;
                        }
                        if (propName) {
                            if (!templateInstance[`${propName}`]) {
                                templateInstance[`${propName}`] = [];
                            }
                            templateInstance[`${propName}`].push(returnEle[0]);
                        }
                    }
                    detach(ele);
                }
                else {
                    // Compilation for Vue 2 string template
                    detach(ele);
                    return stringCompiler(templateElement, helper)(data);
                }
            }
            else {
                // Compilation for Vue 2 functional template
                const tempObj = templateElement.call(this, {});
                let templateFunction = tempObj.template;
                const propsData = getValue('template.propsData', tempObj);
                const dataObj = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance
                };
                if (propsData) {
                    templateFunction = tempObj.template.extends;
                    dataObj.propsData = propsData;
                }
                if (typeof templateFunction !== 'function') {
                    templateFunction = aVue.extend(templateFunction);
                }
                if (templateFunction.options.setup) {
                    dataObj.propsData = Object.assign(dataObj.propsData || {}, data);
                }
                const templateVue = new templateFunction(dataObj);
                // let templateVue = new Vue(tempObj.template);
                // templateVue.$data.data = extend(tempObj.data, data);
                templateVue.$mount('#' + id);
                returnEle = ele.childNodes;
                dataObj.parent = null;
                if (vueInstance) {
                    let templateInstance = vueInstance.templateCollection;
                    if (!templateInstance) {
                        vueInstance.templateCollection = {};
                        templateInstance = vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance[`${propName}`]) {
                            templateInstance[`${propName}`] = [];
                        }
                        templateInstance[`${propName}`].push(returnEle[0]);
                    }
                }
                detach(ele);
            }
        }
        return returnEle || [];
    };
}
setTemplateEngine({ compile: compile });
/**
 * Collect values from the app instance.
 *
 * @param {any} app - represents global application instance
 * @param {any} cInstance - represents Vue component instance
 * @param {any} root - represents parent component instance
 * @returns {void}
 */
function getValues(app, cInstance, root) {
    const vueInstance = cInstance ? cInstance : ((root && root.vueInstance) ? root.vueInstance : null);
    if (!vueInstance) {
        return;
    }
    // Get globally defined variables.
    app['appContext'] = vueInstance['$']['appContext'];
    // Get provide value from child component.
    let provided = {};
    const getProvideValue = (vueinstance) => {
        if (vueinstance['$'] && vueinstance['$']['parent']) {
            getProvideValue(vueinstance.$.parent);
        }
        if (vueinstance['provides'] && Object.keys(vueinstance['provides']).length > 0) {
            provided = Object.assign({}, provided, vueinstance.provides);
        }
    };
    getProvideValue(vueInstance);
    if (app['appContext']['provides']) {
        app.appContext.provides = Object.assign({}, app.appContext.provides, provided);
    }
}
/**
 * Get the Vue2 slot template from the root or current Vue component.
 *
 * @param {any} vueInstance - represents parent Vue instance.
 * @param {any} templateElement - represents component property value
 * @param {any} root - represents root Vue instance
 * @returns {any} template Vue instance
 */
function getVueSlot(vueInstance, templateElement, root) {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    const instance = (root && root.vueInstance) ? root.vueInstance : vueInstance;
    return getVueChildSlot(instance, templateElement);
}
/**
 * Get the Vue2 nested slot template from the root or current Vue component.
 *
 * @param {any} vueInstance - represents parent Vue instance.
 * @param {any} templateElement - represents component property value
 * @returns {any} nested template Vue instance
 */
function getVueChildSlot(vueInstance, templateElement) {
    if (!vueInstance) {
        return undefined;
    }
    const slots = vueInstance.$slots;
    const scopedSlots = vueInstance.$scopedSlots;
    const vSlots = vueInstance.scopedSlots;
    const children = vueInstance.children;
    if (scopedSlots && scopedSlots[`${templateElement}`]) {
        return scopedSlots;
    }
    else if (slots && slots.default) {
        const childSlots = slots.default;
        for (let i = 0; i < childSlots.length; i++) {
            const slot = getVueChildSlot(getSlot(childSlots[parseInt(i.toString(), 10)]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    else if (vSlots && vSlots[`${templateElement}`]) {
        return vSlots;
    }
    else if (children) {
        for (let i = 0; i < children.length; i++) {
            const slot = getVueChildSlot(getSlot(children[parseInt(i.toString(), 10)]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}
/**
 * Collect the component slot directive instance.
 *
 * @param {any} vnode - represents Vue components slot instance.
 * @returns {any} the slot instance of the directive.
 */
function getSlot(vnode) {
    const slot = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions :
        (!vnode.data && (vnode.tag === 'e-markersettings' || vnode.tag === 'e-markersetting')) ? vnode : vnode.data;
    return vnode.componentInstance ? vnode.componentInstance : slot;
}
/**
 * Get the Vue3 slot template from the root or current Vue component.
 *
 * @param {any} vueInstance - represents parent Vue instance.
 * @param {any} templateElement - represents component property value
 * @param {any} root - represents root Vue instance
 * @returns {any} slot template instance
 */
function getCurrentVueSlot(vueInstance, templateElement, root) {
    if (!vueInstance && !(root && root.vueInstance)) {
        return undefined;
    }
    const slots = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
    return getChildVueSlot(slots, templateElement);
}
/**
 * Get the Vue3 nested slot template from the root or current Vue component.
 *
 * @param {any} slots - represents slot instance.
 * @param {any} templateElement - represents component property value
 * @returns {any} nested template Vue instance
 */
function getChildVueSlot(slots, templateElement) {
    if (slots && slots[`${templateElement}`]) {
        return slots;
    }
    else if (slots && slots.default) {
        let childSlots = slots.default();
        childSlots = childSlots.flatMap((item) => Array.isArray(item.children) ? item.children : item);
        for (let i = 0; i < childSlots.length; i++) {
            const slot = getChildVueSlot(childSlots[parseInt(i.toString(), 10)].children, templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}

export { ComponentBase, aVue, compile, getProps, gh, isExecute, vueDefineComponent };
//# sourceMappingURL=ej2-vue-base.es2015.js.map
