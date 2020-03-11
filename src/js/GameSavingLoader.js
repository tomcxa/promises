/* eslint-disable no-unused-vars */
import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
    static load() {
        return new Promise((resolve, reject) => {
            let parsedData;
            read().then((data) => json(data)).then((value) => {
                parsedData = value;
                resolve(new GameSaving(parsedData));
            });
        });
    }
}
