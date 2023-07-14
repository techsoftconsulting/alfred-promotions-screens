const isRequired = (validate: any) => {
  if (validate && validate.isRequired) {
    return true;
  }
  if (Array.isArray(validate)) {
    return validate.some((it) => it.isRequired);
  }
  return false;
};

export default isRequired;
