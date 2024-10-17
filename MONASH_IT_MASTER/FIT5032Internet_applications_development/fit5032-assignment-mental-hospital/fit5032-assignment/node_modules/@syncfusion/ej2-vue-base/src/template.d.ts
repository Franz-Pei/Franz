/**
 * Compiler function that convert the template property to DOM element.
 *
 * @param {any} templateElement - represents value of the template property from the component.
 * @param {Object} helper - represents helper object to utilize on template compilation.
 * @returns {NodeList} template element that append to the component.
 */
export declare function compile(templateElement: any, helper?: Object): (data: Object | JSON, component?: any, propName?: any, element?: any, root?: any) => Object;
