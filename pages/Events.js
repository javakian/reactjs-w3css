import { EventEmitter } from "events";

class Events {
    constructor() {
        this.eventEmitter = new EventEmitter();
    }

    on(eventName, listener) {
        this.eventEmitter.on(eventName, listener);
    }

    removeEventListener(eventName, listener) {
        this.eventEmitter.removeListener(eventName, listener);
    }

    emit(event, payload, error = false) {
        this.eventEmitter.emit(event, payload, error);
    }

    getEventEmitter() {
        return this.eventEmitter;
    }
}

export const events = new Events;