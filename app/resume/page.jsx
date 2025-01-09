import PDFViewer from "@/components/pdf-viewer";

function Resume() {
    return (
        <PDFViewer pdfUrl={`/Andy-Pak-Resume.pdf`} title={`Andy Pak's Resume`} />
    );
}

export default Resume