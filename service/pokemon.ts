import Constant from "constant/index";

export const getPokemonLists = async (offset: number, limit: number = 10) => {
  let response = await fetch(
    Constant.API_POKEMON + `/pokemon?limit=${limit}&offset=${offset}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return response;
};

export const getPokemonByName = async (name: string) => {
  let response = await fetch(Constant.API_POKEMON + `/pokemon/${name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      return false;
    } else {
      return res.json();
    }
  });

  return response;
};
