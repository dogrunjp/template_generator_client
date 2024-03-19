import { SvelteComponentTyped } from "svelte";
import type { CommonComponentParameters } from "../types/CommonComponentParameters.js";
declare const __propDef: {
    props: {
        params: CommonComponentParameters;
        schema: any;
        value: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ObjectProps = typeof __propDef.props;
export type ObjectEvents = typeof __propDef.events;
export type ObjectSlots = typeof __propDef.slots;
export default class Object extends SvelteComponentTyped<ObjectProps, ObjectEvents, ObjectSlots> {
}
export {};
