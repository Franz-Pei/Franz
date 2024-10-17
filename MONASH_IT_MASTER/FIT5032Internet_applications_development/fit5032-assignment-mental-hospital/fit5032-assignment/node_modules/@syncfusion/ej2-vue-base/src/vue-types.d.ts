// @ts-ignore
import Vue, { VueConstructor } from 'vue';
// @ts-ignore
import { DefineComponent } from 'vue';

interface CommonProps {
    isLazyUpdate?: Boolean,
    plugins?: any[]
}

// @ts-ignore
export type DefineVueComponent<Props> = typeof Vue.compile extends (template: string) => Function ? DefineComponent<Props & CommonProps, any, {}, {}, {}, {}, {}, {}, string, Props & CommonProps, Props & CommonProps, {}> : VueConstructor<Vue<{}, Props & CommonProps>>;

//@ts-ignore
export type DefineVueDirective<Props> = typeof Vue.compile extends (template: string) => Function ? DefineComponent<Props, any, {}, {}, {}, {}, {}, {}, string, Props, Props, {}> : VueConstructor<Vue<{}, Props>>;
