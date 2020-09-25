//using Matchers
const add = (a, b) => a+b;
const genetateGreeting = (name='Anonynous') => `Hello ${name}`;

// @ts-ignore
test('should add two number', () => {
    const result = add(3,4);
    // @ts-ignore
    expect(result).toBe(7);
});

// @ts-ignore
test('shoule return greeting for name', ()=>{
    const greet = genetateGreeting('joe');
    // @ts-ignore
    expect(greet).toBe('Hello joe');
});

// @ts-ignore
test('shoule return greeting for no name', ()=>{
    const greet = genetateGreeting();
    // @ts-ignore
    expect(greet).toBe('Hello Anonynous');
});