import displayIcon from './common/helpers/displayIcon';
import { IconType } from "./common/helpers/types";
describe('Testy dla funkcji displayIcon czy zwraca poprawne wartości', () => {

    test('First Place', () => {
      const displayIconReturnValue = displayIcon(IconType.FirstPlace);
      console.log(displayIconReturnValue);
      expect(true).toBe(true);
    });
  
  });