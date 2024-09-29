import { ThreeDots } from "react-loader-spinner";
import StyledLoadingSpinner from "./LoadingSpinner.style";

function LoadingSpinner() {
  return (
    <StyledLoadingSpinner>
      <ThreeDots
        className="coursehub__loading-spinner"
        color="#646cff"
        height={50}
        width={50}
      />
    </StyledLoadingSpinner>
  );
}

export default LoadingSpinner;
