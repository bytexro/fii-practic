import { Pet } from './Pet';

export interface Person {
  firstName: string;
  lastName: string;
  pets?: Pet[];
}
