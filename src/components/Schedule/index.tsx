import * as S from './styles'

type Props = {
  schedule: {
    days: string[]
    time: string
  }
  runtime: number
  displayTitle?: boolean
}

const Schedule = ({
  runtime,
  displayTitle,
  schedule: { days, time }
}: Props) => {
  return (
    <S.Container>
      {displayTitle && <S.Text variant="labelLarge">Schedule: </S.Text>}
      {days.map((day) => (
        <S.Text key={day}>
          {day}s{time ? ` at ${time} ` : ' '}
        </S.Text>
      ))}

      <S.Text>({runtime} min)</S.Text>
    </S.Container>
  )
}

export default Schedule
