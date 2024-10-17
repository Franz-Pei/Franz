var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { setTemplateEngine, getTemplateEngine, getUniqueID, createElement, detach, extend, getValue } from '@syncfusion/ej2-base';
import { aVue as Vue, isExecute } from './component-base';
var stringCompiler = getTemplateEngine();
/**
 * Compiler function that convert the template property to DOM element.
 *
 * @param {any} templateElement - represents value of the template property from the component.
 * @param {Object} helper - represents helper object to utilize on template compilation.
 * @returns {NodeList} template element that append to the component.
 */
export function compile(templateElement, helper) {
    var _this = this;
    return function (data, context, propName, element, root) {
        var returnEle;
        if (context) {
            var plugins = context.vueInstance && context.vueInstance.plugins ? { plugins: context.vueInstance.plugins } : {};
            var vueInstance = context.vueInstance ? context.vueInstance :
                ((root && root.vueInstance) ? root.vueInstance : null);
            var pid = getUniqueID('templateParentDiv');
            var id = getUniqueID('templateDiv');
            var ele = createElement('div', {
                id: pid,
                innerHTML: '<div id="' + id + '"></div>'
            });
            document.body.appendChild(ele);
            if (!isExecute && (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function'))) {
                var vueSlot_1 = getCurrentVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot_1) {
                    // Compilation for Vue 3 slot template
                    var app = Vue.createVNode({
                        render: function () {
                            return vueSlot_1["" + templateElement]({ data: data });
                        }
                    }, plugins);
                    ele.innerHTML = '';
                    // Get values for Vue 3 slot template
                    getValues(app, context.vueInstance, root);
                    Vue.render(app, ele);
                    returnEle = ele.childNodes;
                    if (vueInstance) {
                        var templateInstance = vueInstance.templateCollection;
                        if (!templateInstance) {
                            vueInstance.templateCollection = {};
                            templateInstance = vueInstance.templateCollection;
                        }
                        if (propName) {
                            if (!templateInstance["" + propName]) {
                                templateInstance["" + propName] = [];
                            }
                            templateInstance["" + propName].push(ele);
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
                var tempObj = templateElement.call(_this, {});
                var object = tempObj;
                var propsData = getValue('template.propsData', tempObj);
                var dataObj_1 = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance
                };
                if (!object.template) {
                    object.template = object[Object.keys(object)[0]];
                }
                var templateCompRef = void 0;
                if (object.template.extends) {
                    templateCompRef = object.template.extends._context.components.template;
                }
                else {
                    templateCompRef = object.template._context.components[templateElement.name];
                    if (!templateCompRef) {
                        var key = Object.keys(object.template._context.components)[0];
                        templateCompRef = object.template._context.components["" + key];
                    }
                }
                var tempRef_1;
                if (propsData) {
                    if (templateCompRef.setup) {
                        tempRef_1 = Object.assign({}, propsData);
                    }
                    else {
                        tempRef_1 = Object.assign(templateCompRef.data(), propsData);
                    }
                }
                else {
                    if (templateCompRef.setup) {
                        tempRef_1 = Object.assign({}, dataObj_1.data);
                    }
                    else {
                        tempRef_1 = Object.assign(templateCompRef.data(), dataObj_1.data);
                    }
                    if (templateCompRef.components) {
                        var objkeys = Object.keys(templateCompRef.components) || [];
                        var _loop_1 = function (objstring) {
                            var intComponent = templateCompRef.components["" + objstring];
                            if (intComponent && intComponent.data) {
                                if (!intComponent.__data) {
                                    intComponent.__data = intComponent.data;
                                }
                                intComponent.data = function (proxy) {
                                    return Object.assign(intComponent.__data.call(proxy), dataObj_1.data);
                                };
                            }
                        };
                        for (var _i = 0, objkeys_1 = objkeys; _i < objkeys_1.length; _i++) {
                            var objstring = objkeys_1[_i];
                            _loop_1(objstring);
                        }
                    }
                }
                if (templateCompRef.setup) {
                    plugins = Object.assign(plugins, data);
                }
                templateCompRef.data = function () { return tempRef_1; };
                var app = Vue.createVNode(templateCompRef, plugins);
                ele.innerHTML = '';
                // Get values for Vue 3 functional template
                getValues(app, context.vueInstance, root);
                Vue.render(app, ele);
                returnEle = ele.childNodes;
                dataObj_1.parent = null;
                if (vueInstance) {
                    var templateInstance = vueInstance.templateCollection;
                    if (!templateInstance) {
                        vueInstance.templateCollection = {};
                        templateInstance = vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance["" + propName]) {
                            templateInstance["" + propName] = [];
                        }
                        templateInstance["" + propName].push(ele);
                    }
                }
                detach(ele);
            }
            else if (typeof templateElement === 'string' || (templateElement.prototype && templateElement.prototype.CSPTemplate && typeof templateElement === 'function')) {
                var vueSlot_2 = getVueSlot(context.vueInstance, templateElement, root);
                if (vueSlot_2) {
                    // Get provide values for Vue 2 slot template
                    var provided_1 = {};
                    var getProvideValues_1 = function (vueinstance) {
                        if (vueinstance['$parent']) {
                            getProvideValues_1(vueinstance.$parent);
                        }
                        if (vueinstance['_provided'] && Object.keys(vueinstance['_provided']).length > 0) {
                            provided_1 = __assign({}, provided_1, vueinstance._provided);
                        }
                    };
                    var vueInstance_1 = context.vueInstance ? context.vueInstance :
                        ((root && root.vueInstance) ? root.vueInstance : null);
                    if (vueInstance_1) {
                        getProvideValues_1(vueInstance_1);
                    }
                    // Compilation for Vue 2 slot template
                    var vueTemplate = new Vue({
                        provide: __assign({}, provided_1),
                        render: function () {
                            return vueSlot_2["" + templateElement]({ data: data });
                        }
                    });
                    vueTemplate.$mount('#' + id);
                    returnEle = ele.childNodes;
                    if (vueInstance_1) {
                        var templateInstance = vueInstance_1.templateCollection;
                        if (!templateInstance) {
                            vueInstance_1.templateCollection = {};
                            templateInstance = vueInstance_1.templateCollection;
                        }
                        if (propName) {
                            if (!templateInstance["" + propName]) {
                                templateInstance["" + propName] = [];
                            }
                            templateInstance["" + propName].push(returnEle[0]);
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
                var tempObj = templateElement.call(_this, {});
                var templateFunction = tempObj.template;
                var propsData = getValue('template.propsData', tempObj);
                var dataObj = {
                    data: { data: extend(tempObj.data || {}, data) },
                    parent: context.vueInstance
                };
                if (propsData) {
                    templateFunction = tempObj.template.extends;
                    dataObj.propsData = propsData;
                }
                if (typeof templateFunction !== 'function') {
                    templateFunction = Vue.extend(templateFunction);
                }
                if (templateFunction.options.setup) {
                    dataObj.propsData = Object.assign(dataObj.propsData || {}, data);
                }
                var templateVue = new templateFunction(dataObj);
                // let templateVue = new Vue(tempObj.template);
                // templateVue.$data.data = extend(tempObj.data, data);
                templateVue.$mount('#' + id);
                returnEle = ele.childNodes;
                dataObj.parent = null;
                if (vueInstance) {
                    var templateInstance = vueInstance.templateCollection;
                    if (!templateInstance) {
                        vueInstance.templateCollection = {};
                        templateInstance = vueInstance.templateCollection;
                    }
                    if (propName) {
                        if (!templateInstance["" + propName]) {
                            templateInstance["" + propName] = [];
                        }
                        templateInstance["" + propName].push(returnEle[0]);
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
    var vueInstance = cInstance ? cInstance : ((root && root.vueInstance) ? root.vueInstance : null);
    if (!vueInstance) {
        return;
    }
    // Get globally defined variables.
    app['appContext'] = vueInstance['$']['appContext'];
    // Get provide value from child component.
    var provided = {};
    var getProvideValue = function (vueinstance) {
        if (vueinstance['$'] && vueinstance['$']['parent']) {
            getProvideValue(vueinstance.$.parent);
        }
        if (vueinstance['provides'] && Object.keys(vueinstance['provides']).length > 0) {
            provided = __assign({}, provided, vueinstance.provides);
        }
    };
    getProvideValue(vueInstance);
    if (app['appContext']['provides']) {
        app.appContext.provides = __assign({}, app.appContext.provides, provided);
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
    var instance = (root && root.vueInstance) ? root.vueInstance : vueInstance;
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
    var slots = vueInstance.$slots;
    var scopedSlots = vueInstance.$scopedSlots;
    var vSlots = vueInstance.scopedSlots;
    var children = vueInstance.children;
    if (scopedSlots && scopedSlots["" + templateElement]) {
        return scopedSlots;
    }
    else if (slots && slots.default) {
        var childSlots = slots.default;
        for (var i = 0; i < childSlots.length; i++) {
            var slot = getVueChildSlot(getSlot(childSlots[parseInt(i.toString(), 10)]), templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    else if (vSlots && vSlots["" + templateElement]) {
        return vSlots;
    }
    else if (children) {
        for (var i = 0; i < children.length; i++) {
            var slot = getVueChildSlot(getSlot(children[parseInt(i.toString(), 10)]), templateElement);
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
    var slot = (vnode.componentOptions && vnode.componentOptions.children) ? vnode.componentOptions :
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
    var slots = (root && root.vueInstance) ? root.vueInstance.$slots : vueInstance.$slots;
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
    if (slots && slots["" + templateElement]) {
        return slots;
    }
    else if (slots && slots.default) {
        var childSlots = slots.default();
        childSlots = childSlots.flatMap(function (item) { return Array.isArray(item.children) ? item.children : item; });
        for (var i = 0; i < childSlots.length; i++) {
            var slot = getChildVueSlot(childSlots[parseInt(i.toString(), 10)].children, templateElement);
            if (slot) {
                return slot;
            }
        }
    }
    return undefined;
}
