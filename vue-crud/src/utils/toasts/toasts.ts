import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';

export const successToast = (successMessage: string) => {
  toast(successMessage, {
    theme: "light",
    type: "success",
    autoClose: 3000,
    transition: "flip"
  }); 
}

export const errorToast = (errorMessage: string) => {
  toast( errorMessage, {
    theme: "light",
    type: "error",
    autoClose: 3000,
    transition: "flip"
  }); 
}

export const wrningToast = (warningMessage: string) => {
  toast( warningMessage, {
    theme: "light",
    type: "warning",
    autoClose: 3000,
    transition: "flip"
  }); 
}