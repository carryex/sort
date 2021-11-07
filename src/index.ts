import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollections } from "./CharactersCollections";

const nubmers = new NumbersCollections([1,-4,-6,-102,0,-3,-4,4,-100]);
const sorterNumbers = new Sorter(nubmers);
sorterNumbers.sort();
console.log("NubmersArray: "+nubmers.data);

const str = new CharactersCollections('fajioxpqXadAzafd');
const sorterString = new Sorter(str);
sorterString.sort();
console.log("Sortered string: " + str.data);

