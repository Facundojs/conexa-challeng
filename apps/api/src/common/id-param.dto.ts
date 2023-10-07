import { IsNumberString } from 'class-validator'

export class IdParamDTO {
  @IsNumberString()
  id: number
}