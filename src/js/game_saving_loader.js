import reader from './reader';
import parser from './parser';
import GameSaving from './game_saving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await reader();
      const value = await parser(data);
      const parseValue = JSON.parse(value);
      const gameSaving = new GameSaving(parseValue);
      return gameSaving;
    } catch (error) {
      throw new Error('Failed to load game saving');
    }
  }
}
