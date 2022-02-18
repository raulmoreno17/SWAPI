import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Banner from "../Atoms/Banner";
import SearchBox from "../Atoms/SearchBox";
import StarWarsCharacters from "../Templates/StarWarsCharacters";

describe("Home Section", () => {
  test("Renders banner", () => {
    render(<Banner />);
    const banner = screen.getByAltText("sw-logo");
    expect(banner).toBeInTheDocument();
  });

  test("Renders characters list header", () => {
    render(<StarWarsCharacters />);
    const headerText = screen.getByText("Characters List");
    expect(headerText).toBeInTheDocument();
  });

  test("Render characters from API request (mock request)", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => {
        return {
          count: 82,
          next: "https://swapi.dev/api/people/?page=2",
          previous: null,
          results: [
            {
              name: "Luke Skywalker",
              height: "172",
              mass: "77",
              hair_color: "blond",
              skin_color: "fair",
              eye_color: "blue",
              birth_year: "19BBY",
              gender: "male",
              homeworld: "https://swapi.dev/api/planets/1/",
              films: [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/",
              ],
              species: [],
              vehicles: [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/",
              ],
              starships: [
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/",
              ],
              created: "2014-12-09T13:50:51.644000Z",
              edited: "2014-12-20T21:17:56.891000Z",
              url: "https://swapi.dev/api/people/1/",
            },
          ],
        };
      },
    });
    render(<StarWarsCharacters />);
    const characterElements = await screen.findAllByRole(
      "checkbox",
      {},
      { timeout: 10000 }
    );
    expect(characterElements).not.toHaveLength(0);
  });

  test("Receives user input into SearchBox", () => {
    render(<SearchBox />);
    userEvent.type(screen.getByLabelText("Search a character"), "Anakin");
    expect(screen.getByLabelText("Search a character")).toHaveValue("Anakin");
  });
});
