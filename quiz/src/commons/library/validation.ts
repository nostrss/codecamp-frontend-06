export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert('no file');
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert('too big file limit 5mb');
    return false;
  }

  if (!file.type.includes('jpeg') && !file.type.includes('png')) {
    alert('jpeg png can upload');
    return false;
  }
  return true;
};
