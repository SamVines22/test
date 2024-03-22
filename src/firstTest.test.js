//insert tests here!!
const functions = require('./functions.js');


/*it('works', () => {

    expect(functions.firstTest("Lewis")).toBe("Hello, Lewis"); 
}) ;


test('hello', ()=> {
    expect(functions.secondTest(1,2)).toBe(3);
})*/  


it('capitalize', ()=> {
    
    expect(functions.capitalize("test")).toBe("TEST");
    expect(functions.capitalize("bEllend")).toBe("BELLEND");    

});

it('reverse', ()=> {
    expect(functions.reverseString("gimp")).toBe("pmig");
    expect(functions.reverseString("poo")).toBe("oop");
    expect(functions.reverseString("Abba")).toBe("abbA");
})

test('calculator', ()=> {
    let obj = functions.calculator();
    expect(obj.add(2,3)).toBe(5);
    expect(obj.subtract(5,3)).toBe(2);
    expect(obj.divide(10,2)).toBe(5);
    expect(obj.multiply(10,2)).toBe(20);
})
    
test('caesar', ()=> {
    expect(functions.caesar("gimp", 0)).toStrictEqual("gimp");
    expect(functions.caesar("gimp", 2)).toStrictEqual("ikor");
    expect(functions.caesar("XYZ",3)).toStrictEqual("ABC");
    expect(functions.caesar("bb!", 27)).toStrictEqual("cc!");
})

test('analyseArray', ()=> {
    const obj = functions.analyseArray([1,2,3]);
    expect(obj.length).toStrictEqual(3);
    expect(obj.average).toStrictEqual(2);
    expect(obj.min).toBe(1);
    expect(obj.max).toBe(3);
    expect(obj).toStrictEqual({
        "average": 2,
        "min": 1,
        "max":3,
        "length": 3})

})