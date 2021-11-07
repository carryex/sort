import { Sorter } from "./Sorter";
import { NumbersCollections } from "./NumbersCollections";

const nubmers = new NumbersCollections([1,-4,-6,-102,0,-3,-4,4,-100]);
const sorter = new Sorter(nubmers);
sorter.sort();
console.log("NubmersArray: "+nubmers.data);

