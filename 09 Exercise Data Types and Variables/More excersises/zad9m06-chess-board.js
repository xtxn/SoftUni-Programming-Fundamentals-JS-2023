function chessBoard(num) {
    let black = '<span class="black"></span>';
    let white = '<span class="white"></span>'
    console.log(`<div class="chessboard">`)
    for (let i = 0; i < num; i++) {
        console.log(`  <div>`);

        for (let j = 0; j < num; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    console.log(`    ${black}`);
                } else {
                    console.log(`    ${white}`);
                }
            } else {
                if (j % 2 === 0) {
                    console.log(`    ${white}`);
                } else {
                    console.log(`    ${black}`);
                }
            }
        }
        console.log(`  </div>`);
    }
    console.log(`</div>`);
}
chessBoard(2);