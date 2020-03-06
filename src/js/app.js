/* eslint-disable no-unused-vars */
// TODO: write your code here
import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
    .then((saving) => saving,
        (error) => error);
