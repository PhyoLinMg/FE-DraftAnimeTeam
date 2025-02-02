
export class CustomError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "CustomError"; // Set the error name
    }
}

