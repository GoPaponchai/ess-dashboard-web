import axios from "axios";
import Cookies from "js-cookie";
// Default axios fetch options
const defaultOptions = {
  useMock: false,
  delay: 0,
  jsonMock: "",
  method: "get",
  url: "",
  params: {},
  data: {},
  timeout: 30000, //ms
  headers: {},
  withCredentials: true,
  ssr: false,
  isServerSide: false,
};

const requestHandler = (userOptions) => {
  const options = {
    ...defaultOptions,
    ...userOptions,
    // headers: { Authorization: `${Cookies.get("token")}` },
  };
  const { delay } = options;

  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve(fetcher(options));
    }, delay * 1000);
  });
};
const fetcher = async (options) => {
  let res;

  try {
    res = await axios(options);
  } catch (error) {
    console.log("error===", error);
    const isTokenExpire = ["TokenExpiredError", "JsonWebTokenError"].includes(
      error?.request?.response?.name
    );
    if (isTokenExpire) {
      window.location.replace("/");
    }
    return { error: error?.response?.data };
  }
  if (res?.data) {
    return { data: res?.data };
  } else if (res?.data?.type) {
    return { data: res?.data, res };
  } else {
    return res.data;
  }
};
export default requestHandler;
