/**
 * Class representing HTTP response utilities.
 * Available responses:
 * - success - 200
 * - created - 201
 * - noContent - 204
 * - badRequest - 400
 * - unauthorized - 401
 * - forbidden - 403
 * - notFound - 404
 * - conflict - 409
 * - serverError - 500
 */
export default class HttpResponse {
  /**
   * Sends a success response with status code 200.
   * @param {Object} res - Express response object.
   * @param {Object} [data] - Data to be sent with the response.
   * @returns {Object} - JSON response with status 200 and statusMsg + data(if given).
   */
  static success(res, data) {
    return res.status(200).json({
      status: 200,
      statusMsg: "Successful petition",
      ...data
    });
  }

  /**
   * Sends a response indicating successful resource creation with status code 201.
   * @param {Object} res - Express response object.
   * @param {Object} [data] - Data to be sent with the response.
   * @returns {Object} - JSON response with status 201.
   */
  static created(res, data) {
    return res.status(201).json({
      status: 201,
      statusMsg: "Created",
      ...data,
    });
  }

  /**
   * Sends a response with status code 204 indicating (success) no content.
   * @param {Object} res - Express response object.
   * @returns {Object} - JSON response with status 204.
   */
  static noContent(res) {
    return res.status(204).json({
      status: 204,
      statusMsg: "No content",
      message: "Accion realizada con exito",
    });
  }

  /**
   * Sends a response with status code 400 indicating a bad request.
   * @param {Object} res - Express response object.
   * @param {Object} [data] - Data to be sent with the response.
   * @returns {Object} - JSON response with status 400.
   */
  static badRequest(res, data) {
    return res.status(400).json({
      status: 400,
      statusMsg: "Bad request",
      ...data,
    });
  }

  /**
   * Sends a response with status code 401 indicating unauthorized access.
   * @param {Object} res - Express response object.
   * @param {Object} [data] - Data to be sent with the response.
   * @returns {Object} - JSON response with status 401.
   */
  static unauthorized(res, data) {
    return res.status(401).json({
      status: 401,
      statusMsg: "Unauthorized",
      ...data,
    });
  }

  /**
   * Sends a response with status code 403 indicating forbidden access.
   * @param {Object} res - Express response object.
   * @returns {Object} - JSON response with status 403.
   */
  static forbidden(res) {
    return res.status(403).json({
      status: 403,
      statusMsg: "Forbidden",
      message: "Prohibido - no puedes acceder a este recurso",
    });
  }

  /**
   * Sends a response with status code 404 indicating resource not found.
   * @param {Object} res - Express response object.
   * @param {Object} [data] - Data to be sent with the response.
   * @returns {Object} - JSON response with status 404.
   */
  static notFound(res, data) {
    return res.status(404).json({
      status: 404,
      statusMsg: "Not found",
      ...data,
    });
  }

  /**
   * Sends a response with status code 409 indicating a conflict.
   * @param {Object} res - Express response object.
   * @param {Object} [data] - Data to be sent with the response.
   * @returns {Object} - JSON response with status 409.
   */
  static conflict(res, data) {
    return res.status(409).json({
      status: 409,
      statusMsg: "Conflict",
      ...data,
    });
  }

  /**
   * Sends a response with status code 500 indicating a server error.
   * @param {Object} res - Express response object.
   * @param {Object} data - Data to be sent with the response.
   * @returns {Object} - JSON response with status 500.
   */
  static serverError(res, data) {
    return res.status(500).json({
      status: 500,
      statusMsg: "Server error",
      message: "Error del servidor",
      ...data,
    });
  }
}
