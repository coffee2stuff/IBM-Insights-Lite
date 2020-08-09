export class IBMInsightsLite {
    private readonly version: string = '2017-10-13';

    private readonly baseURL: string;
    private readonly apiKey: string;
    private readonly requestURL: string;

    constructor(base: string, key: string) {
        this.baseURL = base;
        this.apiKey = key;
        this.requestURL = this.constructURL();
    }

    private constructURL(): string {
        return this.baseURL + `/v3/profile?version=${this.version}`;
    }
}
