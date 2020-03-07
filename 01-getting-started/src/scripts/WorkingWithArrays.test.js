import myArrayList from './WorkingWithArrays.js';

let list1 = new myArrayList();

test("myArrayList: Add(1) should be 'the number has been added to the array'", () => {
    expect(list1.add(1)).toBe("The number has been added to the array.");
    expect(list1.add(2)).toBe("The number has been added to the array.");
    expect(list1.add(3)).toBe("The number has been added to the array.");
    expect(list1.add(4)).toBe("The number has been added to the array.");
    expect(list1.add("1")).toBe("The number has been added to the array.");
    expect(list1.add('a')).toBe("Not a valid number.");
    console.log(list1.show);
});

test("myArrayList: show() shows current contents", () => {
    expect(list1.show()).toBe("1,2,3,4,1");
    list1.add(12);
    expect(list1.show()).toBe("1,2,3,4,1,12");
});


test("myArrayList: total() display total of current contents", () => {
    expect(list1.add(4)).toBe("The number has been added to the array.");
    expect(list1.show()).toBe("1,2,3,4,1,12,4");
    expect(list1.total()).toBe(27);
    list1.add(15);
    expect(list1.total()).toBe(42);
    list1.add(-10); // add negative number
    expect(list1.total()).toBe(32);

});

test("myArrayList: clear() clears the array", () => {
    expect(list1.clear()).toBe("The array is empty.");
    list1.add(15);
    expect(list1.clear()).toEqual("The array is empty.");

});

