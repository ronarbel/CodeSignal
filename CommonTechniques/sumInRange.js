function sumInRange(nums, queries) {
  let result = 0;
  queries.forEach((query) => {
    for (let i = query[0]; i <= query[1]; i += 1) {
      result += nums[i];
    }
  });
  return result;
}
