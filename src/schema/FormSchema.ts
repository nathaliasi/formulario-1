import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string().required("campo obrigatório"),
  email: Yup.string().required("campo obrigatório").email("Email inválido"),
  subject: Yup.string().required("campo obrigatório"),
  message:  Yup.string().required("campo obrigatório"),
});