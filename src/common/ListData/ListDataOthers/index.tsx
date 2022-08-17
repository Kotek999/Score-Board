import {
  Box,
  FirstBoxContainer,
  IconWithPlace,
  Value,
  Avatar,
  SecondBoxContainer,
  NameWithPoints,
  Points,
} from "../../../components/ScoreBoard/Styles/tableStyles";
import temporaryAvatarImage from "../../../assets/avatarImage.png";
import { Others } from "../../helpers/types";

function ListDataOthers(props: Others) {
  const listData = props.players
    ? Object.keys(props.players).map((key) => {
        const p = props.players[key].player;

        return {
          // title: "untitled",
          // name: p.name && p.name,
          // status: "nothing",
          // points: p.points && p.points,
          // value: "0",
          icon: p.icon && p.icon,
          place: p.place && p.place,
          avatar: p.avatar && p.avatar,
          name: p.name && p.name,
          level: p.level && p.level,
          points: p.points && p.points,
        };
      })
    : [];
  return (
    <>
      {listData
        .sort((p, m) => (p.points < m.points ? 1 : -1))
        .filter((best, index) => index > 2)
        .map((row) => (
          <Box
            className="box"
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-duration="800"
            key={row.name}
          >
            <FirstBoxContainer>
              <IconWithPlace>
                {row.icon}
                <Value className="title is-6" style={{ minWidth: 40 }}>
                  {row.place}
                </Value>
              </IconWithPlace>
            </FirstBoxContainer>
            <Avatar>
              <figure className="image">
                <img
                  className="is-rounded"
                  src={temporaryAvatarImage}
                  alt="avatar"
                />
              </figure>
            </Avatar>
            <SecondBoxContainer>
              <NameWithPoints>
                {row.name}
                <Points>
                  <Value className="title is-6">{row.points}</Value>
                </Points>
              </NameWithPoints>
            </SecondBoxContainer>
          </Box>
        ))}
    </>
  );
}

export default ListDataOthers;
