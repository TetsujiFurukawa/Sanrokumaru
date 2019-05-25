export class Session {
    login: boolean;
    adimn: boolean;
    userId: string;
    firstName: string;
    lastName: string;

    constructor() {
        this.login = false;
        this.adimn = false;
    }

    reset(): Session {
        this.login = false;
        this.adimn = false;
        this.userId = '';
        this.firstName = '';
        this.lastName = '';

        return this;
    }
}
