export declare class IdParamDTO {
    id: string;
}
export declare class QueryDTO {
    page: number;
    search?: string;
    static wrap(url: string, dto: QueryDTO): string;
}
//# sourceMappingURL=dto.d.ts.map