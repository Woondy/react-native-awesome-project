export const getAsyncThunkErrorMessage = (error: any) => {
  if (error.response?.data?.error) {
    return `An error occurred: ${error.response.data.error}`;
  } else if (error.message) {
    return `An unexpected error occurred: ${error.message}`;
  } else {
    return 'An unexpected error occurred.';
  }
};
