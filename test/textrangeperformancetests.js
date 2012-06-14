rangy.config.preferTextRange = true;

xn.test.suite("Range miscellaneous", function(s) {
    rangy.init();

    var elementCount = 1000;
    var testCount = 10;

    function setUp(t) {
        t.testEl = document.createElement("div");
        t.testEl.innerHTML = new Array(elementCount + 1).join("Some text<br>");
        document.body.appendChild(t.testEl);
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(t.testEl);
        var textLength = textRange.text.length;

        t.textRanges = [];

        for (var i = 0, start, end; i < testCount; ++i) {
            textRange = document.body.createTextRange();
            textRange.moveToElementText(t.testEl);

            start = Math.floor(textLength * Math.random());
            end = start + Math.floor((textLength - start) * Math.random());

            textRange.collapse(true);
            textRange.moveEnd("character", end);
            textRange.moveStart("character", start);
            t.textRanges[i] = textRange;
        }
    }

    function tearDown(t) {
        t.testEl.parentNode.removeChild(t.testEl);
    }

    if (document.body.createTextRange) {
        s.test("TextRange to Range control", function(t) {
            //t.assertEquals(t.testEl.childNodes.length, 2 * elementCount);
            for (var i = 0, len = t.textRanges.length, range; i < len; ++i) {
                t.textRanges[i].select();
            }
        }, setUp, tearDown);

        s.test("TextRange to Range speed test", function(t) {
            //t.assertEquals(t.testEl.childNodes.length, 2 * elementCount);
            for (var i = 0, len = t.textRanges.length, sel; i < len; ++i) {
                t.textRanges[i].select();
                sel = rangy.getSelection();
            }
        }, setUp, tearDown);
    }
}, false);
