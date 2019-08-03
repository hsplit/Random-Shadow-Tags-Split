## Random Shadow Tags Split
Module for students who study HTML.
The module helps you see the real sizes of your elements by adding colored shadows.

### How to use
Add before closing body tag:
    
    <body>
    ...
        <script src="*your_path*/randomShadowTagsSplit.js"></script>
        <script> randomShadowTags(); </script>
    </body>
#### Examples

    randomShadowTags(outlineSize, boxShadowSize);
Recommended params: outlineSize(0..3), boxShadowSize(0..30).

**example** | **result**
--- | ---
randomShadowTags(); | `only shadows 30xp` - default (0, 30)
randomShadowTags(`1`); | add black `lines 1px` and default `shadows 30px`
randomShadowTags(`-1`); | `nothing`
randomShadowTags(`1,0`); | `only` black `lines 1px` (real sizes including lines)
randomShadowTags(`0,15`); | `only shadows 15px`
randomShadowTags(`0,0`); | `nothing`

#### Snippet

You can use code from file [snippetModule.js](https://github.com/hsplit/random-shadow-tags-split/blob/master/snippetModule.js) to create snippet in chrome.

#### Additional
Method returns a random hex color.
    
    randomShadowTags.getRandomColor();