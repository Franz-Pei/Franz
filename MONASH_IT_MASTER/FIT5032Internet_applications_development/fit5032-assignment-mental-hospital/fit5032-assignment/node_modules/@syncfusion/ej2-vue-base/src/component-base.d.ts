export declare const isExecute: boolean;
export declare const aVue: any;
export declare const gh: any;
export declare const vueDefineComponent: Function;
declare type ComponentBaseType = {
    getInjectedServices(): Object[];
    updated(): void;
    bindProperties(): void;
    assignValueToWrapper(option: Object, silent?: boolean): void;
    fetchChildPropValues(childOption: Object): void;
    getDirectiveValues(tagDirectives: any, tagMapper: {
        [key: string]: Object;
    }, tagNameMapper: Object): Object;
    getMultiLevelDirValue(tagDirectories: any, tagKey: string | Object, tagNameMapper: Object): Object;
    getVNodeValue(tagDirective: any, tagKey: string | Object, tagNameMapper: Object): Object;
    /**
     * convert kebab case directive props to camel case
     */
    getCamelCaseProps(props: Object): Object;
    dataBind(): void;
};
export declare const ComponentBase: ComponentBaseType;
/**
 * Collect public property values for the Vue component.
 *
 * @param {any} options - represents props object.
 * @returns {any} array of props object and `watchobject` respectively.
 */
export declare function getProps(options?: any): any;
export {};
