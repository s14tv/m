function goYes() {
  window.location.href = "brithday.html";
}

function goNo() {
  window.location.href = "not-you.html";
}

// Generate days
const daySelect = document.getElementById("day");
if (daySelect) {
  for (let d = 1; d <= 31; d++) {
    daySelect.innerHTML += `<option value="${d}">${d}</option>`;
  }
}

// Generate years
const yearSelect = document.getElementById("year");
if (yearSelect) {
  for (let y = 1995; y <= 2010; y++) {
    yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
  }
}

// Validate date
function checkDate() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const error = document.getElementById("error");

  if (day === "9" && month === "9" && year === "2007") {
    window.location.href = "love.html";
  } else {
    error.textContent = "التاريخ ده مش صح 🤍 ركزي كده";
  }
}