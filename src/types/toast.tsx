export interface Toast {
  message: string;
  status: "success" | "error" | undefined;
  isOpen: boolean;
}
