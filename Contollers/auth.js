import { getCurrentUser } from "./global.js";


getCurrentUser().then((user) => {
  if (!user) {
    window.location.href = "/pantallain.html";
  }
});
