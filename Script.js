function calculateAge() {
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dob) {
    result.innerText = "⚠️ Please select your date of birth!";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `✅ You are <span style="color:#ffeb3b">${years}</span> years, 
                      <span style="color:#4caf50">${months}</span> months, and 
                      <span style="color:#03a9f4">${days}</span> days old.`;
}
