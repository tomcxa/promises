import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {
        const value = read().then(json);
        return value;
    }
}
