import pdfkit

fileName = "Resume"

pdfkit.from_url('http://google.com', fileName+'.pdf')
pdfkit.from_file('templates/templateOne.html', fileName+'.pdf')