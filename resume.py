import pdfkit

fileName = "Resume"

pdfkit.from_file('templates/templateOne.html', fileName+'.pdf')