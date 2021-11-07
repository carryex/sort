import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";
import { CharactersCollections } from "./CharactersCollections";
import { LinkedList } from "./LindedList";

const nubmers = new NumbersCollections([1,-4,-6,-102,0,-3,-4,4,-100]);
nubmers.sort();
console.log("NubmersArray: " + nubmers.data);

const str = new CharactersCollections('fajioxpqXadAzafd');
str.sort();
console.log("Sortered string: " + str.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-123);
linkedList.add(0);
linkedList.add(13);
linkedList.sort();
console.log(linkedList.print());

