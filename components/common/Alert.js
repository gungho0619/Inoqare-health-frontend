import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export default function Alert(title, text, icon) {
  MySwal.fire({
    title,
    text,
    icon,
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
}
