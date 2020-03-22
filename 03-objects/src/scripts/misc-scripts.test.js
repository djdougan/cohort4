import miscScripts from "./misc-scripts";

test("Test: createUUID() ", () => {
    let uuid1 = miscScripts.createUUID();
    let uuid2 = miscScripts.createUUID();
    let uuid3 = miscScripts.createUUID();
    let uuid4 = miscScripts.createUUID();

    expect(uuid1 === uuid1).toBe(true);
    expect(uuid1 === uuid2).toBe(false);
    expect(uuid1 === uuid3).toBe(false);
    expect(uuid1 === uuid4).toBe(false);

    expect(uuid2 === uuid1).toBe(false);
    expect(uuid2 === uuid2).toBe(true);
    expect(uuid2 === uuid3).toBe(false);
    expect(uuid2 === uuid4).toBe(false);

    expect(uuid3 === uuid1).toBe(false);
    expect(uuid3 === uuid2).toBe(false);
    expect(uuid3 === uuid3).toBe(true);
    expect(uuid3 === uuid4).toBe(false);

    expect(uuid4 === uuid1).toBe(false);
    expect(uuid4 === uuid2).toBe(false);
    expect(uuid4 === uuid3).toBe(false);
    expect(uuid4 === uuid4).toBe(true);


});