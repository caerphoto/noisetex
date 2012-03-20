var addNoise;

if (typeof addNoise !== "function") {
    addNoise = function (element, size, alpha) {
        // Renders a noise block of the given size then sets it as the given
        // element's background image. Very low alpha values (< 0.2) are
        // recommended to stop the texture being too overpowering.

        // Example:
        // addNoise(document.body, 200, 0.04);

        "use strict";

        var noiseCanvas = document.createElement("canvas"),
            noiseCtx,
            pixelData, pixels,
            x, y, sx, sy,
            rand;

        size = size || 100;
        alpha = alpha || 0.1;
        if (alpha > 1.0) {
            alpha = 1.0;
        }

        // Bail out if browser doesn't support canvas functions.
        if (!noiseCanvas.getContext || !element || !element.style) {
            return;
        }

        noiseCanvas.width = noiseCanvas.height = size;
        noiseCtx = noiseCanvas.getContext("2d");

        pixelData = noiseCtx.getImageData(0, 0, size, size);
        pixels = pixelData.data;

        // Render a monochrome black noise block
        for (x = 0, sx = pixels.length; x < sx; x += 4) {
            // First 3 numbers are R, G and B.
            pixels[x] = pixels[x + 1] = pixels[x + 2] = 0;

            // 4th number is alpha.
            rand = Math.random();
            // Bitwise OR is about 30% to 50% faster than Math.floor() in most
            // browsers, according to:
            // http://jsperf.com/math-floor-vs-math-round-vs-parseint/33
            // Note that the operation is actually a truncation, so for negative
            // numbers will behave like Math.ceil().
            pixels[x + 3] = (255 * rand * rand * alpha) | 0;
        }

        noiseCtx.putImageData(pixelData, 0, 0);

        pixelData = "url(" + noiseCanvas.toDataURL() + ")";

        // Beware: takes up lots of space in Firebug (etc.) element view ;)
        element.style.backgroundImage = pixelData;

        return pixelData;
    };
}
