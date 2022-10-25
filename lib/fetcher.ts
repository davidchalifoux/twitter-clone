import axios from "axios";

export const fetcher = (url: string) =>
  axios({
    method: "get",
    url: url,
  }).then((res) => res.data);
