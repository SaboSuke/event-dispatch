export default class EventDispatch {
    /**
     * @desc Emits a custom events of your chosing
     *
     * @return {EventDispatch}
     */
    constructor() { }

    dispatch(name, event) {
        let callbacks = this[name];
        if (callbacks) callbacks.forEach(callback => callback(event));

        return this;
    };

    on(name, callback) {
        let callbacks = this[name];
        if (!callbacks) this[name] = [callback];
        else callbacks.push(callback);

        return this;
    };
}