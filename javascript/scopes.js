a = 1;

function example() {
    const z = 30;
    console.log(`a=${a}`);
    if (true) {
        var x = 10;
        console.log(`x=${x}`);
        let y = 20;
        console.log(`y=${y}`);
    }
    console.log(`y=${y}`);
    z = 40;
}

example();