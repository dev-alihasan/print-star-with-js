// define a function named StarS
function StarS(printStar) {
  // start a loop to create each line of stars
  for (let line = 1; line <= printStar; line++) {
    // initialize an empty string to store stars for the current line
    let starIcon = "";

    // add stars to the current line based on the line number
    // for example, if line = 3, add *** to starIcon
    for (let i = 0; i < line; i++) {
      starIcon += "*";
    }

    // print the stars for the current line
    console.log(starIcon);
  }
}

// call the StarS function with an argument of 20 to print a pattern of stars with 20 rows
StarS(20);
