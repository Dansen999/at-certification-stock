export interface Company {
  description: string;
  displaySymbol: string;
  symbol: string;
  type: string;
}

export interface SearchResponse {
  count: number;
  result: Array<Company>;
}

export interface QuoteResponse {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
}
