import axios from "axios";
import { FETCH_COMMENTS } from "actions/types";

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}
