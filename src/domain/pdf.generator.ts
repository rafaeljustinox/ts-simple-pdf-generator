import fs from 'fs';
import pdf_creator_node from 'pdf-creator-node';
const pdfCreator = pdf_creator_node;
// PDF options - See documentation:
// https://www.npmjs.com/package/pdf-creator-node
const options = {
  format: 'A4',
  orientation: 'portrait',
}
// Some data to fill PDF
const users = [
  {
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
];

class PdfGenerator {

  /**
   * Generates a simple PDF from local text
   * @returns PDF Buffer
   */
  async generate(): Promise<any> {
    const html = '<h1>Hello World from PDF';
    const document = {
      html: html,
      data: {},
      path: "./output.pdf",
      type: "buffer",
    };
    const pdf = await pdfCreator.create(document, options);
    return pdf;
  }

  /**
   * Generates a PDF from HTML template
   * @returns PDF Buffer
   */
  async fromTemplate(): Promise<any> {

    try {
      const html = fs.readFileSync('template.html', 'utf8');
      // Data to fill the PDF content
      const document = {
        html: html,
        data: {
          users: users,
        },
        path: "./output.pdf",
        type: "buffer",
      };
      const pdf = await pdfCreator.create(document, options);
      return pdf;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

}

const pdfGenerator = new PdfGenerator();
export { pdfGenerator }