export default class BaseStrategy {
    constructor(type) {
        this.type = type
    }

    target() {
        throw new Error("target() method is undefined")
    }
}