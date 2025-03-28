export const apiData = {
  status: true,
  data: {
    bankTransactions: {
      score: 200,
      qualify: true,
      recommendations: [""],
    },
    billPayment: {
      score: 0,
      qualify: false,
      recommendations: [""],
    },
    residenceAge: {
      score: 0,
      qualify: false,
      recommendations: [""],
    },
    socialMedia: {
      score: 0,
      qualify: false,
      recommendations: [""],
    },
    stabilityEmployment: {
      score: 0,
      qualify: false,
      recommendations: [""],
    },
  },
};

// Mapeo de nombres clave a etiquetas y colores
export const criteria = {
  bankTransactions: { label: "Transacciones Bancarias", color: "#E91E63" },
  billPayment: { label: "Pagos de Facturas", color: "#FF9800" },
  residenceAge: { label: "Antigüedad en Residencia", color: "#03A9F4" },
  socialMedia: { label: "Redes Sociales", color: "#4CAF50" },
  stabilityEmployment: { label: "Estabilidad Laboral", color: "#9C27B0" },
};

export const transformApiData = (apiData) => {
  return Object.entries(apiData.data).map(([key, value]) => ({
    id: key,
    value: value.score,
    label: criteria[key]?.label || key,
    color: value.qualify ? criteria[key].color : "red",
  }));
};

export const fetchAndTransformData = async () => {
  try {
    // const response = await fetch('/api/data');
    // const apiData = await response.json();
    const transformedData = transformApiData(apiData);
    console.log("Datos transformados:", transformedData);
    return transformedData;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error;
  }
};
