
const WorkingWithArrays = {

    "data": [],

    add: (num) => {
        if (!isNaN(parseInt(num))) {
            this.data.push(num);
            return "The number has been added to the array.";
        } else {
            return "not a valid number.";
        }
    },
    show: () => {

    },
    total: () => {

    },
    clear: () => {
        this.data = [];
        return data;
    }
}


export default WorkingWithArrays;