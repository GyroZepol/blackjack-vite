export const displayToast = (message) => {
  const TOAST_REF = document.getElementById("liveToast");
  const toastBody = TOAST_REF.querySelector(".toast-body");

  toastBody.textContent = message;

  const toast = new bootstrap.Toast(TOAST_REF);
  toast.show();
};