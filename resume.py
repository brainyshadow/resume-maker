import pdfkit

fileName = "Resume"

pdfkit.from_url('http://google.com', fileName+'.pdf')
