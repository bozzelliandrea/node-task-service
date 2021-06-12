export default class CastException extends Error {

    constructor(message: string) {
        super(message);
        this.name = "CastException";
    }
}