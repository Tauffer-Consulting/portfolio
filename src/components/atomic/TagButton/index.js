import {TagsButton} from './style'

export default function TagButton({tag, onClickFn}) {
  return (
    <TagsButton
      onClick={onClickFn}
    >
      {tag}
    </TagsButton>
  )
}
