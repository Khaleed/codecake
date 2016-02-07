export function HashMap () {
    var array = [];
    array.length = 10;
    /**
     * Reduces a string to a numeric value, used for hash table internals
     * @param keyStr {String}
     * @returns {Integer}
     **/
    function hashCode (keyStr) {
        var result = Array.prototype.reduce.call(keyStr, (_hash, char) => {
            return _hash * 31 + char.charCodeAt(0);
        }, 7); 
        return result; 
    }
    this.getVal = key => array[hashCode(key) % array.length];
   
    this.setVal = (key, value) => array[hashCode(key) % array.length] = value;
}
