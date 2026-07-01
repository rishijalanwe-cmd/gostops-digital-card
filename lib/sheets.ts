const SHEET_URL =
  "https://opensheet.elk.sh/1mxpQ-0FGAP_-wG8M4qs865UKO5PwfyQeQ-PfYjKD92s/Sheet1";

export async function getEmployee(slug: string) {
  const res = await fetch(SHEET_URL, {
    cache: "no-store",
  });

  const employees = await res.json();

  return employees.find(
    (employee: any) =>
      employee.slug.trim().toLowerCase() === slug.trim().toLowerCase()
  );
}