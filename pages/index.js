import Library from "./home";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const mobileView = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  return (
    <>
      <Library mobileView={mobileView} />
    </>
  );
}
