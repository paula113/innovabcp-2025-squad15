export const formFields = [
  {
    name: "userProfile",
    label: "¿Cuál es tu perfil de ingreso?",
    type: "radioButton",
    options: [{
      label: 'Independiente',
      value: 'independent',
      icon: 'type'
    },
    {
      label: 'Dependiente',
      value: 'Dependent',
      icon: 'type'
    }],
    validation: { required: "Selecciona uno es obligatorio" }
  },
  {
    name: "incomeStream",
    label: "¿Cuál es tu fuente principal de ingresos?",
    type: "select",
    options: [{
      label: 'Negocio propio',
      value: 'ownBusiness',
    },
    {
      label: 'Marca Personal',
      value: 'personalBrand',
    }],
    validation: { required: "Selecciona es obligatorio" }
  },
  {
    name: "businessAge",
    label: "¿Cuántos años tiene tu negocio?",
    type: "number",
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "businessEvolution",
    label: "¿Tu negocio ha tenido un crecimiento constante en los últimos años o ha enfrentado desafíos significativos?",
    type: "text",
    textLimit: '200',
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "incomeAverage",
    label: "¿Cuál es el promedio de ingresos mensuales de tu negocio?",
    type: "range",
    min: 3000,
    max: 50000,
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "businessPercentage",
    label: "¿Qué porcentaje de sus ingresos proviene de su negocio?",
    type: "text",
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "extraIncomePercentage",
    label: "¿Qué porcentaje proviene de otras fuentes?",
    type: "text",
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "website",
    label: "¿Tienes un página web?",
    type: "url",
    validation: { pattern: { value: /https?:\/\/.+/, message: "URL inválida" } }
  },
];