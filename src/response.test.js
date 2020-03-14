/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-03-14 14:22:40
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-03-14 16:46:46
 */

const { response } = require('./index');

describe('Response', () => {
  it('returns a success response', () => {
    const res = response.success({
      data: 'This is a success message',
    });

    expect(res).toEqual({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: '{"success":true,"data":"This is a success message"}',
    });
  });

  it('returns a success response with custom headers', () => {
    const res = response.success({
      headers: { 'x-power-by': 'Power Kernel' },
      data: 'Custom header added',
    });

    expect(res).toEqual({
      statusCode: 200,
      headers: {
        'x-power-by': 'Power Kernel',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: '{"success":true,"data":"Custom header added"}',
    });
  });

  it('returns a failure response', () => {
    const res = response.failure({
      code: 404,
      error: 'This is a failure message',
    });
    expect(res).toEqual({
      statusCode: 404,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: '{"success":false,"error":"This is a failure message"}',
    });
  });
});
