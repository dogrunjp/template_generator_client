import { SvelteComponentTyped } from "svelte";
import type { CommonComponentParameters } from "../types/CommonComponentParameters";
declare const __propDef: {
    props: {
        params: CommonComponentParameters;
        schema: any;
        value: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ArrayProps = typeof __propDef.props;
export type ArrayEvents = typeof __propDef.events;
export type ArraySlots = typeof __propDef.slots;
export default class Array extends SvelteComponentTyped<ArrayProps, ArrayEvents, ArraySlots> {
}
export {};
