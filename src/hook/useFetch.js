import { baseUrl } from "@/helper/baseUrl";

const useFetch = async () => {
  const res = await fetch(`${baseUrl}/patients`, { cache: "no-store" });
  const data = await res.json();
  return data;
};

export default useFetch;
