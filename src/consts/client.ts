import { createThirdwebClient } from "thirdweb";

const clientId = "Your-client-ID";

if (!clientId) {
  throw new Error("No client ID provided");
}

export const client = createThirdwebClient({
  clientId: clientId,
});
