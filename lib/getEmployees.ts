export async function getEmployees() {
  const SHEET_ID = "1mxpQ-0FGAP_-wG8M4qs865UKO5PwfyQeQ-PfYjKD92s";

  const res = await fetch(
    `https://opensheet.elk.sh/${SHEET_ID}/Sheet1`
  );

  const data = await res.json();

  return data;
}