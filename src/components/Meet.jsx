import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const Meet = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <Cal
      calLink="mustaphachqoubi/let-s-talk"
      className="w-full h-screen rounded-lg overflow-scroll pt-36 "
    />
  );
};
