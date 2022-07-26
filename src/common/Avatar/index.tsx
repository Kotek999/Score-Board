import temporaryAvatarImage from "../../assets/avatarImage.png";

const Avatar = (): JSX.Element => (
    <figure className="image">
      <img className="is-rounded" src={temporaryAvatarImage} alt="avatar"/>
    </figure>
  );

export default Avatar;
