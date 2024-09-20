export const getCategories = (data) => {
  const result = [];

  data.forEach((category) => {
    result.push(category.label); // Add the main category
    if (category.children && category.children.length > 0) {
      // Recursively process children and add them to result
      const subCategories = getCategories(category.children);
      result.push(...subCategories);
    }
  });
  result = result.sort((a, b) => a.localeCompare(b));
  return result;
};
