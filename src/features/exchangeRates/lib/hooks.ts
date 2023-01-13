import { useQuery } from 'react-query';

import api from './api'

const exchangeRateKey = 'exchangeRateKey';

export const useExchangeRates = () => useQuery(exchangeRateKey, () => api.getExchangeRates());