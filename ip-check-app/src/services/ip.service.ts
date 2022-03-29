import { HttpRequest } from "../core/HttpClient";
import { ResponseIp, UIIPData } from "./Ip";

export const getIp = async () => {
  const response = await HttpRequest.get(
    "https://api64.ipify.org?format=json",
    false
  );
  const data: { ip: string } = await response.json();
  return data?.ip;
};

export const getDetailIp = async (ip: string = "", useAuthorization: boolean) => {
  const cache = storageGetIpDetail(ip);
  if (cache) return adapterDetail(cache);
  const response = await HttpRequest.get(
    `https://wookie.codesubmit.io/ipcheck?ip=${ip}`,
    useAuthorization
  );
  if (response.ok) {
    const data: ResponseIp = await response.json();
    storageSaveIpDetail(ip, data);
    return adapterDetail(data);
  }
  return adapterDetail({} as ResponseIp);
};

const adapterDetail = (data: ResponseIp): UIIPData => {
  return {
    summary: [
      { title: "IP ADDRESS", description: data?.ip },
      {
        title: "location",
        description: `${data?.location?.city}, ${data?.location?.country}`,
      },
      { title: "timezone", description: `UTC-${data?.location.timezone}` },
      { title: "ISP", description: data?.isp },
    ],
    location: {
      lat: data?.location?.lat,
      lng: data?.location?.lng,
    },
  };
};

const storageSaveIpDetail = (ip: string, detail: ResponseIp) => {
  let storage = JSON.parse(localStorage.getItem("ipDetail") || "{}");
  storage = { ...storage, [ip]: detail };
  localStorage.setItem("ipDetail", JSON.stringify(storage));
};

const storageGetIpDetail = (ip: string) => {
  let storage = JSON.parse(localStorage.getItem("ipDetail") || "{}") || {};
  const detail = storage[ip];
  return detail;
};
