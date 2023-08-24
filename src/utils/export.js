import { Document, Packer, Paragraph, TextRun, HeadingLevel} from "docx"
import { saveAs } from "file-saver"

const inputFieldMetadata = {
  'mixed_used_zone_code_PO16_textarea': {'PO': 'PO16', 'section': 'Mixed used zone code'},
  'low_impact_industry_zone_code_PO4_textarea': {'PO': 'PO4', 'section': 'Low impact industry zone code'},
}

const exportFormData = (formInputData) => {
    // Create a new instance of Document for the docx module
    const text_content = []
    // create the text content
    for (var field in formInputData) {
      if(formInputData[field] !== ''){
        var request_preamble_template = `Per ${inputFieldMetadata[field]['PO']} of ${inputFieldMetadata[field]['section']} the applicant is requested to submit the following:`;
        text_content.push(
          new Paragraph({
            text: request_preamble_template,
            heading: HeadingLevel.HEADING_2,
          })
        );

        text_content.push(
          new Paragraph({
            text: formInputData[field],
            heading: HeadingLevel.HEADING_2,
            style: "wellSpaced",
          })
        );
      } 
    }
   console.log(text_content) 

    // create doc object
    const doc = new Document({
      styles: {
        paragraphStyles: [
          {
            id: "wellSpaced",
            name: "Well Spaced",
            basedOn: "Normal",
            quickFormat: true,
            paragraph: {
              spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
            },
          },
          {
            id: "ListParagraph",
            name: "List Paragraph",
            basedOn: "Normal",
            quickFormat: true,
          },
        ]
      },
      sections: [
        {
          properties: {},
          children: text_content,
        }
      ]
    });
    
    // export doc object to word document
    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });

}

export {exportFormData};