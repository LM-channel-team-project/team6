interface APIResponse {
  status: number;
  message: string;
  data?: any;
}

// JSON Response: status, message, result-data
const jsonResponse = (
  statusCode: number,
  statusMessage: string,
  data?: any,
): APIResponse => {
  return {
    status: statusCode,
    message: statusMessage,
    data: data,
  };
};

export { jsonResponse };
