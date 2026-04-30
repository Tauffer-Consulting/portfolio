import { ImageContainer } from './style';
import { withBase } from '../../../lib/withBase';

export default function Avatar({ name, picture }) {
  return (
    <ImageContainer>
      <img src={withBase(picture)} width={48} height={48} alt={name} />
      <div>{name}</div>
    </ImageContainer>
  );
}
