import { ImageContainer } from './style';

export default function Avatar({ name, picture }) {
  return (
    <ImageContainer>
      <img src={picture} width={48} height={48} alt={name} />
      <div>{name}</div>
    </ImageContainer>
  );
}
