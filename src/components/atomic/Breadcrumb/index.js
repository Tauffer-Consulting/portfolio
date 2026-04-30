import { BreadcrumbContainer } from './style';
import Breadcrumbs from 'nextjs-breadcrumbs';

export function Breadcrumb({ clear = false }) {
  return (
    <BreadcrumbContainer clear={clear} >
      <Breadcrumbs
        // useDefaultStyle={true}
        replaceCharacterList={[{ from: '_', to: ' ' }]}
      />
    </BreadcrumbContainer>
  )
}

export default Breadcrumb
