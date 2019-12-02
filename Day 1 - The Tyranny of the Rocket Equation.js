/**
 * Advent of Christmas 2019 | Day 1 | The Tyranny of the Rocket Equation
 *
 * Challenge explanation: https://adventofcode.com/2019/day/1
 *
 * NB; Assertions below make use of the node assertion API https://nodejs.org/api/assert.html
 *     and are best viewed with Quokka https://quokkajs.com.
 *
 * Answer submitted by https://github.com/fa-repo.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
// SOURCE DATA                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////

let rocketModules = `114106
87170
133060
70662
134140
125874
50081
133117
100409
95098
70251
134043
87501
85034
110678
80615
64647
88555
106387
143755
101246
142348
92684
62051
94894
65873
78473
64042
147982
145898
85591
121413
132163
94351
80080
73554
106598
135174
147951
132517
50925
115752
114022
73448
50451
56205
81474
90028
124879
137452
91036
87221
126590
130592
91503
148689
86526
105924
52411
146708
149280
52100
80024
115412
91204
132726
59837
129863
140980
109574
103013
84105
138883
144861
126708
140290
54417
138154
125187
91537
90338
61150
61702
95888
100484
82115
122141
63986
138234
54150
57651
124570
88460
112144
112334
119114
58220
143221
86568
148706`;

rocketModules = rocketModules.split("\n").map(Number);

////////////////////////////////////////////////////////////////////////////////////////////////////
// PART ONE                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Calculate amount of fuel needed to launch rocket module
 *
 * @param {integer} mass of rocket module
 * @returns {integer} fuel required to launch rocket module
 */
function getFuelFromMass(mass) {
    const fuel = Math.floor(mass / 3) - 2;
    return Math.max(0, fuel);
}

const testA = { fuel: getFuelFromMass(12), target: 2 };
assert(testA.fuel === testA.target, `Test A failed | ${testA.fuel} should match ${testA.target}`);

const testB = { fuel: getFuelFromMass(14), target: 2 };
assert(testB.fuel === testB.target, `Test A failed | ${testB.fuel} should match ${testB.target}`);

const testC = { fuel: getFuelFromMass(1969), target: 654 };
assert(testC.fuel === testC.target, `Test A failed | ${testC.fuel} should match ${testC.target}`);

const testD = { fuel: getFuelFromMass(100756), target: 33583 };
assert(testD.fuel === testD.target, `Test A failed | ${testD.fuel} should match ${testD.target}`);

let totalFuel = rocketModules.map(getFuelFromMass);
totalFuel = totalFuel.reduce((accumulator, value) => accumulator + value, 0);

console.log(totalFuel); // PART ONE ANSWER: 3403509

////////////////////////////////////////////////////////////////////////////////////////////////////
// PART TWO                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Calculate the fuel needed to launch the rocket module including the mass of the additional fuel
 *
 * @param {integer} mass of rocket module
 * @returns {integer} fuel required to launch rocket module
 */
function getFuelFromMass2(mass) {
    let fuel = getFuelFromMass(mass);
    let totalFuel = fuel;

    while (fuel > 0) {
        fuel = getFuelFromMass(fuel);
        totalFuel = totalFuel + fuel;
    }

    return totalFuel;
}

const testF = { fuel: getFuelFromMass2(14), target: 2 };
assert(testF.fuel === testF.target, `Test A failed | ${testF.fuel} should match ${testF.target}`);

const testG = { fuel: getFuelFromMass2(1969), target: 966 };
assert(testG.fuel === testG.target, `Test A failed | ${testG.fuel} should match ${testG.target}`);

const testH = { fuel: getFuelFromMass2(100756), target: 50346 };
assert(testH.fuel === testH.target, `Test A failed | ${testH.fuel} should match ${testH.target}`);

totalFuel = rocketModules
    .map(getFuelFromMass2)
    .reduce((accumulator, value) => accumulator + value, 0);

console.log(totalFuel); // PART TWO ANSWER: 5102369
