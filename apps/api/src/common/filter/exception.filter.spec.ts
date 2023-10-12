import { HttpExceptionFilter } from './http-exception.filter';
import { ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { AxiosError } from 'axios';

describe('HttpExceptionFilter', () => {
  let filter: HttpExceptionFilter;
  let mockResponse: Response;
  let mockRequest: Request;
  let mockHost: ArgumentsHost;

  beforeEach(() => {
    filter = new HttpExceptionFilter();
    mockResponse = {
      status: jest.fn(() => mockResponse),
      json: jest.fn(),
    } as any;
    mockRequest = {} as any;
    mockHost = {
      switchToHttp: () => ({
        getResponse: () => mockResponse,
        getRequest: () => mockRequest,
      }),
    } as any;
  });

  it('should return a response with error details for HttpException', () => {
    const httpException = new HttpException('Test error', 400);
    filter.catch(httpException, mockHost);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      timestamp: expect.any(String),
      message: 'Test error',
      path: undefined,
      statusCode: 400,
    });
  });

  it('should return a response with error details for AxiosError', () => {
    const axiosError = new AxiosError('Test axios error');
    filter.catch(axiosError, mockHost);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      timestamp: expect.any(String),
      message: 'Test axios error',
      path: undefined,
      statusCode: 500,
    });
  });

  it('should return a default response for an unknown error', () => {
    const unknownError = new Error('Test unknown error');
    filter.catch(unknownError, mockHost);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      timestamp: expect.any(String),
      message: 'Internal Server Error',
      path: undefined,
      statusCode: 500,
    });
  });
});
