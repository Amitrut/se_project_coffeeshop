const fpPromise = import("https://openfpcdn.io/fingerprintjs/v4").then(
  (FingerprintJS) => FingerprintJS.load()
);

fpPromise
  .then((fp) => fp.get())
  .then((result) => {
    const visitorId = result.visitorId;
  });
