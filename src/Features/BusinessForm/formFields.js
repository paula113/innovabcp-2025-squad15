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
      value: 'dependent',
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
    max: 10000,
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
    name: "webProfiles",
    label: "Conecta tus redes",
    type: "webProfiles",
    // expected result: [ {name: 'Instagram', token: 'sssss'  } ]
  },
];

export const formFieldsSecondStep = [
  {
    name: "businessAdmin",
    label: "¿Cómo manejas la administración de los costos y gastos de tu negocio?",
    type: "text",
    textLimit: '200',
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "files",
    label: "sube tus arechivos",
    type: "dropZone",
    // expected result: [ {file: archivo.png, category: 'boleta'  } ]
  },
]

export const formFieldsLastStep = [
  {
    name: "homeType",
    label: "Tipo de vivienda",
    type: "select",
    options: [{
      label: 'Casa',
      value: 'home',
    },
    {
      label: 'Departamento',
      value: 'appartment',
    }],
    validation: { required: "Selecciona es obligatorio" }
  },
  {
    name: "totalAmount",
    label: "¿Costo del departamento?",
    type: "range",
    min: 60000,
    max: 150000,
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "initialAmount",
    label: "¿Cuentas con una inicial?",
    type: "number",
    validation: { required: "Campo obligatorio" }
  },
  {
    name: "quote",
    label: "¿En cuántas cuotas quieres pagar?",
    type: "select",
    options: [{
      label: '60',
      value: '60',
    },
    {
      label: '80',
      value: '80',
    }],
    validation: { required: "Selecciona es obligatorio" }
  },
]