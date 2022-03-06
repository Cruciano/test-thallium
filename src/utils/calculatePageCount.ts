export const calculatePageCount = (totalCount: number, limit: number): number => {
    return Math.ceil(totalCount / limit);
}