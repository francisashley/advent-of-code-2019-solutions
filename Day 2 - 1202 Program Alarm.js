/**
 * Advent of Christmas 2019 | Day 2 | 1202 Program Alarm
 *
 * Challenge explanation: https://adventofcode.com/2019/day/2
 *
 * NB; Assertions below make use of the node assertion API https://nodejs.org/api/assert.html
 *     and are best viewed with Quokka https://quokkajs.com.
 *
 * Answer submitted by https://github.com/fa-repo.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
// SOURCE DATA                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////

let program =
    "1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,6,23,2,6,23,27,2,27,9,31,1,5,31,35,1,35,10,39,2,39,9,43,1,5,43,47,2,47,10,51,1,51,6,55,1,5,55,59,2,6,59,63,2,63,6,67,1,5,67,71,1,71,9,75,2,75,10,79,1,79,5,83,1,10,83,87,1,5,87,91,2,13,91,95,1,95,10,99,2,99,13,103,1,103,5,107,1,107,13,111,2,111,9,115,1,6,115,119,2,119,6,123,1,123,6,127,1,127,9,131,1,6,131,135,1,135,2,139,1,139,10,0,99,2,0,14,0";

////////////////////////////////////////////////////////////////////////////////////////////////////
// PART ONE                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////

function run(program) {
    const memory = program.split(",").map(Number);

    let address = 0;

    while (true) {
        const instruction = memory[address];
        const param1 = memory[address + 1];
        const param2 = memory[address + 2];
        const noun = memory[param1];
        const verb = memory[param2];
        const position = memory[address + 3];

        if (instruction === 1) {
            memory[position] = noun + verb;
            address = address + 4;
            continue;
        } else if (instruction === 2) {
            memory[position] = noun * verb;
            address = address + 4;
            continue;
        }

        break;
    }

    return memory.join(",");
}

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

console.log(run(program).split(",")[0]); // PART ONE ANSWER 6730673

////////////////////////////////////////////////////////////////////////////////////////////////////
// PART TWO                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////
program =
    "2,37,49,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,6,23,2,6,23,27,2,27,9,31,1,5,31,35,1,35,10,39,2,39,9,43,1,5,43,47,2,47,10,51,1,51,6,55,1,5,55,59,2,6,59,63,2,63,6,67,1,5,67,71,1,71,9,75,2,75,10,79,1,79,5,83,1,10,83,87,1,5,87,91,2,13,91,95,1,95,10,99,2,99,13,103,1,103,5,107,1,107,13,111,2,111,9,115,1,6,115,119,2,119,6,123,1,123,6,127,1,127,9,131,1,6,131,135,1,135,2,139,1,139,10,0,99,2,0,14,0";
console.log(run(program).split(",")[0]); // 19690720

// noun = 37
// verb = 49

console.log(100 * 37 + 49); // PART 2 ANSWER 100 * 37 + 42
