import requestHandler from "../handler/requestHandler";
import { API_URL } from "../../utils/constans/index";

const fetchLeaveDashboard = (params) => {
  return requestHandler({
    method: "get",
    withCredentials: true,
    url: `${API_URL}/leave`,
    params,
  });
};

export { fetchLeaveDashboard };
