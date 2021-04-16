function generatePdf()
{
    const element = document.getElementById("table-box");
    html2pdf()
    .from(element)
    .save();
}
