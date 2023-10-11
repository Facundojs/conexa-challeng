import { ExceptionFilter, HttpException, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { AxiosError } from 'axios';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const statusCode = this.getStatusCode(exception);
    const request = ctx.getRequest<Request>();

    const isParseableError =
      exception instanceof AxiosError || exception instanceof HttpException;

    if (isParseableError) {
      return response.status(statusCode).json({
        timestamp: new Date().toISOString(),
        message: exception.message,
        path: request.url,
        statusCode,
      });
    }

    return response.status(500).json({
      timestamp: new Date().toISOString(),
      message: 'Internal Server Error',
      path: request.url,
      statusCode: 500,
    });
  }

  private getStatusCode(exception) {
    if (typeof exception.getStatus === 'function') return exception.getStatus();

    return exception.statusCode || exception.status || 500;
  }
}
