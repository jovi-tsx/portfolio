import * as S from './loading.styles'

export type LoadingProps = {
  percentage: number
} & React.HTMLAttributes<HTMLDivElement>

const loadingMessage = (percentage: number) => {
  let message = 'Connecting to the server'

  if (percentage >= 20 && percentage < 40)
    message = 'Retrieving files from server'
  else if (percentage >= 40 && percentage < 60)
    message = 'Loading language preferences'
  else if (percentage >= 60 && percentage < 80) message = 'Building application'
  else if (percentage >= 80) message = 'Finishing and compiling'

  return message
}

const Loading: React.FC<LoadingProps> = ({ percentage }) => (
  <S.Wrapper percentage={percentage}>
    <S.LoadingBar>
      <S.Data>
        <S.Message>{loadingMessage(percentage)}</S.Message>
        <S.Percentage>{percentage}%</S.Percentage>
      </S.Data>
      <S.ProgressBar>
        <div />
        <div />
      </S.ProgressBar>
    </S.LoadingBar>
  </S.Wrapper>
)

export default Loading
