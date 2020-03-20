/*
 * @Author: Harry Tang - harry@powerkernel.com
 * @Date: 2020-03-14 14:22:40
 * @Last Modified by: Harry Tang - harry@powerkernel.com
 * @Last Modified time: 2020-03-14 16:46:46
 */

import { response } from "../src/index";

describe("Response", () => {
  it("returns a success response", () => {
    const res = response.success({
      data: {
        message: "This is a success message"
      }
    });

    expect(res).toEqual({
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: "{\"success\":true,\"data\":{\"message\":\"This is a success message\"}}"
    });
  });

  it("returns a success response with custom headers", () => {
    const res = response.success({
      headers: { "x-power-by": "Power Kernel" },
      data: {
        message: "Custom header added"
      }
    });

    expect(res).toEqual({
      statusCode: 200,
      headers: {
        "x-power-by": "Power Kernel",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: "{\"success\":true,\"data\":{\"message\":\"Custom header added\"}}"
    });
  });

  it("returns a failure response", () => {
    const res = response.failure({
      code: 404,
      error: {
        message: "This is a failure message"
      }
    });
    expect(res).toEqual({
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: "{\"success\":false,\"error\":{\"message\":\"This is a failure message\"}}"
    });
  });

  it("returns a failure response with custom header", () => {
    const res = response.failure({
      headers: { "x-power-by": "Power Kernel" },
      error: {
        message: "This is a failure message"
      }
    });
    expect(res).toEqual({
      statusCode: 500,
      headers: {
        "x-power-by": "Power Kernel",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: "{\"success\":false,\"error\":{\"message\":\"This is a failure message\"}}"
    });
  });
});
