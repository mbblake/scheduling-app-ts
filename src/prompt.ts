import readline from 'readline';

export class Prompt {
    private _rl;

    constructor() {
        this._rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    ask(query: string): Promise<any> {
        return new Promise(resolve => this._rl.question(query, resolve));
    }

    close(): any {
        this._rl.close();
    }
}

export const p = new Prompt();
