import { Document, Packer, Paragraph, TextRun, HeadingLevel} from "docx"
import { saveAs } from "file-saver"
import assessmentData from "../data/assessmentData"
import { create_input_field_metadata } from "./utils"



// NOTE: 
// https://dev.to/iainfreestone/how-to-create-a-word-document-with-javascript-24oi
// https://github.com/dolanmiu/docx

const exportFormData = (formInputData) => {
    //
    const inputFieldMetadata = create_input_field_metadata(assessmentData.subject_matter);

    // Create a new instance of Document for the docx module
    const text_content = []
    // create the text content
    let isDataPresent = false;
    for (var field in formInputData) {
      if(formInputData[field] !== ''){
        isDataPresent = true;
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

    if (isDataPresent) {
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

        // NOTE: Add a flash banner to inform the user of this!
        console.log("Document created successfully");
      });
    } else {
        // NOTE: Add a flash banner to inform the user of this!
        console.log("Form is empty!");
    }
    

}

export {exportFormData};