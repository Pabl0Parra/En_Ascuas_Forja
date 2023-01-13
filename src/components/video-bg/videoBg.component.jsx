import { VideoBgContainer } from "./videoBg.styles";

const VideoBg = () => (
  <VideoBgContainer>
    <video
      src={
        "https://res.cloudinary.com/dcwx2biey/video/upload/v1673614795/Untitled_Project_2_cwr8qg.mp4"
      }
      autoPlay
      loop
      muted
      style={{
        objectFit: "cover",
      }}
    />
  </VideoBgContainer>
);

export default VideoBg;
