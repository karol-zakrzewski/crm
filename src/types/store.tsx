import { Toast } from "./toast";
import { Todo } from "./todo";
import { CompaniesType } from "./types";

export interface Store {
  companies: { companiesList: CompaniesType[] };
  toast: Toast;
  todos: { todosList: Todo[] };
}
