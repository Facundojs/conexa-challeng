"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = this.getStatusCode(exception);
        const request = ctx.getRequest();
        const isParseableError = exception instanceof axios_1.AxiosError || exception instanceof common_1.HttpException;
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
    getStatusCode(exception) {
        if (typeof exception.getStatus === 'function')
            return exception.getStatus();
        return exception.statusCode || exception.status || 500;
    }
}
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map