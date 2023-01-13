import { useQuery } from 'react-query';

import api from './api'
import { ExchangeRate } from './types'

const exchangeRateKey = 'exchangeRateKey';

export const useExchangeRates = () => useQuery<ExchangeRate[]>(exchangeRateKey, () => api.getExchangeRates());