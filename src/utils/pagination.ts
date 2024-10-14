const isNumeric = (str: string) => /^\d+$/.test(str);

export const getPagination = <T>(
  items: T[],
  itemsPerPage = 2,
  currentPage = "1"
) => {
  if (!isNumeric(currentPage)) {
    throw new Error("Not a number");
  }

  const currentPageInt = parseInt(currentPage);
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (currentPageInt > totalPages) {
    throw new Error(`Page ${currentPageInt} does not exist`);
  }

  const offset = (currentPageInt - 1) * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);

  return {
    currentItems,
    totalPages,
  };
};


