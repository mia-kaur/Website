import { getItem } from "../../storage/session";
import { Wallet } from "elrondjs";
const CoinGecko = require('coingecko-api');

export interface StateType {
  wallet: Wallet | undefined;
  loading: boolean;
  error: string;
  loggedIn: boolean;
  address: string;
  loginType: string;
  denomination: number;
  forceLogout: boolean;
  PEM: string;
  JSONText: string;
  decimals: number;
}

export const initialState = () => {
  return {
    denomination: 18,
    decimals: 2,
    wallet: undefined,
    loading: false,
    error: "",
    coinGeckoClient: new CoinGecko(),
    loggedIn: !!getItem("logged_in"),
    loginType: getItem("loginType"),
    PEM: getItem("PEM"),
    JSONText: getItem("JSON"),
    forceLogout: !!getItem("forceLogout"),
    address: getItem("address"),
  };
};
