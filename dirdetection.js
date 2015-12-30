(function($) {

    var VERSION = "0.1.0";


    //Persian - Range:
    var rtlChars = '\u0600-\u06FF';
    //Persian Supplement:
    rtlChars += '\u0750-\u077F';
    //Persian Presentation:
    rtlChars += '\uFB50-\uFDFF';
    //Persian Presentation Forms-B:
    rtlChars += '\uFE70-\uFEFF';
    //ASCII:
    var controlChars = '\u0000-\u0020';
    //General:
    controlChars += '\u2000-\u200D';


    function isRTL(value) {
        var RTL = new RegExp('^[' + ctrlChars + ']*[' + rtlChars + ']');
        return value.match(RTL)
    }

    function isControl(value) {
        var Control = new RegExp('^[' + ctrlChars + ']*$');
        return value.match(Control)
    }

    function detectDirection(input) {
        var value = input.value;
        if (isControl(value) return false;
        input.dir = isRTL(value) ? 'rtl' : 'ltr';
    }



})();
