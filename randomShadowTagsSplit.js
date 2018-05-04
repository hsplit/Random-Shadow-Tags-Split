/*
    randomShadowTags Created by H.Split
    https://github.com/hsplit/Random-Shadow-Tags-Split
*/
/*
    <script src="js/randomShadowTagsSplit.js"></script>
    <script> randomShadowTags(); </script>
*/
/*
* recommended params
* randomShadowTags( outlineSize, boxShadowSize )
* outlineSize: 0 - 3 (default 0)
* boxShadowSize: 0 - 30  (default 30)
*
* examples
*
* randomShadowTags();      // only shadows default (0, 30)
* randomShadowTags(1);     // add black lines 1px
* randomShadowTags(-1);    // nothing
*
* randomShadowTags(1,0);   // only black lines 1px
* randomShadowTags(0,30);  // only shadows 30px
* randomShadowTags(0,0);   // nothing
*/

;(function() {
    /*--------------------------------------------------------------------------*/
    const getRandomColor = () => {
        const getRandomColorValue = () => Math.floor(Math.random() * 256);
        const convertTo16 = n => n < 16 ? '0' + n.toString(16) : n.toString(16);
        const getHexColor = () => convertTo16(getRandomColorValue());

        const r = getHexColor();
        const g = getHexColor();
        const b = getHexColor();

        return "#" + r + g + b;
    };

    /*--------------------------------------------------------------------------*/
    //main function
    const randomShadowTags = (outlineSize = 0, boxShadowSize = 30) => {

        if (outlineSize < 0 || (outlineSize < 1 && boxShadowSize < 1)) return;

        const getOutline = outlineSize => outlineSize < 1 ? "" :
            ' outline: ' + outlineSize + 'px solid black; outline-offset: -1px; ';

        const getBoxShadow = boxShadowSize => boxShadowSize < 1 ? "" :
            ' box-shadow: inset 0px 0px ' + boxShadowSize + 'px 1px ' + getRandomColor() + '; ';

        const oldBody = document.body.innerHTML;
        let newBody = "";
        let inTag = false;

        for (let i = 0; i < oldBody.length; i++) {

            let char1 = oldBody.charAt(i);
            let char2 = oldBody.charAt(i + 1);

            if (char1 === '<' && char2 !== '/' && char2 !== '!') {
                newBody += char1;
                inTag = true;
            } else if (char1 === '>' && inTag) {
                newBody += ' style="' + getOutline(outlineSize) + getBoxShadow(boxShadowSize) + '">';
                inTag = false;
            } else {
                newBody += char1;
            }
        }

        document.body.innerHTML = newBody;
    };

    /*--------------------------------------------------------------------------*/
    //add method
    randomShadowTags.getRandomColor = getRandomColor;

    /*--------------------------------------------------------------------------*/
    //export
    if (window.randomShadowTags !== undefined) {
        alert(new Error("randomShadowTags already exists"));
    } else {
        window.randomShadowTags = randomShadowTags;
    }
}());