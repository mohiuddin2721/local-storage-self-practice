/* const car = [{name: 'bmw'}, {name: 'toyota'}, {name: 'nisan'}, {name: 'honda'}, {name: 'honda'}, {name: 'honda'}];
const election = ['razzak', 'alomgir', 'jasim', 'bappa', 'jayed', 'jayed', 'jayed'];
const election2 = {
    razzak: 1,
    alomgir: 1,
    jasim: 1,
    bappa: 1,
    jayed: 4,
} */

let db = {};

const addToDb = item => {
    // db.razzak = 1;
    // db['razzak'] = 1;
    // db[item] = 1;
    // console.log(db);

    const storedItem = localStorage.getItem('cheka');
    if (storedItem) {
        // console.log(storedItem);
        // console.log(typeof storedItem);
        db = JSON.parse(storedItem);
    }

    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }
    // console.log(db);
    localStorage.setItem('cheka', JSON.stringify(db));

}

const removeItem = item => {
    const storedItem = localStorage.getItem('cheka');
    if (storedItem) {
        const storedObject = JSON.parse(storedItem);
        delete storedObject[item];
        localStorage.setItem('cheka', JSON.stringify(storedObject));
    }  
}