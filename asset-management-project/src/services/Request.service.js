import { axiosOtherInstance } from "./instance";

export const getAllRequestsApi = async () => {
  const response = await axiosOtherInstance.get("/requests");
  return response;
};

export const getRequestById = async (userId) => {
  console.log("IN API");
  const response = await axiosOtherInstance.get(
    "/requests/user_requests_status",
    { params: { user_id: userId } }
  );
  return response;
};

export const createRequestApi = async (request, userId) => {
  console.log("Api Called");
  const response = await axiosOtherInstance.post("/requests", request, {
    params: { user_id: userId },
  });
  return response;
};

export const updateRequestByIdApi = async (request, requestId) => {
  const response = await axiosOtherInstance.put(
    `/requests/${requestId}`,
    request
  );
  return response;
};

export const deleteRequestByIdApi = async (requestId) => {
  return await axiosOtherInstance.delete(`/requests/${requestId}`);
};
