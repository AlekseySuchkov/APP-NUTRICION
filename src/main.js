import { createApp } from "vue";
import App from "./App";
import Router from "vue-router";

import PrimeVue from "primevue/config";

import ToastService from "primevue/toastservice";
import Steps from "primevue/steps";
import Button from "primevue/button";
import RadioButton from "primevue/radiobutton";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
const app = createApp(App);

app.use(ToastService);
app.use(Router);
app.use(PrimeVue);

app.component("steps-menu", Steps);
app.component("input-text", InputText);
app.component("button-test", Button);
app.component("radio-button", RadioButton);
app.component("calendar-component", Calendar);
app.component("input-number", InputNumber);
app.component("drop-down", Dropdown);

app.mount("#app");
