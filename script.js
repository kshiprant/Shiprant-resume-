const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openModal(type) {
  modal.style.display = "block";

  const content = {
    etech: `
      <h2>Etech Global Services</h2>
      <p><strong>Fraud Prevention Analyst (June 2025 – Present)</strong></p>
      <ul>
        <li>Transaction monitoring & fraud detection</li>
        <li>Account takeover and chargeback handling</li>
        <li>Risk assessment & mitigation strategies</li>
        <li>Compliance reporting and investigations</li>
      </ul>
    `,
    "systool-intern": `
      <h2>Systool Pvt. Ltd.</h2>
      <p><strong>Digital Forensic Examiner Intern</strong></p>
      <ul>
        <li>Digital evidence collection & analysis</li>
        <li>RAM & triage acquisition</li>
        <li>Incident response assistance</li>
      </ul>
    `,
    systool: `
      <h2>Systool Pvt. Ltd.</h2>
      <p><strong>Digital Forensic Examiner</strong></p>
      <ul>
        <li>OS forensic investigations</li>
        <li>Case documentation & reporting</li>
      </ul>
    `,
    auro: `
      <h2>Aurobindo Hospital</h2>
      <p><strong>Toxicology Intern</strong></p>
      <ul>
        <li>DNA modeling & toxicology analysis</li>
        <li>Exposure to autopsy & firearms examination</li>
      </ul>
    `
  };

  modalBody.innerHTML = content[type];
}

function closeModal() {
  modal.style.display = "none";
}
