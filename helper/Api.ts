import axios from "axios";
import { ErrorItem, ItemType } from "./types";

export default {
  fetchItem: async (url: string): Promise<ItemType[]> => {
    try {
      return new Promise((resolve,reject) => {
        return axios
          .get(url, {
            timeout: 5000
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    } catch (error) {
      return await (error as ErrorItem).json();
    }
  },
};
