function average(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export const selectDevelopers = (state) => {
  return state.developers;
};

export const developersWithThisFavorite = (favoriteId) => (state) => {
  return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
};

// export const developersWithThisFavorite = useSelector((state) => {
//   return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
// });

export const selectDeveloperStatistics = (state) => {
  return {
    num: state.developers.length,
    numWithoutFavorites: state.developers.filter(
      (dev) => dev.favorites.length === 0
    ).length,
    avgNumberOfFavorites: average(
      state.developers.map((dev) => dev.favorites.length)
    ),
  };
};
