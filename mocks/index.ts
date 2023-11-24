//

export const setupMocks = async (): Promise<void> => {
  console.log("setupMocks");
  if (typeof window === "undefined") {
    const { mswServer } = await import("./mswServer");
    mswServer.listen();
  } else {
    const { mswWorker } = await import("./mswWorker");
    mswWorker.start();
  }
};
