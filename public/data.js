export const apiData = {
  status: true,
  data: {
    bankTransactions: {
      score: 170,
      qualify: true,
    },
    billPayment: {
      score: 100,
      qualify: false,
    },
    residenceAge: {
      score: 80,
      qualify: false,
    },
    socialMedia: {
      score: 200,
      qualify: true,
    },
    stabilityEmployment: {
      score: 30,
      qualify: false,
    },
  },
};

// Mapeo de nombres clave a etiquetas y colores
export const criteria = {
  bankTransactions: { color: '#E91E63' },
  billPayment: { color: '#FF9800' },
  residenceAge: { color: '#03A9F4' },
  socialMedia: { color: '#4CAF50' },
  stabilityEmployment: { color: '#9C27B0' },
};

export const transformApiData = (apiData) => {
  return Object.entries(apiData.data).map(([key, value]) => ({
    id: key,
    value: value.score,
    label: criteria[key]?.label || key,
    color: value.qualify ? criteria[key].color : 'red',
  }));
};

export const fetchAndTransformData = async () => {
  try {
    // const response = await fetch('/api/data');
    // const apiData = await response.json();
    const transformedData = transformApiData(apiData);
    console.log('Datos transformados:', transformedData);
    return transformedData;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};
