interface APIJson {
  status: number;
  message: string;
  data?: any;
}

const jsonResponse = (
  statusCode: number,
  statusMessage: string,
  data?: any
): APIJson => {
  return {
    status: statusCode,
    message: statusMessage,
    data: data,
  };
};

export { jsonResponse };
