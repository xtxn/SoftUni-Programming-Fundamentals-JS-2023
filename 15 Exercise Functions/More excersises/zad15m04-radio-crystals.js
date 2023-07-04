function radioCrystals(array) {
    let target = array[0];

    for (let i = 1; i < array.length; i++) {

        let chunk = array[i];
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let targetMatched = chunk === target;

        let transport = (x) => {
            console.log(`Transporting and washing`);
            chunk = Math.trunc(x)
        }

        console.log(`Processing chunk ${chunk} microns`);

        if (!targetMatched) {
            while (chunk / 4 >= target) {
                chunk /= 4;
                cutCount++;
            }
        }
        if (cutCount > 0) {
            console.log(`Cut x${cutCount}`);
            transport(chunk);

        }

        if (!targetMatched) {
            while (chunk * 0.8 >= target) {
                chunk *= 0.8;
                lapCount++;
            }
        }
        if (lapCount > 0) {
            console.log(`Lap x${lapCount}`);
            transport(chunk);
        }

        if (!targetMatched) {
            while (chunk - 20 >= target) {
                chunk -= 20;
                grindCount++;
            }
        }
        if (grindCount > 0) {
            console.log(`Grind x${grindCount}`);
            transport(chunk);
        }

        if (!targetMatched) {
            while (chunk - 2 >= target - 1) {
                chunk -= 2;
                etchCount++;
            }
        }
        if (etchCount > 0) {
            console.log(`Etch x${etchCount}`);
            transport(chunk);
        }

        if (chunk !== target) {
            chunk += 1;
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${chunk} microns`);
    }
}
radioCrystals([1000, 4000, 8100])