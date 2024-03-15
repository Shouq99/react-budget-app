// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function printDiv() {
    try {
        var oIframe = document.getElementById('ifrmPrint');
        var oContent = document.getElementById('divToPrint').innerHTML;
        var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
        if (oDoc.document) oDoc = oDoc.document;
        oDoc.write('<head><title>title</title>');
        oDoc.write('</head><body onload="this.focus(); this.print();">');
        oDoc.write(oContent + '</body>');
        oDoc.close();
    } catch (e) {
        self.print();
    }
}
