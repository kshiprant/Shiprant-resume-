const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function openModal(type) {
  modal.style.display = "flex";

  const content = {
    etech: `
      <h3>Etech Global Services</h3>
      <ul>
        <li>Fraud prevention and transaction monitoring</li>
        <li>Account takeover investigations</li>
        <li>Risk assessment and reporting</li>
      </ul>
    `,
    systool: `
      <h3>Systool Pvt. Ltd.</h3>
      <ul>
        <li>Digital evidence collection and analysis</li>
        <li>RAM and triage acquisition</li>
        <li>Incident response support</li>
      </ul>
    `,
    auro: `
      <h3>Aurobindo Hospital</h3>
      <ul>
        <li>Toxicology and DNA modeling exposure</li>
        <li>Autopsy and firearms observations</li>
      </ul>
    `
  };

  modalBody.innerHTML = content[type] || "<p>No details available.</p>";
}

function closeModal() {
  modal.style.display = "none";
}
