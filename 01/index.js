import input from "./input";

const getInput = () => input.split("\n").map(Number);

////////////////////////////////////////////////////////////////////////////////////////////////////
// PART ONE                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////

const getFuel = mass => Math.max(0, Math.floor(mass / 3) - 2);

/**
 * Part one tests
 */

const testA = { fuel: getFuel(12), target: 2 };
assert(testA.fuel === testA.target, `Test A failed | ${testA.fuel} should match ${testA.target}`);

const testB = { fuel: getFuel(14), target: 2 };
assert(testB.fuel === testB.target, `Test A failed | ${testB.fuel} should match ${testB.target}`);

const testC = { fuel: getFuel(1969), target: 654 };
assert(testC.fuel === testC.target, `Test A failed | ${testC.fuel} should match ${testC.target}`);

const testD = { fuel: getFuel(100756), target: 33583 };
assert(testD.fuel === testD.target, `Test A failed | ${testD.fuel} should match ${testD.target}`);

/**
 * Part one answer
 */

let totalFuel = getInput().map(getFuel);
totalFuel = totalFuel.reduce((accumulator, value) => accumulator + value); // 3403509

////////////////////////////////////////////////////////////////////////////////////////////////////
// PART TWO                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////

function getFuelTotal(mass) {
    let fuel = getFuel(mass);
    return fuel && fuel + getFuelTotal(fuel);
}

/**
 * Part two tests
 */

const testF = { fuel: getFuelTotal(14), target: 2 };
assert(testF.fuel === testF.target, `Test A failed | ${testF.fuel} should match ${testF.target}`);

const testG = { fuel: getFuelTotal(1969), target: 966 };
assert(testG.fuel === testG.target, `Test A failed | ${testG.fuel} should match ${testG.target}`);

const testH = { fuel: getFuelTotal(100756), target: 50346 };
assert(testH.fuel === testH.target, `Test A failed | ${testH.fuel} should match ${testH.target}`);

/**
 * Part two answer
 */

totalFuel = getInput()
    .map(getFuelTotal)
    .reduce((accumulator, value) => accumulator + value); // 5102369
