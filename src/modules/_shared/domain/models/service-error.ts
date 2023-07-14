class ServiceError extends Error {
    constructor(
        public readonly message: string,
        public readonly status?: string
    ) {
        super(message);
        Object.setPrototypeOf(this, ServiceError.prototype);
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(message).stack;
        }
        this.stack = new Error().stack;
    }
}

export default ServiceError;
