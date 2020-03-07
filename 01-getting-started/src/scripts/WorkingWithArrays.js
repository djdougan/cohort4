

class myArrayList {
    constructor() {
        this.data = [];

    };

    add(num) {
        let result = "";
        if (typeof num === 'string') {
            num = parseFloat(num);
        }
        if (isNaN(num)) {
            result = "Not a valid number.";
        } else {
            this.data.push(num);
            result = "The number has been added to the array.";
        }
        return result;
    };
    show() {
        return this.data.toString();
    };
    total() {
        var result = 0;
        this.data.forEach(x => {
            result += x;
        });
        return result;
    };
    clear() {
        this.data.length = 0;
        return "The array is empty.";
    };
};

export default myArrayList;