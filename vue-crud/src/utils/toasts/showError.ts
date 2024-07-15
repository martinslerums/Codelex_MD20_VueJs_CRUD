import { errorToast } from "./toasts"
import type { Ref } from "vue"

export const showError = (networkError: unknown, errorMessage: Ref<string | null>) => {
  if (networkError instanceof Error) {
    errorMessage.value = `Network error: ${networkError.message}`
  } else {
    errorMessage.value = `Network error: ${String(networkError)}`
  }
  setTimeout(() => errorToast(errorMessage.value ?? 'Unknown Error'))
}
