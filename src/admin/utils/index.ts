export const formatAdminDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
