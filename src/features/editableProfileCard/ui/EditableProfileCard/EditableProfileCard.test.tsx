// features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard.test.tsx

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Profile } from "@/entities/Profile";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { $api } from "@/shared/api/api";
import { ComponentRender } from "@/shared/lib/tests/ComponentRender/ComponentRender";
import { profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCard } from "./EditableProfileCard";

const profile: Profile = {
  id: "1",
  firstname: "Константин",
  lastname: "Атрощенко",
  age: 33,
  currency: Currency.BYN,
  country: Country.Belarus,
  city: "Kiev",
  username: "admin",
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: { authData: { id: "1" } },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe("features/EditableProfileCard", () => {
  test("Режим readonly должен переключится", async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    /* Мы хотим убедиться что у нас появилась кнопка отменить */
    expect(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ).toBeInTheDocument();
  });

  test(`При отмене значения должны обнуляться`, async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname")); // очищаем значение в input
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname")); // очищаем значение в input

    /* Записываю значение в value */
    await userEvent.type(screen.getByTestId("ProfileCard.firstname"), "user"); // вторым аргументом передаю значение value в input
    await userEvent.type(screen.getByTestId("ProfileCard.lastname"), "user"); // вторым аргументом передаю значение value в input

    /* Затем я должен убедиться что значение в input попало. Мало ли у нас кто-то сломал state и input стал не управляемым */
    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue("user"); // убеждаемся что в value находиться то значение которое мы ввели
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("user"); // убеждаемся что в value находиться то значение которое мы ввели

    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.CancelButton")
    ); // жму на кнопку отмены

    /* Проверяю что input вернулись в исходное состояние */
    expect(screen.getByTestId("ProfileCard.firstname")).toHaveValue(
      "Константин"
    );
    expect(screen.getByTestId("ProfileCard.lastname")).toHaveValue("Атрощенко");
  });

  /* Валидация */
  test("Валидация firstname", async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.clear(screen.getByTestId("ProfileCard.firstname")); // очищаем значение в input
    await userEvent.clear(screen.getByTestId("ProfileCard.lastname")); // очищаем значение в input
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );
    expect(
      screen.getByTestId("EditableProfileCard.Error.Paragraph")
    ).toBeInTheDocument(); // просто проверяем что ошибка появилась в DOM
  });

  /* Отправка PUT запроса */
  test("Отправка PUT запроса", async () => {
    const mockPutReq = jest.spyOn($api, "put");
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.EditButton")
    );
    await userEvent.type(
      screen.getByTestId("ProfileCard.firstname"),
      "Константин1"
    );
    await userEvent.click(
      screen.getByTestId("EditableProfileCardHeader.SaveButton")
    );
    expect(mockPutReq).toHaveBeenCalled();
  });
});
