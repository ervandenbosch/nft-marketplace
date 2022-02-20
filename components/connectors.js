import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 80001],
});

export async function connect() {
  try {
    await activate(injected);
  } catch (ex) {
    console.log(ex);
  }
}

export async function disconnect() {
  try {
    deactivate();
  } catch (ex) {
    console.log(ex);
  }
}
