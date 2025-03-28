import axios, { AxiosInstance } from 'axios';
import { FINANCIAL_ANALYSIS_BASE_URL } from '../../config/configuration';
import { CalculateCreditScoreResponse, CreateUserPayload, User } from './types';

class FinancialAnalysis {
  private instance: AxiosInstance;
  constructor(baseUrl) {
    console.log(FINANCIAL_ANALYSIS_BASE_URL);
    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  async createUser(params: CreateUserPayload): Promise<User | null> {
    try {
      const response = (await this.instance.post<User>('/users', params)).data;

      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async calculateScore(
    userId: number,
    imageBase64: string
  ): Promise<CalculateCreditScoreResponse | null> {
    try {
      const response = (
        await this.instance.post<CalculateCreditScoreResponse>(`${userId}/score`, {
          imageBase64,
        })
      ).data;

      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

const financialAnalysisClient = new FinancialAnalysis(FINANCIAL_ANALYSIS_BASE_URL);

export default financialAnalysisClient;
