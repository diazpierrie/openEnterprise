import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdlZDllOGZkM2IwY2Y0M2JmY2YyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODMxODk3OSwiZXhwIjoxNjY4NTc4MTc5fQ.hKJodNwpJTtDcAdT2K0ZozVBAnIuqY47Hv7eFGgYSdc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
