/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-03-14 14:08:50
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-03-14 16:36:24
 */

interface HeaderData {
  [key: string]: string | true | false;
}

interface ResData {
  // eslint-disable-next-line
  [key: string]: any;
}

interface SuccessInput {
  headers?: HeaderData;
  code?: number;

  data: ResData;
}

interface FailureInput {
  headers?: HeaderData;
  code?: number;
  error: ResData;
}

interface Response {
  statusCode: number;
  headers: HeaderData;
  body: string;
}

const buildHeaders = (headers: HeaderData): HeaderData => {
  return {
    ...headers,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  };
};

const success = ({
  headers = {},
  code = 200,
  data
}: SuccessInput): Response => {
  return {
    statusCode: code,
    headers: buildHeaders(headers),
    body: JSON.stringify({
      success: true,
      data
    })
  };
};

const failure = ({
  headers = {},
  code = 500,
  error
}: FailureInput): Response => {
  return {
    statusCode: code,
    headers: buildHeaders(headers),
    body: JSON.stringify({
      success: false,
      error
    })
  };
};

const response = {
  success,
  failure
};
export default response;
