/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-03-14 14:08:50
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-03-14 16:36:24
 */

const response = {};

const buildResponse = ({
  headers,
  code,
  success,
  data = {},
  error = {},
}) => ({
  statusCode: code,
  headers: {
    ...headers,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
  body: success
    ? JSON.stringify({
      success,
      data,
    })
    : JSON.stringify({
      success,
      error,
    }),
});

response.success = ({ headers = {}, code = 200, data = {} }) => buildResponse({
  headers, code, success: true, data,
});

response.failure = ({ headers = {}, code = 500, error = {} }) => buildResponse({
  headers, code, success: false, error,
});

module.exports = response;
