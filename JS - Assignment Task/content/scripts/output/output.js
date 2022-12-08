const output = (alertID, alertType, outputMessage) => {
  document.getElementById(alertID).innerHTML = `
  <div class="alert ${alertType} show fade ${alertID.replace("Wrapper", "")} mt-4 mb-2" role="alert">
  <strong>${outputMessage}</strong>
  <button type="button" class="close" id="${alertID.replace("Wrapper", "")}" aria-label="Close">
    &times;
  </button>
  </div>`;
};

