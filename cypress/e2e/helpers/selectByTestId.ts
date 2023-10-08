// cypress/helpers/selectByTestId.ts

export function selectByTestId(testId: string) {
  return `[data-testid="${testId}"]`;
}
