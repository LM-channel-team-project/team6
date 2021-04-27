interface APIResponse {
  status: number;
  message: string;
  data?: any;
}

const jsonResponse = (statusCode: number, statusMessage: string, data?: any): APIResponse => {
  return {
    status: statusCode,
    message: statusMessage,
    data: data,
  };
};

export { jsonResponse };
