import jsPDF from "jspdf";

type BriefData = {
  clientName: string;
  clientEmail?: string;
  projectName: string;
  projectType: string;
  goals: string;
  targetAudience?: string;
  timeline?: string;
  budget?: string;
  description?: string;
  moodboardUrls?: string[];
};

export function generatePDF(data: BriefData) {
  const doc = new jsPDF();
  let y = 20;

  // Title
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Project Brief", 20, y);
  y += 15;

  // Client Info
  doc.setFontSize(16);
  doc.text("Client Information", 20, y);
  y += 8;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Client: ${data.clientName}`, 20, y);
  y += 6;
  if (data.clientEmail) {
    doc.text(`Email: ${data.clientEmail}`, 20, y);
    y += 10;
  }

  // Project Info
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Project Details", 20, y);
  y += 8;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Project Name: ${data.projectName}`, 20, y);
  y += 6;
  doc.text(`Type: ${data.projectType}`, 20, y);
  y += 10;

  // Goals
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Project Goals", 20, y);
  y += 8;

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  const splitGoals = doc.splitTextToSize(data.goals, 170);
  doc.text(splitGoals, 20, y);
  y += splitGoals.length * 6 + 10;

  // Timeline & Budget
  if (data.timeline || data.budget) {
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Timeline & Budget", 20, y);
    y += 8;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    if (data.timeline) {
      doc.text(`Timeline: ${data.timeline}`, 20, y);
      y += 6;
    }
    if (data.budget) {
      doc.text(`Budget: ${data.budget}`, 20, y);
      y += 10;
    }
  }

  // Additional Notes
  if (data.description) {
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Additional Notes", 20, y);
    y += 8;

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    const splitDesc = doc.splitTextToSize(data.description, 170);
    doc.text(splitDesc, 20, y);
  }

  // Save
  doc.save(`${data.projectName.replace(/\s+/g, "_")}_brief.pdf`);
}
