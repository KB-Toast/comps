import { useContext } from "react";
import NavigationContext from "../context/navigation";

// custom (small) hook

function useNavigation() {
  return useContext(NavigationContext);
}

export default useNavigation;
