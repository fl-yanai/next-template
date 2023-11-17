export * from './hooks/useQuery';

export interface typeChangeQueryParms {
  queryTargets: string | string[];
  newValues: string | string[];
  link: string;
}
