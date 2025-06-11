/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function() {
    const array1 = ['https://www.cameronsworld.net/', 'https://www.thisworddoesnotexist.com/', 'https://www.lecinemaclub.com/']
    const array2 = ['https://javier.xyz/emoji-to-scale/', 'https://the-next.eliterature.org/exhibition/afterflash/index.html/', 'https://github.com/n0shake/Public-APIs']
    const array3 = ['https://www.minnpost.com/business/2016/08/rise-and-fall-gopher-protocol/', 'https://www.newreader.net/', 'https://2bit.neocities.org/']
    const array = [array1, array2, array3]
    const randomArray = array[Math.floor(Math.random() * array.length)];

    randomArray.forEach((link) => {
      window.open(link,  '_blank');
    })
  };
}

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
