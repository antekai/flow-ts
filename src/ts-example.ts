interface Address {
  street: string;
  city: string;
}

export const addressA: Address = {
  street: "Rosenthaler str. 36",
  city: "Berlin",
};

// ts error
export const addressB: Address = { street: 1111, city: "Berlin" };
