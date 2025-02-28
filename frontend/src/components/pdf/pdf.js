import React, { useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
import "./pdf.css";

export default function PdfDownload({ name }) {
  const iframeRef = useRef(null);

  // Sample faculty data
  const facultyData = {
    name: name,
    experience: "10 years",
    department: "Computer Science",
    research: "Artificial Intelligence, Machine Learning",
    publications: 20,
    contact: "johndoe@example.com",
  };

  // Function to generate the PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Title for the document
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Faculty Dashboard Report", 20, 20);

    // Add faculty data
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Name: ${facultyData.name}`, 20, 40);
    doc.text(`Experience: ${facultyData.experience}`, 20, 50);
    doc.text(`Department: ${facultyData.department}`, 20, 60);
    doc.text(`Research Interests: ${facultyData.research}`, 20, 70);
    doc.text(`Publications: ${facultyData.publications}`, 20, 80);
    doc.text(`Contact: ${facultyData.contact}`, 20, 90);

    // Convert the PDF to a Blob object to display
    const pdfBlob = doc.output("blob");

    // Create a URL for the Blob and set it as the source of the iframe
    const pdfUrl = URL.createObjectURL(pdfBlob);
    iframeRef.current.src = pdfUrl;
  };
  const downloadPdf = () => {
    const doc = new jsPDF();

    // Title for the document
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Faculty Dashboard Report", 20, 20);

    // Add faculty data
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Name: ${facultyData.name}`, 20, 40);
    doc.text(`Experience: ${facultyData.experience}`, 20, 50);
    doc.text(`Department: ${facultyData.department}`, 20, 60);
    doc.text(`Research Interests: ${facultyData.research}`, 20, 70);
    doc.text(`Publications: ${facultyData.publications}`, 20, 80);
    doc.text(`Contact: ${facultyData.contact}`, 20, 90);
    doc.save("faculty-dashboard-report.pdf");
  };
  // Generate and display the PDF when the component mounts (on page load)
  useEffect(() => {
    generatePDF();
  }, []);

  return (
    <div className="pdf">
      <h1>Faculty Dashboard</h1>
      <p>Click below to generate the PDF report for the faculty:</p>
      <button onClick={downloadPdf}>Generate PDF</button>
      {/* Embed an iframe to display the PDF */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Generated PDF"
      />
      <br />
    </div>
  );
}
