import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const Meeting = () => {

  useEffect(() => {
    const test = async () => {
      const cal = await getCalApi();
      cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false});
    }

    test()
  }, [])

  return (
  <div>
    <Cal calLink="mustaphachqoubi/let-s-talk" style={{width:"100%",height:"100%",overflow:"scroll"}} />
  </div>
  ) 
};
