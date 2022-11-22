import { Toast } from "./toast";
import { CompaniesType } from "./types";

export interface Store {
  companies: { companiesList: CompaniesType };
  toast: Toast;
}
