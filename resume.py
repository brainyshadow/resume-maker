from pickle import TRUE
from textwrap import fill
from fpdf import FPDF

# save FPDF() class into
# a variable pdf
pdf = FPDF()

fileName = "Resume"

# Creates the first page 
pdf.add_page()
  
# Sets the font property
pdf.set_font("Arial", size = 15)
  
pdf.cell(200, 30, txt = "Sample Title", 
         ln = 1, align = 'C', fill=TRUE)
  
pdf.cell(200, 10, txt = "Heading",
         ln = 2, align = 'C', fill=TRUE)
  
# save the pdf with name .pdf
pdf.output(fileName+".pdf")