const { Series, DataFrame } = require('pandas-js');
const Immutable = require('immutable');

/*
const ds = new Series([1, 2, 3, 4], {name: 'My test name', index: [2, 3, 4, 5]})
console.log(ds.toString());
// Returns:
// 2  1
// 3  2
// 4  3
// 5  4
// Name: My test name, dtype: dtype(int)
*/


/*
const ds = new Series([1, 2, 3]);

// Returns Series([2, 3]);
ds.filter(ds.gte(2));

console.log(ds.toString());

*/

/*
const ds = new Series([1, 2, 3], {name: 'Test name'})

// Returns Series([true, false, false])
ds.eq(1);

// Returns Series([false, true, true])
ds.eq(new Series([0, 2, 3]));

// Returns Series([false, true, true])
ds.eq(Immutable.List([0, 2, 3]));

// Returns Series([false, true, true])
ds.eq([0, 2, 3]);

// Returns Series([2, 3])
ds.filter(ds.eq([0, 2, 3]));

console.log(ds.toString());

*/


const df = new DataFrame(Immutable.Map({x: new Series([1, 2]), y: new Series([2, 3])}));

// Returns DataFrame(Immutable.Map({x: Series([2]), y: Series([3]));
df.filter(df.get('x').gt(1));

// Returns DataFrame(Immutable.Map({x: Series([2]), y: Series([3]));
df.filter([false, true]);

// Returns DataFrame(Immutable.Map({x: Series([2]), y: Series([3]));
df.filter(Immutable.Map([false, true]));

