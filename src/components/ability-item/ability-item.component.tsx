import * as S from './ability-item.styles'

import Heading from '@components/heading/heading.component'
import Text from '@components/text/text.component'

export type AbilityItemProps = {
  name: string
  level: number
} & React.HTMLAttributes<HTMLDivElement>

const generateBars = (level: number) => {
  const bars = []

  for (let l = 1; l <= 5; l++) {
    const fillBar = level >= l ? 'fill' : ''
    bars.push(<div className={fillBar} key={l} />)
  }

  return bars
}

const AbilityItem: React.FC<AbilityItemProps> = ({ name, level, children }) => (
  <S.Wrapper>
    <S.Skill>
      <Heading level={3} size="xlarge" color="red">
        {name}
      </Heading>
      <S.SkillBar>
        <Text size="medium" color="secondary">
          Level {level}
        </Text>
        <S.Bars>{generateBars(level)}</S.Bars>
      </S.SkillBar>
    </S.Skill>
    <Text className="mt-1 text-md-justify">{children}</Text>
  </S.Wrapper>
)

export default AbilityItem
