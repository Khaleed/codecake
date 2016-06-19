// Hash table is just an array, coupled with a hash function
export function HashMap () {
    let array = [];
    array.length = 10;

    /**
     * Reduces a string to a numeric value, used for hash table internals
     * @param keyStr {String}
     * @returns {Integer}
     **/
    let hashCode = keyStr => {
        let result = Array.prototype.reduce.call(keyStr, (_hash, char) => {
            return _hash * 31 + char.charCodeAt(0);
        }, 7);
        return result;
    };

    this.getVal = key => {
        let bucket = array[hashCode(key) % array.length];
        if (!bucket) {
            return null;
        }
        // use find
        for (let i = 0, m = bucket.length; i < m; i++) {
            let [tupleKey, tupleValue] = bucket[i];
            if (tupleKey === key) {
                return tupleValue;
            }
        }
        return null;
    };

    this.setVal = (key, value) => {
        let bucket = array[hashCode(key) % array.length];
        if (!bucket) {
            bucket = [];
            array[hashCode(key) % array.length] = bucket;
        }
        // linked list
        return bucket.push([key, value]);
    };
}
