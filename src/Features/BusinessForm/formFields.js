export const formFields = [
  { name: "businessName", label: "Nombre del negocio", type: "text", validation: { required: "El nombre es obligatorio" } },
  { name: "businessAge", label: "Antigüedad del negocio (años)", type: "number", validation: { required: "Campo obligatorio" } },
  { name: "employmentStatus", label: "Situación laboral", type: "text", validation: { required: "Campo obligatorio" } },
  // { name: "annualGoals", label: "Metas anuales del año previo", type: "text", validation: { required: "Campo obligatorio" } },
  { name: "website", label: "Link a página web", type: "url", validation: { pattern: { value: /https?:\/\/.+/, message: "URL inválida" } } },
];