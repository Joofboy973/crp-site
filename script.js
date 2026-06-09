// CRP - year + form -> mailto
document.getElementById("y").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const city = (data.get("city") || "").toString().trim();
    const need = (data.get("need") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = encodeURIComponent("Demande de devis CRP – " + (city || "14/27/76"));
    const body = encodeURIComponent(
      "Bonjour CRP,\n\n" +
      "Nom / Société : " + name + "\n" +
      "Téléphone : " + phone + "\n" +
      "Ville / CP : " + city + "\n" +
      "Besoin : " + need + "\n\n" +
      "Détails :\n" + (message || "(non précisé)") + "\n\n" +
      "Merci."
    );

    window.location.href = "mailto:bs.fibre@outlook.fr?subject=" + subject + "&body=" + body;
  });
}
