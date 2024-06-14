let items = Array.from({ length: 40 }).map((_, idx) => idx + 1);

// type Pagination = (items: number[], numberPerPage?: number, currentPage?: number) => { totalPages: number, currentPages: number[] }
 
console.log(paginate(items)); // { totalPages: 8, currentPages: (5) [1, 2, 3, 4, 5] }

console.log(paginate(items, 10, 2)); // { totalPages: 4, currentPages: (10) [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] }
































const paginate = (list, numberPerPage = 5, currentPage = 1) => {
  const totalPages = Math.ceil(list.length / numberPerPage);

  const trimStart = (currentPage - 1) * numberPerPage;
  const trimEnd = trimStart + numberPerPage;

  return {
    totalPages,
    currentPages: list.slice(trimStart, trimEnd),
  };
};