import input from "./input";

function run(program, noun, verb) {
    const memory = program.split(",").map(Number);

    if (typeof noun !== "undefined") memory[1] = noun;
    if (typeof verb !== "undefined") memory[2] = verb;

    let address = 0;

    while (true) {
        const position = memory[address];
        const param1Pos = memory[address + 1];
        const param2Pos = memory[address + 2];
        const param1 = memory[param1Pos];
        const param2 = memory[param2Pos];
        const position = memory[address + 3];

        if (position === 1) {
            memory[position] = param1 + param2;
            address = address + 4;
            continue;
        } else if (position === 2) {
            memory[position] = param1 * param2;
            address = address + 4;
            continue;
        }

        break;
    }

    return memory.join(",");
}

/**
 * Tests
 */

const testA = { out: run("1,0,0,0,99"), target: "2,0,0,0,99" };
assert(testA.out === testA.target, `Test A failed | ${testA.out} should match ${testA.target}`);

const testB = { out: run("2,3,0,3,99"), target: "2,3,0,6,99" };
assert(testB.out === testB.target, `Test A failed | ${testB.out} should match ${testB.target}`);

const testC = { out: run("2,4,4,5,99,0"), target: "2,4,4,5,99,9801" };
assert(testC.out === testC.target, `Test A failed | ${testC.out} should match ${testC.target}`);

const testD = { out: run("1,1,1,4,99,5,6,0,99"), target: "30,1,1,4,2,5,6,0,99" };
assert(testD.out === testD.target, `Test A failed | ${testD.out} should match ${testD.target}`);

const testE = {
    out: run("1,9,10,3,2,3,11,0,99,30,40,50"),
    target: "3500,9,10,70,2,3,11,0,99,30,40,50"
};
assert(testE.out === testE.target, `Test A failed | ${testE.out} should match ${testE.target}`);

/**
 * Part one answer
 */

const part_one_answer = run(input, 12, 2).split(",")[0];
console.log(part_one_answer); // 6730673

/**
 * Part two answer
 */

run(input, 37, 49).split(",")[0]; // 19690720
const part_two_answer = 100 * 37 + 49;
console.log(part_two_answer); // 3749
