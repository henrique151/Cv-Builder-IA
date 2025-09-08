export function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePhone(phone: string) {
  // aceita formatos como (11) 91234-5678 ou 11912345678
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regex.test(phone);
}

export function validateLinkedIn(link: string) {
  try {
    const url = new URL(link.startsWith("http") ? link : `https://${link}`);
    return url.hostname.includes("linkedin.com");
  } catch {
    return false;
  }
}

export const validateCompany = (company: string) => company.trim().length > 0;

export const validateRole = (role: string) => role.trim().length > 0;

export const validateDates = (start: string, end: string, current: boolean) => {
  if (!start) return false;
  if (current) return true;
  return !!end && end >= start;
};