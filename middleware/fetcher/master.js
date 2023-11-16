import requestHandler from "../handler/requestHandler";
import { API_URL } from "../../utils/constans/index";

const fetchEmplist = () => {
  return requestHandler({
    method: "get",
    withCredentials: true,
    url: `${API_URL}/employee`,
  });
};

export { fetchEmplist };
