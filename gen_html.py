from mako.template import Template
import markdown2
from glob import glob

sheets = glob("./sheets/*.md")

sheet_dict = {}
for sheet in sheets:
    with open(sheet, "rb") as f:
        text = f.read()
        sheet_dict[sheet.split("/")[-1].split(".")[0]] = markdown2.markdown(text, extras=["fenced-code-blocks", "highlightjs-lang"])

    tmp = Template(filename='templates/template.html')

    with open("./docs/index.html", "w") as f:
        f.write(tmp.render(datadict=sheet_dict))
