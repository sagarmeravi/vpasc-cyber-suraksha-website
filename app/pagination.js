// pagination.js
export const getPaginationData = (currentPage, totalPages, pageSize) => {
  const pageNumber = currentPage;
  const totalPagesCount = totalPages;
  const pageSizeCount = pageSize;
  const start = (pageNumber - 1) * pageSizeCount;
  const end = start + pageSizeCount;
  return {
    currentPage: pageNumber,
    totalPages: totalPagesCount,
    pageSize: pageSizeCount,
    start,
    end,
  };
};
export const getPaginatedData = (data, paginationData) => {
  const { start, end } = paginationData;
  return data.slice(start, end);
};
