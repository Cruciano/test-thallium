export const calculatePagesCount = (totalCount: number, limit: number): number => {
    return Math.ceil(totalCount / limit);
}