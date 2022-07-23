import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//vee-validate
import "./utils/veevalidate";
import { setLocale } from "@vee-validate/i18n";
import { Form, Field, ErrorMessage } from "vee-validate";
setLocale("en");

const app = createApp(App);
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
