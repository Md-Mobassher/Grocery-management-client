export const genders = ["Male", "Female", "Other"];

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const roles = ["Buyer", "Seller", "Admin", "SuperAdmin"];
export const roleOptions = roles.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
